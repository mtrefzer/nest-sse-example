module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      { default: 'generic' }
    ],
  },
}