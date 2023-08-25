import { strapiUrl } from "@/config";
import Head from "next/head";
import React from "react";

/**
 * Generates valid html meta tags from Shared SEO component in Strapi
 */
const StrapiSEO = ({ data }) => {
  return (
    <Head>
      {/* Basic meta tags */}
      <title>{data.metaTitle}</title>
      <meta property="og:title" content={data.metaTitle} key="title" />
      <meta name="description" content={data.metaDescription} key="description" />
      <meta name="keywords" content={data.keywords} key="keywords" />
      <meta name="robots" content={data.metaRobots} key="robots" />
      {data.metaImage && (
        <meta name="image" content={strapiUrl + data.metaImage.data.attributes.formats.medium.url} key="image" />
      )}

      {/* Facebook meta tags */}
      {data.metaSocial &&
        data.metaSocial.map((metaSocial) => {
          switch (metaSocial.socialNetwork) {
            case "Facebook":
              return (
                <>
                  <meta name="og:title" content={metaSocial.title} key="og:title" />
                  <meta name="og:description" content={metaSocial.description} key="og:description" />
                </>
              );
            case "Twitter":
              return (
                <>
                  <meta name="twitter:title" content={metaSocial.title} key="twitter:title" />
                  <meta name="twitter:description" content={metaSocial.description} key="twitter:description" />
                </>
              );
          }
        })}
    </Head>
  );
};

export default StrapiSEO;
