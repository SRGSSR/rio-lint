module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    /**********************************************
     * (eslint-config-rio) START
     *********************************************/
    /**********************************************
     * (eslint-config-rio-js) START
     *********************************************/
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": "off",
    "import/namespace": "off",
    "import/no-default-export": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "max-len": ["error", { code: 140, comments: 200 }],
    "no-use-before-define": "off",
    quotes: ["error", "single", { avoidEscape: true }],
    camelcase: "error",
    "no-nested-ternary": "off",
    radix: "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsForRegex: ["^draft"] },
    ],
    "consistent-return": "off",
    "max-classes-per-file": "off",
    "prefer-regex-literals": 0,
    /**********************************************
     * (eslint-config-rio-js) END
     *********************************************/
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: false,
        vars: "all",
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": "off",
    "import/namespace": "off",
    "import/no-default-export": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "max-len": ["error", { code: 140, comments: 200 }],
    "no-use-before-define": "off",
    quotes: ["error", "single", { avoidEscape: true }],
    camelcase: "error",
    "no-nested-ternary": "off",
    radix: "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsForRegex: ["^draft"] },
    ],
    "consistent-return": "off",
    "max-classes-per-file": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "prefer-regex-literals": 0,
    /**********************************************
     * (eslint-config-rio) END
     *********************************************/
    "react/jsx-props-no-spreading": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
    "no-restricted-syntax": [
      "error",
      {
        selector:
          'VariableDeclarator[init.callee.name="useRef"][id.name=/^(.*(?<!Ref))$/][id.name!="ref"]',
        message: "References must have a Ref suffix.",
      },
    ],
  },
};
