import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <>
      <h1>404</h1>
      <p>This page does not exist. Sorry!</p>
      <Link href="/">Zurück zur Startseite</Link>
    </>
  );
};

export default Error404;
