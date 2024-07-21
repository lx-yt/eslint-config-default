module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",

    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  ignorePatterns: ["node_modules", "dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
