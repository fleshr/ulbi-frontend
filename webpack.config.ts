import { resolve } from "path";
import { getConfig } from "./config/build/config";

const mode = "development";
const isDev = mode === "development";

const paths = {
  entry: resolve(__dirname, "src", "index.ts"),
  output: resolve(__dirname, "dist"),
  html: resolve(__dirname, "public", "index.html"),
};

export default getConfig({ mode, paths, isDev });
