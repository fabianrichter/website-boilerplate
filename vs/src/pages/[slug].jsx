import React from "react";
import Page from "@/components/content-types/pages/page";
import withLayout, { getStaticPagePaths as getStaticPaths, getStaticProps } from "@/lib/with-layout";

const PagePath = (props) => {
  return <Page content={props.content} />;
};

export { getStaticPaths, getStaticProps }

export default withLayout(PagePath);