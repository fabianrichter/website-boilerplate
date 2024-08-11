import { Col, Container, Row } from "@/components/layout";
import React from "react";
import styles from "./section-title.module.scss";

const SectionTitle = ({ data }) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col col={12} lg={8} shiftLg={2}>
            <h2>{data.content}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionTitle;
