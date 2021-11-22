import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "src/layout";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
const Button = dynamic(
  async () => {
    const module = await import("src/components/Button");
    return module.Button;
  },
  {
    ssr: false,
    loading: () => {
      return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
    },
  },
);

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <Button />
      <div>
        <Link href="/sample">
          <a className="text-blue-500 underline">to sample page</a>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
