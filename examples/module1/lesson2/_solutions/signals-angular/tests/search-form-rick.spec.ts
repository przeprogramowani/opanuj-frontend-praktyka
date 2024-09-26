import test, { expect } from '@playwright/test';

test('search for Ricks', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: /Name/i }).fill('Rick');

  await expect(page.getByRole('listitem')).toHaveCount(20);
});
