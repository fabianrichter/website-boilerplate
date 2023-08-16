import React from "react";

const Text = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.data?.content }} />;
};

export default Text;
