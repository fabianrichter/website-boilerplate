"use client";

import { Col, Container, Row } from '@/components/layout';
import React from 'react';
import styles from './hero-text.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from "prop-types";
import { CTAPropTypes } from '../cta/cta';

const HeroText = ({ data }) => {  
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col col={12} lg={8} shiftLg={2}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {data.small && <p className={styles.small}>{data.small}</p>}
              {data.text && <p className={styles.big}>{data.text}</p>}
              {data.cta?.page.data?.attributes && data.cta?.label && (
                <Link scroll={false} className={styles.cta} href={'/' + data.cta.page.data.attributes.slug}>
                  {data.cta.label}
                </Link>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

HeroText.propTypes = {
  data: PropTypes.shape({
    small: PropTypes.string,
    text: PropTypes.string,
    cta: CTAPropTypes
  })
}

export default HeroText;
