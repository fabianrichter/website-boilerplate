import { apolloClient } from "@/app/apollo-client";
import { PageSlugs, ArticleSlugs } from "@/queries/slugs.gql";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret");
  // Check for secret to confirm this is a valid request
  if (secret !== "Qgf4tXL46N7EHiHbBCRxHTeQJ6mSrEiSixM5rY93") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const client = apolloClient;

    // request all article and page slugs
    /* const { data: articleData } = await client.query({
      query: ArticleSlugs,
    }); */
    const { data: pageData } = await client.query({
      query: PageSlugs,
    });

    // gather the result in one array
    const paths = [
      ...pageData.pages.data.map((page) => "/" + page.attributes.slug),
      //...articleData.articles.data.map((page) => "/articles/" + page.attributes.slug),
    ];

    // pass paths into revalidate function
    await Promise.all(paths.map((path) => revalidatePath(path)));
    return NextResponse.json({ message: "Revalidation successful", paths }, { status: 200 });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json({ message: "Error revalidating", err }, { status: 500 });
  }
}