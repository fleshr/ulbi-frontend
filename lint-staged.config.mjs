/** @type {import('lint-staged').Configuration} */
const config = {
  "*.scss": "eslint",
  "*.{ts,tsx}": ["eslint", "tsc --noEmit"],
};

export default config;
