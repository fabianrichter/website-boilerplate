import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@/components/layout";
import styles from "./list.module.scss";
import _ from "lodash";

const List = ({ data }) => {
  const listItemsAlphabet = [...data.listItems]
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((item) => ({
      ...item,
      startingLetter: item.label.charAt(0).toUpperCase(),
    }));
  const listItems = _.groupBy(listItemsAlphabet, "startingLetter");
  
  return (
    <section className={styles.componentlist}>
      <Container>
        <Row>
          <Col className={styles.wrapper}>
            {Object.entries(listItems).map(([letter, items]) => (
              <div className={styles.group}>
                <h2>{letter}</h2>
                <ul className={styles.list}>
                  {items.map((item) => (
                    <li key={item.label} className={styles.item}>
                      <p className={styles.label}>{item.label}{item.highlight && (
                        <span className={styles.highlight}>★</span>
                      )}</p>
                      <small className={styles.description}>{item.description}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

List.propTypes = {};

export default List;
