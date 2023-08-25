import React, { createContext } from "react";

const BasicContentProvider = (props) => {
  const BasicContent = createContext(props.value);
  return <BasicContent.Provider value={props.value}>{props.children}</BasicContent.Provider>;
};

export default BasicContentProvider;
