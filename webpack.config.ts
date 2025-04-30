import { resolve } from "path";
import { getConfig } from "./config/build/config";
import type { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode ?? "development";
  const port = env.port ?? 3000;
  const apiUrl = env.apiUrl ?? "http://localhost:8000";
  const publicPath = env.publicPath ?? "/";
  const withAnalyzer = env.withAnalyzer ?? false;

  const project = "frontend";
  const isDev = mode === "development";

  const paths: BuildPaths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    output: resolve(__dirname, "dist"),
    html: resolve(__dirname, "public", "index.html"),
    src: resolve(__dirname, "src"),
    locales: resolve(__dirname, "public", "locales"),
    buildLocales: resolve(__dirname, "dist", "locales"),
  };

  return getConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project,
    publicPath,
    withAnalyzer,
  });
};
