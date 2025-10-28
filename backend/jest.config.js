module.exports = {
  testEnvironment: 'node',
  testTimeout: 10000,
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
};