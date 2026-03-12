module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  ignorePatterns: ['Design Multi-Platform UI/**', 'vendor/**'],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
