import pluginJs from "@eslint/js";
import type { Linter } from "eslint";
// @ts-expect-error don't have types yet
import pluginCypress from "eslint-plugin-cypress/flat";
import pluginI18next from "eslint-plugin-i18next";
import pluginJest from "eslint-plugin-jest";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginStorybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import myPlugin from "../eslint-plugin";

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
  {
    files: ["**/*.test.{ts,tsx}"],
    extends: [
      pluginJest.configs["flat/style"],
      pluginJest.configs["flat/recommended"],
    ],
  },
  {
    files: ["**/*.cy.{ts,tsx}"],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    extends: [pluginCypress.configs.recommended],
  },
  pluginStorybook.configs["flat/recommended"],
  pluginPrettierRecommended,
  {
    plugins: { myPlugin },
    rules: {
      "myPlugin/import-relative-path": ["error", { alias: "@" }],
      "myPlugin/public-api-import": ["error", { alias: "@" }],
      "myPlugin/layers-import": [
        "error",
        { alias: "@", ignoreImportPatterns: ["app/providers"] },
      ],
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
    files: ["./cypress/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-namespace": [
        "error",
        { allowDeclarations: true, allowDefinitionFiles: true },
      ],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-invalid-void-type": "warn",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./cypress/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
