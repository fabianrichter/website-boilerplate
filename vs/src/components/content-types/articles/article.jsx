import Text from "@/components/components/text/text";
import React from "react";

const Article = ({ content }) => {
  return (
    <div>
      <h1>{content.attributes.title}</h1>
      <Text data={content.attributes.text} />
    </div>
  );
};

export default Article;
