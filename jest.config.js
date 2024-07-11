const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  resolver: '<rootDir>/.jest/resolver.js',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!src/components/Common/Icons/ignore/font-awesome/**',
    '!src/components/Common/Form/DatePicker/ReactDatez/**',
    '!src/components/ignore/**',
    '!src/hooks/**',
    '!src/testing/**',
    '!src/app/**',
    '!src/typings/**',
    '!src/components/Common/TopProgressBar/**',
  ],
  // mapCoverage: true,
  coverageDirectory: 'coverage/jest',
  collectCoverage: true,
  // coverageReporters: ['json', 'html'],
  coverageReporters: ['json'],
  coverageThreshold: {
    global: {
      branches: 59,
      functions: 45,
      lines: 72,
      statements: 72,
    },
  },

  roots: ['<rootDir>/__mocks__', '<rootDir>/src'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
