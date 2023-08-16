import React from "react";
import Page from "@/components/content-types/pages/page";
import { apolloClient } from "@/app/apollo-client";
import { PageQuery } from "@/components/content-types/pages/page.gql";
import { PageSlugs } from "@/queries/slugs.gql";
import { throwServerError } from "@apollo/client";

const PagePath = (props) => {
  return <Page content={props.content} />;
};

export default PagePath;

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

  // if request returns no result, respond with 404
  if (!data.pages.data.length) return { notFound: true };

  // else return resulting page data
  return { props: { content: data.pages.data[0] } };
};
