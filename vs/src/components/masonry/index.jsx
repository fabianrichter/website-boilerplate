import React from 'react';
import styles from './masonry.module.scss';
import classNames from 'classnames';

const Masonry = (props) => {
  const classes = classNames({
    [styles.grid]: true,
  });
  return <div className={classes}>{props.children}</div>;
};

const Cell = (props) => {
  const classes = classNames({
    [styles.cell]: true,
    [props.className]: !!props.className,
    [styles[`span-${props.span}`]]: props.span,
  });
  return <div className={classes}>{props.children}</div>;
};

export { Masonry, Cell };
