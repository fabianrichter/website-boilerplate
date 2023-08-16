import Article from "@/components/content-types/articles/article";
import { usePathname } from "next/navigation";
import React from "react";
import { ArticleSlugs } from "@/queries/slugs.gql";
import { ArticleQuery } from "@/components/content-types/articles/article.gql"
import { apolloClient } from "@/app/apollo-client";

const ArticlePath = ({ content }) => {
  return <Article content={content} />;
};

export default ArticlePath;

export const getStaticPaths = async () => {
  // initialize apolloClient
  const client = apolloClient;
  // get all pages and their slugs
  const { data } = await client.query({
    query: ArticleSlugs,
  });

  // return the resulting paths
  return {
    paths: data.articles.data.map((article) => ({ params: { slug: article.attributes.slug } })),
    fallback: false, // return 404 if none of the specified paths is requested
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params.slug)
  // initialize apollo client
  const client = apolloClient;
  // request data from page requested in params.slug
  const { data } = await client.query({
    query: ArticleQuery,
    variables: {
      slug: params.slug,
    },
  });

  // if request returns no result, respond with 404
  if (!data.articles.data.length) return { notFound: true };

  // else return resulting page data
  return { props: { content: data.articles.data[0] } };
};

