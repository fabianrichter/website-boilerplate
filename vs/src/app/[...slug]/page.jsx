import React from "react";
import { query } from "@/lib/apollo-client";
import { ContentQuery } from "@/components/content-types/content-query.gql";
import Page from "@/components/content-types/pages/page";
import { notFound } from "next/navigation";

const SimplePage = async ({ params }) => {
  const { data } = await query({
    query: ContentQuery,
    variables: { slug: params.slug.join("/") },
  });

  if (data.pages.data.length === 0) {
    notFound()
  }

  return <Page content={data.pages.data[0]} />;
};

export default SimplePage;
