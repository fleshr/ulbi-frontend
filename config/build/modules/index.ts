import { ModuleOptions } from "webpack";
import { tsLoader } from "./loaders/tsLoader";
import { cssLoader } from "./loaders/cssLoader";

export const getModules = (): ModuleOptions => {
  return {
    rules: [tsLoader, cssLoader],
  };
};
