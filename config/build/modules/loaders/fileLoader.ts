import type { RuleSetRule } from "webpack";

export const getFileLoader = (): RuleSetRule => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    exclude: /node_modules/,
    use: "file-loader",
  };
};
