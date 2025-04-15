import { RuleSetRule } from "webpack";

export const getTsLoader = (): RuleSetRule => {
  return {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
};
