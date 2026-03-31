// eslint.config.cjs
const reactPlugin = require("eslint-plugin-react");
const js = require("@eslint/js");
module.exports = [
  // ESLint recommended rules
  js.configs.recommended,
  // React specific configuration
  {
    files: ["src/**/*.{js,jsx}"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        // Vitest globals
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly"
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
    settings: {
      react: { version: "detect" }
    }
  }
];
