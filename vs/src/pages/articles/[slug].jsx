import Article from "@/components/content-types/articles/article";
import withLayout, { getStaticArticlePaths as getStaticPaths, getStaticProps } from "@/lib/with-layout";
import React from "react";

const ArticlePath = ({ content }) => {
  return <Article content={content} />;
};

export { getStaticPaths, getStaticProps };

export default withLayout(ArticlePath);
