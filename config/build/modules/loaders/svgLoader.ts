import type { RuleSetRule } from "webpack";

export const getSvgLoader = (): RuleSetRule => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: "@svgr/webpack",
  };
};
