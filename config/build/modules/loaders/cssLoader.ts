import { RuleSetRule } from "webpack";

export const cssLoader: RuleSetRule = {
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
};
