import { expect, test } from '@playwright/test';

test.describe('Shop with Context', () => {
  let logs: string[] = [];
  test.beforeEach(async ({ page }) => {
    logs = [];

    page.on('console', (msg) => {
      const message = msg.text();
      if (!logs.includes(message) && message.includes('has rendered')) {
        logs.push(message);
      }
    });

    await page.goto('/');
  });

  test('should verify Header render count after adding to cart', async ({
    page,
  }) => {
    await page.getByTestId('add-to-cart-button').first().click();

    expect(logs).not.toContain('Header has rendered (3)');
  });

  test('should verify Product render count after adding to cart', async ({
    page,
  }) => {
    await page.getByTestId('add-to-cart-button').first().click();

    expect(logs).not.toContain('Product has rendered (4)');
  });
});
