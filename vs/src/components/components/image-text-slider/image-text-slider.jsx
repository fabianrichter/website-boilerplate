"use client";

import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@/components/layout";
import styles from "./image-text-slider.module.scss";
import StrapiImage from "@/components/strapi/image/image";
import { motion } from "framer-motion";

const ImageTextSlider = ({ data }) => {
  console.log(data);

  if (data.slides.length === 0 || data.slides.length > 1) return;
  const slide = data.slides[0];

  return (
    <section className={styles["image-text-slider"]}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Container className={styles.bg}>
          <Row>
            <Col col={12}>
              <div className={styles.wrapper}>
                <Row>
                  <Col col={5} className={styles.textwrapper}>
                    <p className={styles.text}>{slide.text}</p>
                  </Col>
                  <Col col={7}>
                    <StrapiImage data={slide.image} outerClassName={styles.imagewrapper} fill />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  );
};

ImageTextSlider.propTypes = {};

export default ImageTextSlider;
