import { Col, Container, Row } from "@/components/layout";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/ui/button/button";
import styles from "./cta.module.scss";

const CTA = ({ data }) => {
  if (!data.page || !data.label) return;

  return (
    <section>
      <Container>
        <Row>
          <Col col={12} lg={6} shiftLg={2}>
            <Button
              href={"/" + data.page.data.attributes.slug}
              className={styles.button}
            >
              {data.label}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const CTAPropTypes = PropTypes.shape({
  data: PropTypes.shape({
    page: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }),
});

CTA.propTypes = {
  data: CTAPropTypes,
};

export default CTA;
export { CTAPropTypes };
