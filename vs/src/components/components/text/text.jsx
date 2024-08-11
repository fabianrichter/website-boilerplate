import { Col, Container, Row } from "@/components/layout";
import React from "react";
import styles from "./text.module.scss";

const Text = (props) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col xs="12" lg="6" shiftLg="2">
            <div className={styles["text-wrapper"]}>
              <div dangerouslySetInnerHTML={{ __html: props.data.text }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Text;
