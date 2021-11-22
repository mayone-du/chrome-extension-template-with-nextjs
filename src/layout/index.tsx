import type { NextPage } from "next";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main className="py-2 px-8">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>

      {/* Loading Chrome scripts */}
      <script defer src="../content.js"></script>
      <script defer src="../background.js"></script>
    </main>
  );
};
