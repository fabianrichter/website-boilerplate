import Link from "next/link";
import React from "react";
import { Container } from "../layout";

const Error404 = () => {
  return (
    <Container>
      <section>
        <h1>404</h1>
        <p>Diese Seite existiert nicht.</p>
        <Link scroll={false} href="/">
          Zurück zur Startseite
        </Link>
      </section>
    </Container>
  );
};

export default Error404;
