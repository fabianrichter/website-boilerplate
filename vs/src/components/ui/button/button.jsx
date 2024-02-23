import classNames from "classnames";
import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  const formattedProps = {
    className: classNames({
      [props.className]: props.className,
      [styles.button]: true,
    }),
    ...props,
  };

  if (props.native) {
    return <button {...formattedProps}>{props.children}</button>;
  }
  return <a {...formattedProps}>{props.children}</a>;
};

export default Button;
