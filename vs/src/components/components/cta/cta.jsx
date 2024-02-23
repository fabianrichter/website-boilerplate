import { Col, Container, Row } from '@/components/layout';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const CTA = ({ data }) => {
  if (!data.page || !data.label) return;

  return (
    <section>
      <Container>
        <Row>
          <Col col={12}>
            <Link scroll={false} href={'/' + data.page.data.attributes.slug}>
              {data.label}
            </Link>
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
