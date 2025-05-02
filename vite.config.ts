import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg" })],
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("http://localhost:8000"),
    __PROJECT__: JSON.stringify("frontend"),
  },
  resolve: {
    alias: { "@": "/src" },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[path][name]__[local]--[hash:base64:5]",
    },
  },
});
