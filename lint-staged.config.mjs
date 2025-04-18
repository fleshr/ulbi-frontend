/** @type {import('lint-staged').Configuration} */
const config = {
  "*.scss": "stylelint",
  "*.{ts,tsx}": ["eslint", () => "tsc --noEmit"],
};

export default config;
