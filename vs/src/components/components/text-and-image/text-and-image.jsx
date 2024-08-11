import StrapiImage from "@/components/strapi/image/image";
import React from "react";

import styles from "./text-and-image.module.scss";

const TextAndImage = (props) => {
  const imageData = props.data.imageComponent?.image;
  const textData = props.data.textComponent?.content;

  const directionalClass = styles["direction-" + props.data.direction]

  if (imageData && textData) {
    return (
      <section className={styles.section}>
        <div className={[styles["outer-wrapper"], directionalClass].join(" ")}>
          <div className={styles["text-wrapper"]} dangerouslySetInnerHTML={{ __html: textData }} />
          <div className={styles["imageWrapper"]}>
            <StrapiImage data={imageData} format="large" />
          </div>
        </div>
      </section>
    );
  }
};

export default TextAndImage;
