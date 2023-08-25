import React, { createContext } from "react";

export const Configs = createContext();

const ConfigsProvider = (props) => {
  return <Configs.Provider value={props.value}>{props.children}</Configs.Provider>;
};

export default ConfigsProvider;
