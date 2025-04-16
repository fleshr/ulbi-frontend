import { RuleSetRule } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const getTsLoader = (isDev: boolean): RuleSetRule => {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        getCustomTransformers: () => ({
          before: isDev ? [ReactRefreshTypeScript()] : undefined,
        }),
        transpileOnly: isDev,
      },
    },
  };
};
