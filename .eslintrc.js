module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "@tanstack/eslint-plugin-query",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "lint-staged.config.js",
    "next.config.js",
    "postcss.config.js",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
