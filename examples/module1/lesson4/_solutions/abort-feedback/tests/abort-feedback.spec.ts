// tests/abort-feedback.spec.ts
import { expect, test } from '@playwright/test';

test.describe('Abort Feedback Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Connection problem message is not visible by default', async ({
    page,
  }) => {
    await expect(
      page.getByText('Sorry, there seems to be connectivity issues...')
    ).toBeHidden();
  });

  test('Displays connection problem message and retry button after 5 seconds of no response', async ({
    page,
  }) => {
    await page.waitForTimeout(6000);

    await expect(
      page.getByText('Sorry, there seems to be connectivity issues...')
    ).toBeVisible();

    await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible();
  });

  test('Successfully retries the request after timeout', async ({ page }) => {
    await page.waitForTimeout(6000);

    await page.getByRole('button', { name: 'Try again' }).click();

    await expect(page.locator('ul > li').count()).toBeGreaterThan(10);

    await expect(
      page.getByText('Sorry, there seems to be connectivity issues...')
    ).toBeHidden();
  });
});
