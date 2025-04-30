import type { ModuleOptions } from "webpack";
import type { BuildOptions } from "../types/config";
import { getFileLoader } from "./loaders/fileLoader";
import { getScssLoader } from "./loaders/scssLoader";
import { getSvgLoader } from "./loaders/svgLoader";
import { getTsLoader } from "./loaders/tsLoader";

export const getModules = ({ isDev }: BuildOptions): ModuleOptions => {
  return {
    rules: [
      getTsLoader(isDev),
      getScssLoader(isDev),
      getFileLoader(),
      getSvgLoader(),
    ],
  };
};
