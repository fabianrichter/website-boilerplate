import { Col, Container, Row } from '@/components/layout';
import React from 'react';
import styles from './page-title.module.scss';

const PageTitle = (props) => {
  return (
    <section className={styles['page-title']}>
      <Container>
        <Row>
          <Col col={12}>
            <h1>{props.data.content && props.data.content}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
