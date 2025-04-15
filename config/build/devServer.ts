import { BuildOptions } from "./types/config";
import { Configuration } from "webpack-dev-server";

export const getDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
