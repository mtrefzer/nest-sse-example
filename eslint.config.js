const tseslint = require('@typescript-eslint/eslint-plugin');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const { defineConfig, globalIgnores } = require('eslint/config');

module.exports = defineConfig([
  globalIgnores(['dist/']),
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs['flat/recommended'], prettierRecommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    },
  },
]);
