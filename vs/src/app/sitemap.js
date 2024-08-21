import { publicUrl } from "@/config";
import { query } from "./apollo-client";
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";

export default async function sitemap() {
  const { data: pages } = await query({ query: PageSlugs });
  const { data: articles } = await query({ query: ArticleSlugs });

  const content = [...(pages.pages.data || []), ...(articles.articles.data || [])];

  const sitemapData = [];
  content.forEach((item) => {
    sitemapData.push({
      url: `${publicUrl}/${item.attributes.slug}`,
      lastModified: item.attributes.updatedAt,
      // changeFrequency: "weekly",
      priority: item.attributes.slug === "home" ? 1.0 : 0.5,
    });
  });

  return sitemapData;
}
