import { Col, Container, Row } from "@/components/layout";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./text.module.scss";

const Text = (props) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col col="8">
            <div className={styles["text-wrapper"]}>
              <ReactMarkdown children={props.data.content} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Text;
