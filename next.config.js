/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  pageExtensions: ["page.tsx", "page.ts"],

  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename =
      (isServer ? "../" : "") + "static/wasm/webassembly.wasm";
    return config;
  },
};
