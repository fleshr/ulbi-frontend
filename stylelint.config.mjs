/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  rules: {
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
  },
};

export default config;
