"use client";

import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "@/components/layout";
import { useLocalStorage } from "@reactuses/core";
import styles from "./google-maps.module.scss";
import Button from "@/components/ui/button/button";

const GoogleMaps = ({ data }) => {
  const [consent, setConsent] = useLocalStorage("consent:gmaps", false);
  const { gmapsEmbed, text } = data;

  return (
    <section>
      <Container>
        <Row>
          <Col col={6}>
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
          </Col>
          <Col col={6}>
            {!consent && (
              <div className={styles.previewWrap}>
                <img src="/maps_preview.png" />
                <div className={styles.consentInner1}>
                  <p>Beim Laden der Google-Maps-Karte werden Daten an Google gesendet. Sie können ihre Einwilligung jederzeit hier widerrufen.</p>
                  <Button native onClick={() => setConsent(true)}>Einwilligen und Karte anzeigen</Button>
                </div>
              </div>
            )}
            {consent && (
              <div className={styles.gmaps} dangerouslySetInnerHTML={{ __html: gmapsEmbed }} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

GoogleMaps.propTypes = {
  data: PropTypes.shape({
    gmapsEmbed: PropTypes.string.isRequired,
  }),
};

export default GoogleMaps;
