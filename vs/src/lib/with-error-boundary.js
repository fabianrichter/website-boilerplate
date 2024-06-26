"use client";

import { ErrorBoundary } from "react-error-boundary";

const fallbackRender = ({ error, resetErrorBoundary }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

const withErrorBoundary = (Component) => {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <Component />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;