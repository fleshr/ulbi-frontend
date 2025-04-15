import { resolve } from "path";
import { getConfig } from "./config/build/config";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode ?? "development";
  const port = env.port ?? 3000;

  const isDev = mode === "development";

  const paths: BuildPaths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    output: resolve(__dirname, "dist"),
    html: resolve(__dirname, "public", "index.html"),
    src: resolve(__dirname, "src"),
  };

  return getConfig({ mode, paths, isDev, port });
};
