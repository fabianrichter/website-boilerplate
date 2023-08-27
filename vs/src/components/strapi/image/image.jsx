import { strapiUrl } from "@/config";
import React from "react";

import styles from "./image.module.scss";
import Image from "next/image";

const StrapiImage = ({ data, format }) => {
  // destructure basic image data
  const {
    data: {
      attributes: { alternativeText, caption, url, formats, width, height },
    },
  } = data;

  // get default image url
  let src = strapiUrl + url;
  let imgWidth = width;
  let imgHeight = height;
  // if format is specified, rewrite the default image url
  if (!!format) {
    src = strapiUrl + formats[format].url;
    imgWidth = formats[format].width;
    imgHeight = formats[format].height;
  }

  return (
    <div className={styles["image-wrapper"]}>
      <Image
        className={styles.image}
        src={src}
        width={imgWidth}
        height={imgHeight}
        alt={alternativeText ? alternativeText : null}
      />
      {caption && <span className={styles.caption}>{caption}</span>}
    </div>
  );
};

export default StrapiImage;
