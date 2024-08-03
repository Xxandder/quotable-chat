module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'redux-saga'],
  rules: {
    
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'semi': ['off'],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "padded-blocks": "off",
    "import/no-extraneous-dependencies": "off"
  },
};
