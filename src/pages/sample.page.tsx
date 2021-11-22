import type { CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/layout";

const SamplePage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Welcome Sample Page!</h1>
      <Link href="/">
        <a className="text-blue-500 underline">go back index page</a>
      </Link>
    </div>
  );
};

export default SamplePage;

SamplePage.getLayout = Layout;
