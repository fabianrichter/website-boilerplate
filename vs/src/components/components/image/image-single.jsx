import StrapiImage from "@/components/strapi/image/image";
import React from "react";

const ImageSingle = ({ data }) => {
  return (
    <div>
      <StrapiImage data={data.image} />
    </div>
  );
};

export default ImageSingle;
