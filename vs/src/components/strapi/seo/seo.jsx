import { strapiUrl } from "@/config";
import Head from "next/head";
import React from "react";

/**
 * Generates valid html meta tags from Shared SEO component in Strapi
 */
const StrapiSEO = ({ data }) => {
  return {
    title: `${data.metaTitle} | Fabian Richter`,
    description: data.metaDescription,
    keywords: data.keywords,
    robots: data.metaRobots,
    image: data.metaImage?.data.attributes.formats.medium.url,
  }

  return (
    <Head>
      {/* Basic meta tags */}
      <title>Fabian Richter | {data.metaTitle}</title>
      <meta property="og:title" content={data.metaTitle} key="title" />
      <meta name="description" content={data.metaDescription} key="desc" />
      <meta name="keywords" content={data.keywords} key="keywords" />
      <meta name="robots" content={data.metaRobots} key="robots" />
      {data.metaImage?.data && (
        <meta name="image" content={strapiUrl + data.metaImage.data.attributes.formats.medium.url} key="image" />
      )}

      {/* Facebook meta tags */}
      {data.metaSocial &&
        data.metaSocial.map((metaSocial, index) => {
          switch (metaSocial.socialNetwork) {
            case "Facebook":
              return (
                <React.Fragment key={index}>
                  <meta name="og:title" content={metaSocial.title} key={`title${index}`} />
                  <meta name="og:description" content={metaSocial.description} key={`desc${index}`} />
                </React.Fragment>
              );
            case "Twitter":
              return (
                <React.Fragment key={index}>
                  <meta name="twitter:title" content={metaSocial.title} key={`title${index}`} />
                  <meta name="twitter:description" content={metaSocial.description} key={`desc${index}`} />
                </React.Fragment>
              );
          }
        })}
    </Head>
  );
};

export default StrapiSEO;
