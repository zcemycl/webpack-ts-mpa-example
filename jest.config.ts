import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>'],
  verbose: true,
  testEnvironment: 'jsdom',
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  // setupFiles: ['<rootDir>/src/config/globalSetup.js'],
  // setupFilesAfterEnv: ['<rootDir>/test/setup/setup-matchers.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
}

export default config
