import { RuleSetRule } from "webpack";

export const getSvgLoader = (): RuleSetRule => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: "@svgr/webpack",
  };
};
