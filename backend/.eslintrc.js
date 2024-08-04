module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    overrides: [
      {
        // files: ["*.ts", "*.tsx"],
        files: ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"],
        extends: [
          "airbnb-base",
          "airbnb-typescript/base",
          "prettier",
          "plugin:@typescript-eslint/eslint-recommended",
          "plugin:@typescript-eslint/recommended",
        ],
  
        parserOptions: {
          parser: "@typescript-eslint/parser",
          project: "tsconfig.json",
          sourceType: "module",
        },
        rules: {
          "import/prefer-default-export": "off",
          "class-methods-use-this": "off",
        },
      },
    ],
  };