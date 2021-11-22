import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
