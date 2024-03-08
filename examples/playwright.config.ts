import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const BASE_URL = 'https://en.wikipedia.org';
const PROJECT_DIR = './module2/lesson3/base';
const SETUP_PATH_REGEX = '**/*.setup.ts';
const LOGGED_IN_PATH_REGEX = '**/logged-in/*.spec.ts';

export const STORAGE_STATE = path.join(
  __dirname,
  `${PROJECT_DIR}/playwright/.auth/user.json`
);

const isRunningExtended = PROJECT_DIR.includes('extended');

export default defineConfig({
  testDir: `${PROJECT_DIR}/tests`,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : isRunningExtended ? 2 : undefined,
  reporter: [
    ['html', { outputFolder: `${PROJECT_DIR}/playwright/html-report` }],
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'on',
    actionTimeout: process.env.CI ? 10000 : 5000,
    navigationTimeout: process.env.CI ? 30000 : 15000,
  },
  outputDir: `${PROJECT_DIR}/playwright/test-results`,
  projects: isRunningExtended
    ? undefined
    : [
        {
          name: 'setup',
          testMatch: SETUP_PATH_REGEX,
        },
        {
          name: 'e2e tests - logged in',
          dependencies: ['setup'],
          testMatch: LOGGED_IN_PATH_REGEX,
          use: {
            storageState: STORAGE_STATE,
          },
        },
        {
          name: 'e2e tests',
          testIgnore: [SETUP_PATH_REGEX, LOGGED_IN_PATH_REGEX],
        },
      ],
});
