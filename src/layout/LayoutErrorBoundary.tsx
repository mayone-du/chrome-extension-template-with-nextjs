import type { VFC, FC } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback: VFC<FallbackProps> = (props) => {
  return (
    <div>
      <pre>{props.error.message}</pre>
    </div>
  );
};

export const LayoutErrorBoundary: FC = (props) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};
