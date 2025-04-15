import { ModuleOptions } from "webpack";
import { getTsLoader } from "./loaders/tsLoader";
import { getCssLoader } from "./loaders/cssLoader";
import { BuildOptions } from "../types/config";

export const getModules = (options: BuildOptions): ModuleOptions => {
  return {
    rules: [getTsLoader(), getCssLoader(options)],
  };
};
