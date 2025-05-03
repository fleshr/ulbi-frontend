import type { RuleSetRule } from "webpack";
import babelRemovePropsPlugin from "../../../babel/babelRemovePropsPlugin";

export const getBabelLoader = (): RuleSetRule => {
  return {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          ["@babel/preset-env"],
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
          ["@babel/preset-typescript"],
        ],
        plugins: [[babelRemovePropsPlugin, { attrs: ["data-testid"] }]],
      },
    },
  };
};
