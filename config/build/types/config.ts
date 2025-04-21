export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "jest" | "frontend";
  publicPath: string;
}

export interface BuildEnv {
  mode?: BuildMode;
  port?: number;
  apiUrl?: string;
  publicPath?: string;
}
