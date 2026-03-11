module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  ignorePatterns: ['Design Multi-Platform UI/**', 'vendor/**'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
