import type { Configuration } from "webpack";
import { getDevServer } from "./devServer";
import { getModules } from "./modules";
import { getPlugins } from "./plugins";
import { getResolvers } from "./resolvers";
import type { BuildOptions } from "./types/config";

export const getConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev, publicPath } = options;

  return {
    mode,
    entry: paths.entry,
    module: getModules(options),
    resolve: getResolvers(options),
    output: {
      publicPath,
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: getPlugins(options),
    devtool: isDev ? "eval-source-map" : undefined,
    devServer: isDev ? getDevServer(options) : undefined,
  };
};
