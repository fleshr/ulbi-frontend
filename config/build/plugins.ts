import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export const getPlugins = ({
  paths,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
  ];
};
