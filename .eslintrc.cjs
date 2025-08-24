/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { es2023: true, browser: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "prettier"
  ],
  parserOptions: { ecmaFeatures: { jsx: true }, sourceType: "module" },
  plugins: ["react", "react-native", "react-hooks"],
  settings: { react: { version: "detect" } },
  rules: { "react/react-in-jsx-scope": "off" },
  ignorePatterns: ["node_modules/","dist/","web-build/",".expo/",".expo-shared/"]
}
