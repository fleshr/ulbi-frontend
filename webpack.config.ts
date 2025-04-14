import { resolve } from "path";
import { Configuration, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  mode: "development",
  entry: resolve(__dirname, "src", "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;
