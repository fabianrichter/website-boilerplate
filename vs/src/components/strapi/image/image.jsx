import { strapiUrl } from "@/config";
import React from "react";

import styles from "./image.module.scss";

const StrapiImage = ({ data, format }) => {
  // destructure basic image data
  const {
    data: {
      attributes: { alternativeText, caption, url, formats },
    },
  } = data;

  // get default image url
  let src = strapiUrl + url;
  // if format is specified, rewrite the default image url
  if (!!format) {
    src = strapiUrl + formats[format].url;
  }

  return (
    <div className={styles["image-wrapper"]}>
      <img className={styles.image} src={src} alt={alternativeText ? alternativeText : null} />
      {caption && <span className={styles.caption}>{caption}</span>}
    </div>
  );
};

export default StrapiImage;
