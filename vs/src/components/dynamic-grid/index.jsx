import React from 'react';
import styles from './dynamic-grid.module.scss';
import classNames from 'classnames';

const DynamicGrid = (props) => {
  const classes = classNames({
    [styles.grid]: true,
    [styles.auto]: props.auto
  });
  return <div className={classes}>{props.children}</div>;
};

const Cell = (props) => {
  const classes = classNames({
    [styles.cell]: true,
    [props.className]: !!props.className,
    [styles[`col-${props.col}`]]: props.col,
    [styles[`row-${props.row}`]]: props.row
  });
  return <div className={classes}>{props.children}</div>;
};

export { DynamicGrid, Cell };
