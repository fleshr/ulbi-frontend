export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "jest" | "frontend";
  publicPath: string;
  withAnalyzer?: boolean;
}

export interface BuildEnv {
  mode?: BuildMode;
  port?: number;
  apiUrl?: string;
  publicPath?: string;
  withAnalyzer?: boolean;
}
