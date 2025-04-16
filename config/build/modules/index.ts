import { ModuleOptions } from "webpack";
import { getTsLoader } from "./loaders/tsLoader";
import { getScssLoader } from "./loaders/scssLoader";
import { BuildOptions } from "../types/config";
import { getSvgLoader } from "./loaders/svgLoader";
import { getFileLoader } from "./loaders/fileLoader";

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
