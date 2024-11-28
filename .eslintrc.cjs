module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort", "prettier", "import"],
  ignorePatterns: ["dist", "coverage", "vite.config.ts"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@next/next/no-img-element": "off",
    "jsx-a11y/anchor-has-content": "off",
    "react/jsx-no-constructed-context-values": "off",
    "max-len": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "no-param-reassign": [2, { props: false }],
    "no-template-curly-in-string": "off",
    "no-console": ["warn", { allow: ["info", "error"] }],
    "no-underscore-dangle": ["error", { allow: ["_id", "_default"] }],
    "react/prop-types": "off",
    "react/jsx-indent": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "warn",
    "react/no-array-index-key": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "sort-imports": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^next", "^@?\\w"],
          ["^@(([\\/.]?\\w)|assets|test-utils)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
    "require-await": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      rules: {
        "import/order": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/restrict-template-expressions": [
          "warn",
          { allowBoolean: true, allowNullish: true },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", disallowTypeAnnotations: false },
        ],
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    alias: {
      map: [
        ["api", "@/api"],
        ["assets", "@/assets"],
        ["components", "@/components"],
        ["constants", "@/constants"],
        ["enums", "@/enums"],
        ["hooks", "@/hooks"],
        ["pages", "@/pages"],
        ["routes", "@/routes"],
        ["services", "@/services"],
        ["store", "@/store"],
        ["styles", "@/styles"],
        ["types", "@/types"],
        ["utils", "@/utils"],
        ["shared", "@/shared"],
        ["styles", "./**.css"],
      ],
    },
  },
};
