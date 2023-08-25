import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RecentArticles } from "./recent-articles.gql";
import Link from "next/link";

const ArticleOverview = ({ data }) => {
  const [articles, setArticles] = useState([]);

  const { loading, error, data: recentArticles } = useQuery(RecentArticles);

  useEffect(() => {
    if (data.mode === "recent") {
      recentArticles && setArticles(recentArticles.articles.data);
    }

    if (data.mode === "manual") {
      setArticles(data.manualArticles);
    }
  }, [recentArticles]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section>
      <h2>
        {data.mode === "recent" && "Recent Articles"}
        {data.mode === "manual" && "Article Picks"}
      </h2>
      {!!articles.length &&
        articles.map((article, index) => (
          <div key={index}>
            <h4>{article.attributes.title}</h4>
            <p>{article.attributes.publishedAt}</p>
            <Link href={"/articles/" + article.attributes.slug}>learn more</Link>
          </div>
        ))}
    </section>
  );
};

export default ArticleOverview;
