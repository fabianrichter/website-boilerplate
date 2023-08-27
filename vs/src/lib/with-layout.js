import Header from "@/components/header/header";
import React, { createContext } from "react";

import { Navigation } from "@/queries/navigation.gql";
import { ConfigQuery } from "@/components/configs/config-query.gql";
import { ContentQuery } from "@/components/content-types/content-query.gql";
import { BasicContent } from "@/components/content-types/basic-content-query.gql";
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";

import { apolloClient } from "@/app/apollo-client";
import StrapiSEO from "@/components/strapi/seo/seo";
import BasicContentProvider from "@/store/basic-content";
import ConfigsProvider from "@/store/configs";
import Footer from "@/components/footer/footer";

/**
 * A HOC that wraps a page and adds the Header component to it.
 *
 * @function withLayout
 * @param Component - a React component (page)
 * @returns {ReactElement}
 * @example withLayout(Component)
 */
const withLayout = (Component) => {
  const wrappedComponent = (props) => (
    <>
      <ConfigsProvider value={props.configs}>
        {props.content?.attributes?.seo && <StrapiSEO data={props.content.attributes.seo} />}
        <Header {...props.headerContent} />
        {props.basicContent ? (
          <BasicContentProvider value={props.basicContent}>
            <Component {...props} />
          </BasicContentProvider>
        ) : (
          <Component {...props} />
        )}
        <Footer />
      </ConfigsProvider>
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
    fallback: "blocking", // return 404 if none of the specified paths is requested
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
    fallback: "blocking", // return 404 if none of the specified paths is requested
  };
};

export const getStaticProps = async ({ params }) => {
  // initialize apollo client
  const client = apolloClient;
  // clear cache before fetching
  await client.cache.reset();

  const props = {};

  // request general page configs
  const { data: configs } = await client.query({
    query: ConfigQuery,
  });
  props.configs = { ...configs };

  // request navigation (also on 404)
  const { data: navigation } = await client.query({
    query: Navigation,
    variables: {
      id: "2",
    },
    fetchPolicy: "network-only"
  });
  props.headerContent = { navigation };

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

  // request data for teasers etc.
  if (!!params) {
    const { data: basicContentData } = await client.query({
      query: BasicContent,
    });
    props.basicContent = basicContentData;
  }

  // return page data (if exists) and header data
  return { props };
};

export default withLayout;
