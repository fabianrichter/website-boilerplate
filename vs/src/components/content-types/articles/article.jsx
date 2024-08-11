import Components from "@/components/components/components";
import { Container } from "@/components/layout";
import React from "react";

const Article = ({ content }) => {
  return (
    <div>
      <section>
        <Container>
          <h1>{content.attributes.title}</h1>
        </Container>
      </section>
      <Components content={content.attributes.components} />
    </div>
  );
};

export default Article;
