"use client";

import { Col, Container, Row } from "@/components/layout";
import StrapiImage from "@/components/strapi/image/image";
import React, { useEffect, useRef } from "react";
import styles from "./portfolio.module.scss";
import Link from "next/link";
import { animate, stagger, useInView } from "framer-motion";

const Portfolio = ({ data }) => {
  const itemsContainerRef = useRef();
  const itemsRef = useRef([]);

  const isInView = useInView(itemsContainerRef);

  useEffect(() => {
    if (!isInView) return;

    const sequence = itemsRef.current.map((item) => [
      item,
      { opacity: [0, 1], y: [50, 0] },
      { duration: 1, delay: stagger(0.2) },
    ]);

    animate(sequence);
  }, [isInView]);

  return (
    <section className={styles.portfolio}>
      <Container>
        {data.title && (
          <Row>
            <Col col={12}>
              <h3 className={styles.headline}>{data.title}</h3>
            </Col>
          </Row>
        )}
        <Row ref={itemsContainerRef}>
          {data.portfolioItem.map((item, i) => (
            <Col key={i} col={12} md={4} className={styles.item}>
              <Link
                scroll={false}
                href={item.link.data?.attributes.slug || "/"}
                ref={(ref) => (itemsRef.current[i] = ref)}
                className={styles.link}
              >
                <StrapiImage data={item.teaserImage.image} fill className={styles.image} />
                <div className={styles["title"]}>{item.title}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
