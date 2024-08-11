import { Html, Head, Main, NextScript } from "next/document";

export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <footer>
          <NextScript />
        </footer>
      </body>
    </Html>
  );
}
