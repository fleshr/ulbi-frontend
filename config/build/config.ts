import { Configuration } from "webpack";
import { getDevServer } from "./devServer";
import { getModules } from "./modules";
import { getPlugins } from "./plugins";
import { getResolvers } from "./resolvers";
import { BuildOptions } from "./types/config";

export const getConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: getModules(options),
    resolve: getResolvers(options),
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
