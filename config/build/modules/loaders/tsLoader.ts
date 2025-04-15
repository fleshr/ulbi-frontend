import { RuleSetRule } from "webpack";
import { BuildOptions } from "../../types/config";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const getTsLoader = ({ isDev }: BuildOptions): RuleSetRule => {
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
