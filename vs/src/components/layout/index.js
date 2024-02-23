import React from 'react';
import grid from './layout.module.scss';

const Container = (props) => {
  const classNames = [];
  classNames.push(grid.container);
  props.className && classNames.push(props.className);

  return <div className={classNames.join(' ')}>{props.children}</div>;
};

const ContainerFluid = (props) => {
  return <div className={grid['container-fluid']}>{props.children}</div>;
};

const Row = (props) => {
  return <div className={grid.row}>{props.children}</div>;
};

const Col = (props) => {
  const classNames = [];

  props.col && classNames.push(grid['col-' + props.col]);
  props.xs && classNames.push(grid['col-xs-' + props.xs]);
  props.sm && classNames.push(grid['col-sm-' + props.sm]);
  props.md && classNames.push(grid['col-md-' + props.md]);
  props.lg && classNames.push(grid['col-lg-' + props.lg]);

  props.shift && classNames.push(grid['offset-' + props.shift]);
  props.shiftXs && classNames.push(grid['offset-xs-' + props.shiftXs]);
  props.shiftSm && classNames.push(grid['offset-sm-' + props.shiftSm]);
  props.shiftMd && classNames.push(grid['offset-md-' + props.shiftMd]);
  props.shiftLg && classNames.push(grid['offset-lg-' + props.shiftLg]);

  props.className && classNames.push(props.className);

  return <div className={classNames.join(' ')}>{props.children}</div>;
};

export { Container, ContainerFluid, Row, Col };
