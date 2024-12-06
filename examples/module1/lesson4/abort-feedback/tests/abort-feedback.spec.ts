// tests/abort-feedback.spec.ts
import { expect, test } from '@playwright/test';

test.describe('Abort Feedback Application', () => {
  test.beforeEach(async ({ page }) => {
    let isFirstCall = true;

    // Shorten the timeout for faster test execution
    await page.route('**/api/data/users**', async (route) => {
      const url = new URL(route.request().url());
      url.searchParams.set('timeout', isFirstCall ? '5500' : '100');
      isFirstCall = false;

      await route.continue({
        url: url.toString(),
        headers: route.request().headers(),
        method: route.request().method(),
      });
    });

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
    await page.waitForTimeout(2000);

    await expect(
      page.getByText('Sorry, there seems to be connectivity issues...')
    ).toBeVisible();

    await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible();
  });

  test('Retrying the request after timeout', async ({ page }) => {
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Try again' }).click();

    await page.waitForTimeout(500);

    await expect(await page.locator('ul > li').count()).toBeGreaterThan(10);

    await expect(
      page.getByText('Sorry, there seems to be connectivity issues...')
    ).toBeHidden();
  });
});
