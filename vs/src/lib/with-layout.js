// https://stackoverflow.com/questions/67640024/how-to-use-getstaticprops-in-app-js-for-showing-data-fetched-from-api-in-every

import Header from "@/components/header/header";
import React from "react";

import { PageQuery } from "@/components/content-types/pages/page.gql";
import { PageSlugs } from "@/queries/slugs.gql";
import { Navigation } from "@/queries/navigation.gql";

import { apolloClient } from "@/app/apollo-client";

/**
 * A HOC that wraps a page and adds the Header component to it.
 *
 * @function withUsersList
 * @param Component - a React component (page)
 * @returns {ReactElement}
 * @example withUsersList(Component)
 */
const withLayout = (Component) => {
  const wrappedComponent = (props) => (
    <>
      <Header {...props.headerContent } />
      <Component {...props} />
    </>
  );

  return wrappedComponent;
};

export const getStaticPaths = async () => {
  // initialize apolloClient
  const client = apolloClient;
  // get all pages and their slugs
  const { data } = await client.query({
    query: PageSlugs,
  });

  // return the resulting paths
  return {
    paths: data.pages.data.map((page) => ({ params: { slug: page.attributes.slug } })),
    fallback: false, // return 404 if none of the specified paths is requested
  };
};

export const getStaticProps = async ({ params }) => {
  // initialize apollo client
  const client = apolloClient;
  // request data from page requested in params.slug
  const { data } = await client.query({
    query: PageQuery,
    variables: {
      slug: params.slug,
    },
  });
  // request navigation
  const { data: navigation } = await client.query({
    query: Navigation,
    variables: {
      id: "2",
    },
  });

  // if request returns no result, respond with 404
  if (!data.pages.data.length) return { notFound: true };

  // else return resulting page data
  return { props: { content: data.pages.data[0], headerContent: { navigation } } };
};

export default withLayout;
