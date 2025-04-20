import ReactRefreshTypeScript from "react-refresh-typescript";
import { RuleSetRule } from "webpack";

export const getTsLoader = (isDev: boolean): RuleSetRule => {
  const devOptions = {
    getCustomTransformers: () => ({
      before: [ReactRefreshTypeScript()],
    }),
    transpileOnly: true,
  };

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: isDev ? devOptions : undefined,
    },
  };
};
