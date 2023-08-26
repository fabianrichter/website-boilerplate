import React from "react";
import grid from "bootstrap/dist/css/bootstrap-grid.css";

const Container = (props) => {
  return <div className={grid.container}>{props.children}</div>;
};

const Row = (props) => {
  return <div className={grid.row}>{props.children}</div>;
};

const Col = (props) => {
  return <div className={grid["col-" + props.col]}>{props.children}</div>;
};

export { Container, Row, Col };
