"use client";

import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@/components/layout";
import Button from "@/components/ui/button/button";

const ConsentActions = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <p>Aktuelle Einwilligung:</p>
            <ul>{window.localStorage.getItem("consent:gmaps") && <li>Google Maps</li>}</ul>
            <Button
              onClick={() => {
                window.localStorage.clear();
                location.reload();
              }}
            >
              Einwilligung widerrufen und neu laden
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ConsentActions.propTypes = {};

export default ConsentActions;
