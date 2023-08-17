// https://stackoverflow.com/questions/67640024/how-to-use-getstaticprops-in-app-js-for-showing-data-fetched-from-api-in-every

import Header from "@/components/header/header";
import React from "react";

import { ContentQuery } from "@/components/content-types/content-query.gql";
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";
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
      <Header {...props.headerContent} />
      <Component {...props} />
    </>
  );

  return wrappedComponent;
};

export const getStaticPagePaths = async () => {
  // initialize apolloClient
  const client = apolloClient;
  // get all pages and their slugs
  const { data } = await client.query({
    query: PageSlugs,
  });

  // return the resulting paths
  return {
    paths: data.pages.data.map((page) => ({
      params: { slug: page.attributes.slug },
    })),
    fallback: false, // return 404 if none of the specified paths is requested
  };
};

export const getStaticArticlePaths = async () => {
  // initialize apolloClient
  const client = apolloClient;
  // get all pages and their slugs
  const { data } = await client.query({
    query: ArticleSlugs,
  });

  // return the resulting paths
  return {
    paths: data.articles.data.map((article) => ({
      params: { slug: article.attributes.slug },
    })),
    fallback: false, // return 404 if none of the specified paths is requested
  };
};

export const getStaticProps = async ({ params }) => {
  console.log("params", params);
  // initialize apollo client
  const client = apolloClient;
  const props = {};

  // request data from page requested in params.slug
  // if path does not exist, params is undefined → 404 is returned → no content needed
  if (!!params) {
    const { data } = await client.query({
      query: ContentQuery,
      variables: {
        slug: params.slug,
      },
    });
    props.content = data.pages.data[0] || data.articles.data[0];
  }

  // request navigation (also on 404)
  const { data: navigation } = await client.query({
    query: Navigation,
    variables: {
      id: "2",
    },
  });
  props.headerContent = { navigation };

  // return page data (if exists) and header data
  return { props };
};

export default withLayout;
