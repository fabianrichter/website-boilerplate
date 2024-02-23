import { Configs } from '@/store/configs';
import React, { useContext } from 'react';

import styles from './footer.module.scss';
import Link from 'next/link';
import { Col, Container, Row } from '../layout';
import { t } from 'i18next';

const Footer = () => {
  // destructure footer config data
  const {
    configFooter: {
      data: { attributes: footer },
    },
  } = useContext(Configs);

  const footerLine = [
    {
      label: 'Impressum',
      url: footer.imprintAlias || '/',
    },
    {
      label: 'Datenschutz',
      url: footer.privacyAlias || '/',
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col col={12} md={4} className={styles.logo}>
            Website Boilerplate
          </Col>
          <Col col={12} md={4} className={styles.copyright}>
            copyright 2023
          </Col>
          <Col col={12} md={4} className={styles.links}>
            <div className={styles.social}>
              <a href={footer.instagramProfileUrl}>Instagram</a>
            </div>
            <div className={styles['footer-line']}>
              {footerLine.map((link, index) => (
                <Link scroll={false} href={link.url} key={index}>
                  {link.label}
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
