import React from 'react';
import styles from './intro.module.scss';
import StrapiImage from '@/components/strapi/image/image';
import { motion } from 'framer-motion';

const Intro = ({ data }) => {
  return (
    <section className={styles.intro}>
      <motion.div
        className={styles['title-wrapper']}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {data.title && <h1>{data.title}</h1>}
        {data.text && <p className={styles.sub}>{data.text}</p>}
      </motion.div>
      <motion.div
        className={styles['image-wrapper']}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        {data.background && (
          <StrapiImage data={data.background.image} fill className={styles.image} />
        )}
      </motion.div>
    </section>
  );
};

export default Intro;
