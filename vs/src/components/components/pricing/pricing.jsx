import React from "react";
import { Col, Container, Row } from "@/components/layout";
import styles from "./pricing.module.scss";
import IconRecommended from "./icon_recommended.svg";
import Image from "next/image";
import classNames from "classnames";

const Pricing = ({ data }) => {
  return (
    <section className={styles.pricing}>
      <Container>
        <Row>
          {data.pricingItems.map((item, i) => (
            <Col
              key={item.id}
              col={12}
              md={6}
              lg={4}
              shiftLg={data.pricingItems.length === 2 && i === 0 ? 2 : 0}
              className={classNames({
                [styles.col]: true,
                [styles.recommendedBox]: item.recommended,
              })}
            >
              <div
                className={styles.box}
              >
                {item.recommended && (
                  <div className={styles.recommended}>
                    <Image src={IconRecommended} alt="Empfohlen" />
                    <span className={styles.recommendedLabel}>Empfohlen</span>
                  </div>
                )}
                <h3 className={styles.title}>{item.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.body }} className={styles.body} />
                <div className={styles.priceWrapper}>
                  <span className={styles.from}>ab</span>
                  <span className={styles.price}>{item.price}€</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

Pricing.propTypes = {};

export default Pricing;
