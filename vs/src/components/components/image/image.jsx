import React from "react";
import ImageSingle from "./image-single";
import ImageGallery from "./image-gallery";
import { Col, Container, Row } from "@/components/layout";

const Image = ({ data }) => {
  const positionMapping = {
    "left": {
      col: 12,
      shiftLg: 2,
      lg: 6
    },
    "center": {
      col: 12,
      shiftLg: 3,
      lg: 6,
    },
    "right": {
      col: 12,
      shiftLg: 4,
      lg: 6,
    },
    "text_aligned": {
      col: 12,
      shiftLg: 2,
      lg: 8
    },
    "full_width": {
      col: 12
    }
  }
  return (
    <section>
      <Container>
        <Row>
          <Col {...positionMapping[data.position]}>
            {data.images.length === 1 ? (
              <ImageSingle data={data.images[0]} />
            ) : (
              <ImageGallery data={data.images} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Image;
