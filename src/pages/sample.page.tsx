import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const SamplePage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
    </div>
  );
};

export default SamplePage;

SamplePage.getLayout = Layout;
