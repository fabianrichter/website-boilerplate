import React from "react";
import { query } from "@/lib/apollo-client";
import { ContentQuery } from "@/components/content-types/content-query.gql";
import Page from "@/components/content-types/pages/page";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
  const { data } = await query({
    query: ContentQuery,
    variables: { slug: params.slug.join("/") },
  });
  
  if (data.pages.data.length === 0) {
    return;
  }
  const seoData = data.pages.data[0]?.attributes?.seo;
  
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
  const publicationState = searchParams?.publicationState || "LIVE";

  const { data } = await query({
    query: ContentQuery,
    variables: { slug: params.slug.join("/"), publicationState },
  });

  if (data.pages.data.length === 0) {
    notFound();
  }

  return <Page content={data.pages.data[0]} />;
};

export default SimplePage;
