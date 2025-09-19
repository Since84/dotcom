/* Root Jest config aggregating workspaces */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: 'tsconfig.base.json' }],
  },
  moduleNameMapper: {
    '^@ui/(.*)$': '<rootDir>/packages/ui/src/$1',
    '^@config/(.*)$': '<rootDir>/packages/config/src/$1',
    '^@api/(.*)$': '<rootDir>/apps/api/src/$1',
    '^@web/(.*)$': '<rootDir>/apps/web/$1',
  },
  collectCoverageFrom: [
    'apps/api/src/**/*.{ts,tsx}',
    'apps/web/**/*.{ts,tsx}',
    'packages/*/src/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: [],
};
