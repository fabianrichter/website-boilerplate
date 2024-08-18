import React from "react";
import { query } from "@/app/apollo-client";
import { ContentQuery } from "@/components/content-types/content-query.gql";
import Page from "@/components/content-types/pages/page";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
  const { data } = await query({
    query: ContentQuery,
    variables: { slug: params.slug.join("/"), modelName: "page" },
  });

  const content = data.findSlug.data;
  
  // Page does not exist
  if (data.findSlug.data === null) {
    return;
  }
  const seoData = content?.attributes?.seo;
  
  // Page does not have SEO data set
  if (seoData === null) {
    return;
  }

  return {
    title: `${seoData?.metaTitle} | Fabian Richter`,
    description: seoData?.metaDescription,
    keywords: seoData?.keywords,
    robots: seoData?.metaRobots,
    image: seoData?.metaImage?.data?.attributes.formats.medium.url,
  };
}

const SimplePage = async ({ params, searchParams }) => {
  const publicationState = searchParams?.publicationState || "live";

  const { data } = await query({
    query: ContentQuery,
    variables: { slug: params.slug.join("/"), publicationState, modelName: "page" },
  });

  const content = data.findSlug.data;

  if (content === null) {
    notFound();
  }

  return <Page content={content} />;
};

export default SimplePage;
