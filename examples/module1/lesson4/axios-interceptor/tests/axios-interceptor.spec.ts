import { expect, test } from '@playwright/test';

test.describe('Axios Interceptor', () => {
  test('should log response time to the console', async ({ page }) => {
    const consoleLogs: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleLogs.push(msg.text());
      }
    });

    await page.goto('/');

    await page.waitForSelector('#data');

    const logPattern = /Request to .* took \d+ms/;
    expect(consoleLogs).toContainEqual(expect.stringMatching(logPattern));
  });
});
