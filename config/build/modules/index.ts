import type { ModuleOptions } from "webpack";
import type { BuildOptions } from "../types/config";
import { getBabelLoader } from "./loaders/babelLoader";
import { getFileLoader } from "./loaders/fileLoader";
import { getScssLoader } from "./loaders/scssLoader";
import { getSvgLoader } from "./loaders/svgLoader";

export const getModules = ({ isDev }: BuildOptions): ModuleOptions => {
  return {
    rules: [
      getBabelLoader(isDev),
      getScssLoader(isDev),
      getFileLoader(),
      getSvgLoader(),
    ],
  };
};
