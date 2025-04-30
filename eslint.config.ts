import pluginJs from "@eslint/js";
import type { Linter } from "eslint";
import pluginI18next from "eslint-plugin-i18next";
import pluginJest from "eslint-plugin-jest";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginStorybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import myPlugin from "../eslint-plugin/index";

export default tseslint.config([
  pluginJs.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    settings: { react: { version: "19" } },
    extends: [
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
    ],
  },
  pluginReactHooks.configs["recommended-latest"],
  pluginI18next.configs["flat/recommended"] as Linter.Config,
  pluginJest.configs["flat/style"],
  pluginJest.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],
  pluginPrettierRecommended,
  {
    plugins: { myPlugin },
    rules: {
      "myPlugin/import-relative-path": "error",
    },
  },
  {
    files: ["**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-invalid-void-type": "warn",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
