import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "../../tsconfig.json";

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  rootDir: "../../",
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/__mocks__/svg.tsx",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.ts"],
};

export default config;
