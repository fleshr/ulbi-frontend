import type { ResolveOptions } from "webpack";
import type { BuildOptions } from "./types/config";

export const getResolvers = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    alias: { "@": paths.src },
    extensions: [".tsx", ".ts", ".js"],
  };
};
