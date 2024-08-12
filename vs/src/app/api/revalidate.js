import { apolloClient } from "@/app/apollo-client";
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== "Qgf4tXL46N7EHiHbBCRxHTeQJ6mSrEiSixM5rY93") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const client = apolloClient;

    // request all article and page slugs
    const { data: articleData } = await client.query({
      query: ArticleSlugs,
    });
    const { data: pageData } = await client.query({
      query: PageSlugs,
    });

    // gather the result in one array
    const paths = [
      ...pageData.pages.data.map((page) => "/" + page.attributes.slug),
      ...articleData.articles.data.map((page) => "/articles/" + page.attributes.slug),
    ];

    // pass paths into revalidate function
    await Promise.all(paths.map(async (path) => await res.revalidate(path)));
    return res.json({ revalidated: true, paths });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}