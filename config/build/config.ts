import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { getModules } from "./modules";
import { getResolvers } from "./resolvers";
import { getPlugins } from "./plugins";
import { getDevServer } from "./devServer";

export const getConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: getModules(),
    resolve: getResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: getPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? getDevServer(options) : undefined,
  };
};
