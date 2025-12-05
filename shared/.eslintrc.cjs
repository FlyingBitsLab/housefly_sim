module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "jest", "header"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  rules: {
    "header/header": [
      "error",
      "block"    
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "jest/expect-expect": "warn"
  },
  ignorePatterns: ["dist/", "node_modules/"]
};
