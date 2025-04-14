import { ModuleOptions } from "webpack";
import { tsLoader } from "./loaders/tsLoader";

export const getModules = (): ModuleOptions => {
  return {
    rules: [tsLoader],
  };
};
