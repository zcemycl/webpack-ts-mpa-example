import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    testEnvironment: 'jsdom',
    preset: 'jest-puppeteer',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },      
}

export default config;