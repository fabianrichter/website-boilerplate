import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import styles from "./error-boundary.module.scss";
import { Container } from "@/components/layout";

const fallbackRender = ({ error, resetErrorBoundary }) => {
  console.error(error);

  return (
    <Container>
      <div className={styles.error}>
        <h3>Something went wrong.</h3>
        <p>
          Error Message: <pre>{error.message}</pre>
        </p>
      </div>
    </Container>
  );
};

const ErrorBoundary = ({ children }) => {
  return <ReactErrorBoundary fallbackRender={fallbackRender}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
