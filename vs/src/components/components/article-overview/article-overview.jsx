import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RecentArticles } from "./recent-articles.gql";
import Link from "next/link";
import styles from "./article-overview.module.scss";
import StrapiImage from "@/components/strapi/image/image";
import { Col, Container, Row } from "@/components/layout";
import { Cell, DynamicGrid } from "@/components/dynamic-grid";

const ArticleOverview = ({ data }) => {
  const [articles, setArticles] = useState([]);

  const {
    loading,
    error,
    data: recentArticles,
  } = useQuery(RecentArticles, {
    skip: data.mode === "manual",
    variables: {
      amount: data.maxAmount,
      tags: data.mode === "tag_based" ? data.tags.data.map((data) => data.id) : []
    },
  });

  useEffect(() => {
    if (data.mode === "recent" || data.mode === "tag_based") {
      recentArticles && setArticles(recentArticles.articles.data);
    }

    if (data.mode === "manual") {
      setArticles(data.manualArticles.data);
    }
  }, [recentArticles, data.manualArticles, data.mode]);

  // loading or error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  // no results
  if (!articles.length) {
    return;
  }

  return (
    <section>
      <Container>
        <Row>
          <Col col={12}>
            <DynamicGrid auto>
              {!!articles.length &&
                articles.map((article, index) => (
                  <Cell key={index}>
                    <Link href={"/articles/" + article.attributes.slug} className={styles.link}>
                      <figure className={styles.figure}>
                        <StrapiImage
                          outerClassName={styles["image-wrapper"]}
                          className={styles.image}
                          data={{ ...article.attributes.teaserImage.image }}
                          fill
                        />
                        <figcaption className={styles.figcaption}>
                          <span className={styles.title}>{article.attributes.title}</span>
                          {article.attributes.teaserText && (
                            <span className={styles.date}>{article.attributes.teaserText}</span>
                          )}
                        </figcaption>
                      </figure>
                    </Link>
                  </Cell>
                ))}
            </DynamicGrid>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArticleOverview;
