import classNames from "classnames";
import React from "react";
import styles from "./button.module.scss";

const Button = ({ className, native, children, ...props }) => {
  const formattedProps = {
    className: classNames({
      [className]: className,
      [styles.button]: true,
    }),
    ...props,
  };

  if (native) {
    return <button {...formattedProps}>{children}</button>;
  }
  return <a {...formattedProps}>{children}</a>;
};

export default Button;
