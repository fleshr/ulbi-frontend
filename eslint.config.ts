import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginStorybook from "eslint-plugin-storybook";
import pluginJest from "eslint-plugin-jest";
import pluginI18next from "eslint-plugin-i18next";
import { Linter } from "eslint";

export default tseslint.config([
  pluginJs.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs["recommended-latest"],
  pluginI18next.configs["flat/recommended"] as Linter.Config,
  pluginJest.configs["flat/style"],
  pluginJest.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],
  pluginPrettierRecommended,
  {
    files: ["**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
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
