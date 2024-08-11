import { Col, Container, Row } from "@/components/layout";
import { strapiUrl } from "@/config";
import React from "react";

const DownloadOverview = ({ data }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col col={12} lg={8} shiftLg={2}>
            <ul>
              {data.items.map((item) => (
                <li key={item.id}>
                  <a href={strapiUrl + item.media.data.attributes.url} download={true} target="blank" rel="noreferrer">
                    {item.text || item.media.data.attributes.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadOverview;
