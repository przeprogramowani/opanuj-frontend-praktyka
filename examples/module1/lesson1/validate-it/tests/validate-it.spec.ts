import { expect, test } from '@playwright/test';

test.describe('Number Validator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show Invalid message for empty input', async ({ page }) => {
    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Invalid - empty or non integer');
  });

  test('should show Invalid message for non-integer input', async ({
    page,
  }) => {
    const input = page.locator('#input');
    await input.fill('12.34');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Invalid - empty or non integer');
  });

  test('should show Invalid message for number out of range (>100)', async ({
    page,
  }) => {
    const input = page.locator('#input');
    await input.fill('150');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Invalid number');
  });

  test('should show Invalid message for number out of range (<0)', async ({
    page,
  }) => {
    const input = page.locator('#input');
    await input.fill('-10');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Invalid number');
  });

  test('should show Invalid message for odd number', async ({ page }) => {
    const input = page.locator('#input');
    await input.fill('15');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Invalid number');
  });

  test('should show Valid message for even number between 0 and 100', async ({
    page,
  }) => {
    const input = page.locator('#input');
    await input.fill('42');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const result = page.locator('#result');
    await expect(result).toContainText('Valid');
  });

  test('should clear input and result when Clear button is clicked', async ({
    page,
  }) => {
    const input = page.locator('#input');
    await input.fill('42');

    const validateButton = page.locator('#validation-btn');
    await validateButton.click();

    const clearButton = page.locator('#cleanup-btn');
    await clearButton.click();

    await expect(input).toHaveValue('');
    const result = page.locator('#result');
    await expect(result).toHaveText('');
  });
});
