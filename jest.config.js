module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|lucide-react-native|react-native-reanimated|react-native-chart-kit|react-native-svg|@react-native-community/datetimepicker)/)',
  ],
  moduleNameMapper: {
    '^@reduxjs/toolkit$': '<rootDir>/node_modules/@reduxjs/toolkit/dist/cjs/index.js',
    '^redux$': '<rootDir>/node_modules/redux/dist/cjs/redux.cjs',
    '^reselect$': '<rootDir>/node_modules/reselect/dist/cjs/reselect.cjs',
    '^immer$': '<rootDir>/node_modules/immer/dist/cjs/index.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.style.ts',
    '!src/localization/**',
    '!src/theme/**',
  ],
  coverageDirectory: 'coverage',
};
