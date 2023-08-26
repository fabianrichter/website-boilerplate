import { Col, Container, Row } from "@/components/layout";
import React from "react";

const Text = (props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col col="8">
            <div dangerouslySetInnerHTML={{ __html: props.data?.content }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Text;
