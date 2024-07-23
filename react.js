module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react-perf/recommended",
  ],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
