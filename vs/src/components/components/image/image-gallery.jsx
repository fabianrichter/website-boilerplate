import React from "react";

const ImageGallery = (props) => {
  return (
    <div>
      {props.data.map((item, index) => (
        <div key={index}>{item.attributes.name}</div>
      ))}
    </div>
  );
};

export default ImageGallery;
