const path = require("path");

module.exports = {
  entry: {
    content: "./src/scripts/content.ts",
    background: "./src/scripts/background.ts",
  },
  // background.jsがmanifest.jsonと同階層にいなければならないため、出力先をmanifestと同階層に指定
  output: {
    path: path.resolve(__dirname, "../extensions"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
