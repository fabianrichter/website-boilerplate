import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@/components/layout";

const Accordeon = ({ data }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" lg="8" shiftLg={2}>
            <div className="accordeon-wrapper">
              {data.items.map((item) => (
                <div className="accordeon-item" key={item.id}>
                  <div className="accordeon-header">{item.title}</div>
                  <div className="accordeon-body" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Accordeon.propTypes = {};

export default Accordeon;
