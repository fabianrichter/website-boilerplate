"use client";

import { Configs } from "@/store/configs";
import React, { useContext } from "react";

import styles from "./footer.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "../layout";
import ReactMarkdown from "react-markdown";
import Menu from "../header/menu";

const Footer = ({ legal }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col col={12} className={styles.footerline}>
            <p className={styles.sitename}>
              <b>Fabian Richter</b> © {new Date().getFullYear()}
            </p>
            <ul className={styles.legal}>
              {legal.renderNavigation.map((item) => (
                <li key={item.title}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
