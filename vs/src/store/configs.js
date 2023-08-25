import React, { createContext } from "react";

const ConfigsProvider = (props) => {
  const Configs = createContext(props.value);
  return <Configs.Provider value={props.value}>{props.children}</Configs.Provider>;
};

export default ConfigsProvider;
