"use strict";

module.exports = {
  extends: [
    "standard",
    "plugin:n/recommended",
    "prettier",
  ],

  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
  },

  reportUnusedDisableDirectives: true,

  rules: {
    "no-var": "off",
    "object-shorthand": "off",
  },
};
