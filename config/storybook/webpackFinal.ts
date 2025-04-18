import { resolve } from "path";
import { Configuration, RuleSetRule } from "webpack";
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

  return config;
};
