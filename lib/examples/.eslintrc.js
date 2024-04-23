module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-components": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "vue/no-reserved-keys": "off",
    "linebreak-style": [0, "error", "windows"],
  },
};
