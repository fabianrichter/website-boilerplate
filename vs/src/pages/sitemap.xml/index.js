import { getServerSideSitemapLegacy } from 'next-sitemap';
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";
import { apolloClient } from '@/app/apollo-client';

export const getServerSideProps = async (ctx) => {
  // initialize apolloClient
  const client = apolloClient;

  const { data: pagesData } = await client.query({
    query: PageSlugs,
  });

  const { data: articlesData } = await client.query({
    query: ArticleSlugs,
  });

  // return the resulting paths

  const pages = pagesData.pages.data.map((page) => ({
    loc: "https://www.tischlerei-kubitz.de/" + page.attributes.slug,
    lastmod: new Date(page.attributes.updatedAt).toISOString(),
  }));

  const articles = articlesData.articles.data.map((article) => ({
    loc: "https://www.tischlerei-kubitz.de/" + article.attributes.slug,
    lastmod: new Date(article.attributes.updatedAt).toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, [...pages, ...articles]);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
