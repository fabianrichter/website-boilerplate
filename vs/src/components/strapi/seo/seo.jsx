import Head from "next/head";
import React from "react";

/**
 * Generates valid html meta tags from Shared SEO component in Strapi
 */
const StrapiSEO = ({ data }) => {
  return (
    <Head>
      <title>{data.metaTitle}</title>
      <meta property="og:title" content={data.metaTitle} key="title" />
      <meta name="description" content={data.metaDescription} key="description" />
      <meta name="keywords" content={data.keywords} key="keywords" />
      <meta name="robots" content={data.metaRobots} key="robots" />
    </Head>
  );
};

export default StrapiSEO;
