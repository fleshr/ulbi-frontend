import { ModuleOptions } from "webpack";
import { getTsLoader } from "./loaders/tsLoader";
import { getCssLoader } from "./loaders/cssLoader";
import { BuildOptions } from "../types/config";
import { getSvgLoader } from "./loaders/svgLoader";
import { getFileLoader } from "./loaders/fileLoader";

export const getModules = (options: BuildOptions): ModuleOptions => {
  return {
    rules: [
      getTsLoader(),
      getCssLoader(options),
      getFileLoader(),
      getSvgLoader(),
    ],
  };
};
