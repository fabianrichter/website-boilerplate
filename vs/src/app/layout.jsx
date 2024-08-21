import "../scss/globals.scss";

import { Navigation } from "@/queries/navigation.gql";
import { query } from "@/app/apollo-client";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Container } from "@/components/layout";

export const metadata = {
  title: "Fabian Richter",
  description: "Fabian Richter",
};

export default async function RootLayout({ children }) {
  // request navigation (also on 404)
  try {
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
        <Script
          src="https://umami.serve-ff.de/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
        <body>
          <Header navigation={headerContent} legal={footerContent} />
          <main>{children}</main>
          <Footer legal={footerContent} />
        </body>
      </html>
    );
  } catch (err) {
    return (
      <html lang="de">
        <body>
          <Container>
            <div style={{ textAlign: "center" }}>
              <h2>Level 500</h2>
              <p>
                Start setting something up in your backend first, dude...
                <br />
                Oh and check out your RootLayout in app/layout.jsx to get started.
              </p>
            </div>
          </Container>
        </body>
      </html>
    );
  }
}
