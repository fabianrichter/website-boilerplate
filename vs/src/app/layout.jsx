import "../scss/globals.scss";

import { Navigation } from "@/queries/navigation.gql";
import { query } from "@/lib/apollo-client";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Head from "next/head";

export const metadata = {
  title: "Fabian Richter",
  description: "Fabian Richter",
};

export default async function RootLayout({ children }) {
  // request navigation (also on 404)
  const { data: headerContent } = await query({
    query: Navigation,
    variables: {
      slug: "main-navigation",
    },
    fetchPolicy: "network-only",
  });

  // request footer legal navigation (also on 404)
  const { data: footerContent } = await query({
    query: Navigation,
    variables: {
      slug: "legal",
    },
    fetchPolicy: "network-only",
  });

  return (
    <html lang="en">
      <Head>
        <script
          defer
          src="https://umami.serve-ff.de/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        ></script>
      </Head>
      <body>
        <Header navigation={headerContent} />
        <main>{children}</main>
        <Footer legal={footerContent} />
      </body>
    </html>
  );
}
