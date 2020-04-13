module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    legacyDecorators: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/href-no-hash": "off",
    "react/prefer-stateless-function": "off",
    "no-param-reassign": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "react/jsx-filename-extension": 0,
  },
};
