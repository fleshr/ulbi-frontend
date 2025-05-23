import { resolve } from "path";
import type { Configuration, RuleSetRule } from "webpack";
import { DefinePlugin } from "webpack";
import { getScssLoader } from "../build/modules/loaders/scssLoader";
import { getSvgLoader } from "../build/modules/loaders/svgLoader";

export const webpackFinal = (config: Configuration) => {
  if (config.resolve) {
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      "@": resolve(__dirname, "..", "..", "src"),
    };
  }

  if (config.module?.rules) {
    config.module.rules.map((rule) => {
      if (
        (rule as RuleSetRule).test &&
        ((rule as RuleSetRule).test as RegExp).test(".svg")
      ) {
        (rule as RuleSetRule).exclude = /\.svg$/;
      }
      return rule;
    });
    config.module.rules.push(getScssLoader(true));
    config.module.rules.push(getSvgLoader());
  }

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify("http://localhost:8000"),
      __PROJECT__: JSON.stringify("storybook"),
    }),
  );

  return config;
};
