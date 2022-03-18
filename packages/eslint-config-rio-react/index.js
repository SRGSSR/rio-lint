module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "@srgssr/eslint-config-rio",
  ],
  rules: {
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
