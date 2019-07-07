// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'prettier/prettier': 'error',
    semi: 0,
    strict: 0,
    'valid-jsdoc': 2,
    'no-console': 'warn',
    'space-before-function-paren': 0,
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^[$_]',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^[$_]'
      }
    ]
  },
  globals: {
    nx: true
  }
};
