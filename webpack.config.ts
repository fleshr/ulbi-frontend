import { resolve } from "path";
import { getConfig } from "./config/build/config";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode ?? "development";
  const port = env.port ?? 3000;

  const isDev = mode === "development";

  const paths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    output: resolve(__dirname, "dist"),
    html: resolve(__dirname, "public", "index.html"),
  };

  return getConfig({ mode, paths, isDev, port });
};
