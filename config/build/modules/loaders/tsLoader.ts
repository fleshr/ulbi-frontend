import { RuleSetRule } from "webpack";

export const tsLoader: RuleSetRule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};
