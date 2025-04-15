import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const getResolvers = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    alias: { "@": paths.src },
    extensions: [".tsx", ".ts", ".js"],
  };
};
