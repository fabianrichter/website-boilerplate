import { Configs } from "@/store/configs";
import React, { useContext } from "react";

import styles from "./footer.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "../layout";
import { t } from "i18next";

const Footer = () => {
  // destructure footer config data
  const {
    configFooter: {
      data: { attributes: footer },
    },
  } = useContext(Configs);

  const footerLine = [
    {
      label: "Impressum",
      url: footer.imprintAlias || "/",
    },
    {
      label: "Datenschutz",
      url: footer.privacyAlias || "/",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col col={12} className={styles.logo}>
            <p>
              <b>Website Boilerplate</b>
            </p>
            <p>Copyright 2023</p>
          </Col>
        </Row>

        <Row>
          <Col col={12} lg={2}>
            {footerLine.map((link, index) => (
              <div>
                <Link scroll={false} href={link.url} key={index}>
                  {link.label}
                </Link>
              </div>
            ))}
          </Col>
          <Col col={12} lg={2}>
            <div className={styles.social}>
              <a href={footer.instagramProfileUrl}>Instagram</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
