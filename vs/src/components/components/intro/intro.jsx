"use client";

import React from "react";
import styles from "./intro.module.scss";
import StrapiImage from "@/components/strapi/image/image";
import { motion } from "framer-motion";
import { Col, Container, Row } from "@/components/layout";

const Intro = ({ data }) => {
  return (
    <section className={styles.intro}>
      <div className={styles["title-wrapper"]}>
        <Container>
          <Row>
            <Col col="12" lg="8">
              {data.title && <h1>{data.title}</h1>}
              {data.text && <p className={styles.sub}>{data.text}</p>}
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles["image-wrapper"]}>
        {data.background && (
          <StrapiImage data={data.background.image} fill className={styles.image} />
        )}
      </div>
    </section>
  );
};

export default Intro;
