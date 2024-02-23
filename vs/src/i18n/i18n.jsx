import React, { createContext } from "react";

export const I18n = createContext();

const I18nProvider = (props) => {
  return <I18n.Provider value={props.value}>{props.children}</I18n.Provider>;
};

export default I18nProvider;
