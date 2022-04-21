module.exports = {
  ignorePatterns: ["dist", "build", "coverage"],
  extends: ["airbnb/base", "plugin:prettier/recommended"],
  rules: {
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
  },
};
