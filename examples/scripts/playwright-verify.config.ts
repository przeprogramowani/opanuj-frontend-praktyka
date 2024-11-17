import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const PROJECT_DIR = process.env.PROJECT_DIR;
const EXERCISE_DIR = PROJECT_DIR?.replace('_solutions', '');

export default defineConfig({
  testDir: `../${EXERCISE_DIR}/tests`,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 4,
  reporter: [['list'], ['html', { outputFolder: './playwright/html-report' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'on',
    actionTimeout: 5000,
    navigationTimeout: 15000,
  },
  outputDir: `${PROJECT_DIR}/playwright/test-results`,
});
