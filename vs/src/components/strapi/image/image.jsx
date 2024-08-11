import { strapiUrl } from '@/config';
import React from 'react';

import styles from './image.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

const customLoader = ({ src, width, quality }) => {
  const prefix = (() => {
    switch (width) {
      case 640:
        return 'small_';
      case 1024:
        return 'medium_';
      case 1600:
        return 'large_';
      default:
        return "";
    }
  })();

  const path = "/uploads/" + prefix + src.replace("/uploads/", "")
  return strapiUrl + path;
};

const StrapiImage = ({
  data,
  format,
  fill = false,
  w,
  h,
  className,
  outerClassName,
  enableCaption = false,
  clickable,
}) => {
  if (!data.data) return;

  // destructure basic image data
  const {
    data: {
      attributes: { alternativeText, caption, url, formats, width, height },
    },
  } = data;

  // get default image url

  const src = formats[format]?.url || url;
  let imgWidth = w || formats[format]?.width || width;
  let imgHeight = h || formats[format]?.height || height;

  const originalPath = strapiUrl + url;

  const classes = classNames({
    [styles.image]: true,
    [className]: !!className,
  });

  const outerClasses = classNames({
    [styles['image-wrapper']]: true,
    [outerClassName]: !!outerClassName,
  });

  const renderImage = (
    <>
      <Image
        loader={customLoader}
        className={classes}
        src={src}
        fill={fill ? true : false}
        width={fill ? undefined : imgWidth}
        height={fill ? undefined : imgHeight}
        alt={alternativeText ? alternativeText : ''}
      />
      {caption && enableCaption && (
        <div className={styles.caption}>
          <span className={styles.captionInner}>{caption}</span>
        </div>
      )}
    </>
  );

  if (clickable)
    return (
      <Link href={originalPath} target="blank" className={outerClasses}>
        {renderImage}
      </Link>
    );

  return <div className={outerClasses}>{renderImage}</div>;
};

export default StrapiImage;
