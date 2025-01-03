import react from "eslint-plugin-react";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
  {
    plugins: {
      react,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: babelParser,
    },

    rules: {
      "comma-dangle": 0,
      "no-cond-assign": 2,
      "no-console": 0,
      "no-constant-condition": 2,
      "no-control-regex": 0,
      "no-debugger": 0,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty": 2,
      "no-empty-character-class": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-parens": 0,
      "no-extra-semi": 2,
      "no-func-assign": 2,
      "no-inner-declarations": [2, "functions"],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-negated-in-lhs": 2,
      "no-obj-calls": 2,
      "no-regex-spaces": 2,
      "no-reserved-keys": 0,
      "no-sparse-arrays": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-jsdoc": 0,
      "valid-typeof": 2,
      "block-scoped-var": 0,
      complexity: 0,
      "consistent-return": 0,
      curly: [2, "all"],
      "default-case": 0,
      "dot-notation": 0,
      eqeqeq: 2,
      "guard-for-in": 2,
      "no-alert": 2,
      "no-caller": 2,
      "no-div-regex": 2,
      "no-labels": 2,
      "no-eq-null": 0,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-floating-decimal": 2,
      "no-implied-eval": 2,
      "no-iterator": 2,
      "no-lone-blocks": 0,
      "no-loop-func": 0,
      "no-multi-spaces": 2,
      "no-multi-str": 2,
      "no-native-reassign": 0,
      "no-new": 2,
      "no-new-func": 0,
      "no-new-wrappers": 2,
      "no-octal": 2,
      "no-octal-escape": 2,
      "no-param-reassign": 2,
      "no-process-env": 0,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-return-assign": 2,
      "no-script-url": 2,
      "no-self-compare": 0,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 2,
      "no-void": 2,
      "no-warning-comments": 0,
      "no-with": 2,
      radix: 2,
      "vars-on-top": 0,
      "wrap-iife": 2,

      yoda: [
        2,
        "never",
        {
          exceptRange: true,
        },
      ],

      strict: 0,
      "no-catch-shadow": 2,
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow": 2,
      "no-shadow-restricted-names": 2,
      "no-undef": 2,
      "no-undef-init": 2,
      "no-undefined": 0,

      "no-unused-vars": [
        2,
        {
          vars: "all",
          args: "after-used",
        },
      ],

      "no-use-before-define": 0,
      "handle-callback-err": [2, "error"],
      "no-mixed-requires": [2, true],
      "no-new-require": 2,
      "no-path-concat": 2,
      "no-process-exit": 0,
      "no-restricted-modules": 0,
      "no-sync": 2,

      "brace-style": [
        2,
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],

      camelcase: [
        2,
        {
          properties: "always",
        },
      ],

      "comma-style": [2, "last"],
      "consistent-this": 0,
      "eol-last": 2,
      "func-names": 0,
      "func-style": 0,

      "key-spacing": [
        2,
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      "max-nested-callbacks": 0,
      "new-cap": 0,
      "new-parens": 2,
      "newline-after-var": 0,
      "no-array-constructor": 2,
      "no-inline-comments": 0,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-multiple-empty-lines": 0,
      "no-nested-ternary": 0,
      "no-new-object": 2,
      "no-spaced-func": 2,
      "no-ternary": 0,
      "no-trailing-spaces": 2,
      "no-underscore-dangle": 0,
      "one-var": [2, "never"],
      "operator-assignment": [2, "always"],
      "padded-blocks": 0,
      semi: [2, "always"],

      "semi-spacing": [
        2,
        {
          before: false,
          after: true,
        },
      ],

      "sort-vars": 0,
      "keyword-spacing": [2, { before: true, after: true }],
      "space-before-blocks": [2, "always"],

      "space-before-function-paren": [
        2,
        {
          anonymous: "always",
          named: "never",
        },
      ],

      "space-in-brackets": 0,
      "space-in-parens": 0,

      "space-infix-ops": [
        2,
        {
          int32Hint: false,
        },
      ],

      "space-unary-ops": [
        2,
        {
          words: true,
          nonwords: false,
        },
      ],

      "spaced-comment": [2, "always"],
      "wrap-regex": 0,
      "no-var": 0,
      "max-len": [2, 80, 4],
    },
  },
];
