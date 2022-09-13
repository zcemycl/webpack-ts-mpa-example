import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    testEnvironment: 'jsdom',
    preset: 'jest-puppeteer',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },      
    collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}',
        '!src/**/*.d.ts'
    ]
}

export default config;