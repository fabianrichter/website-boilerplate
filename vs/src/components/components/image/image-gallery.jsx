import React from "react";

const ImageGallery = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <div>{item.attributes.name}</div>
      ))}
    </div>
  );
};

export default ImageGallery;
