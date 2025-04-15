import { RuleSetRule } from "webpack";

export const getFileLoader = (): RuleSetRule => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    use: "file-loader",
  };
};
