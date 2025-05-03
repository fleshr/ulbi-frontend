import type { StorybookConfig } from "@storybook/react-webpack5";
import { webpackFinal } from "./webpackFinal";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
        backgrounds: false,
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-mock",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal,
};

export default config;
