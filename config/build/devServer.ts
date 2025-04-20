import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const getDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
