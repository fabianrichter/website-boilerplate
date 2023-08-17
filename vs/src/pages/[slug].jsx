import React from "react";
import Page from "@/components/content-types/pages/page";
import { apolloClient } from "@/app/apollo-client";
import { PageQuery } from "@/components/content-types/pages/page.gql";
import { PageSlugs } from "@/queries/slugs.gql";
import { throwServerError } from "@apollo/client";
import withLayout, { getStaticPaths, getStaticProps } from "@/lib/with-layout";

const PagePath = (props) => {
  return <Page content={props.content} />;
};

export { getStaticPaths, getStaticProps }

export default withLayout(PagePath);