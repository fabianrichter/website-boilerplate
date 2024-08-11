import Image from '@/components/strapi/image/image';
import React from 'react';
import styles from './gallery.module.scss';
import { Container } from '@/components/layout';
import { Cell, Masonry } from '@/components/masonry';

const Gallery = ({ data }) => {
  const images = data.gallery?.images?.data.map((image) => {
    const ratio = image.attributes.width / image.attributes.height;

    const breakpoints = {
      0.75: 5,
      1.0: 4,
      1.5: 3,
      2: 2,
    };

    function getBreakpoint(ratio, breakpoints) {
      for (const breakpoint in breakpoints) {
        if (ratio < parseFloat(breakpoint)) {
          return breakpoints[breakpoint];
        }
      }
      return 1;
    }

    const span = getBreakpoint(ratio, breakpoints)

    return {
      ...image,
      col: ratio > 1.5 ? 2 : 1,
      formatstr: ratio > 1.5 || ratio < 0.75 ? 'large' : 'medium',
      span
    };
  });

  if (!images?.length) return null;

  return (
    <section>
      <Container>
        <Masonry>
          {images.map((image, i) => (
            <Cell key={i} className={styles.cell} span={image.span}>
              <Image data={{ data: image }} fill enableCaption clickable />
            </Cell>
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Gallery;
