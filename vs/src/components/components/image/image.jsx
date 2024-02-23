import React from "react";
import ImageSingle from "./image-single";
import ImageGallery from "./image-gallery";

const Image = (props) => {
  return (
    <div>
      {props.data.images.length === 1 ? (
        <ImageSingle data={props.data.images[0]} />
      ) : (
        <ImageGallery data={props.data.image.data} />
      )}
    </div>
  );
};

export default Image;
