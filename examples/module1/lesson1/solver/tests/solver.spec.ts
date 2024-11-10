import { expect, test } from '@playwright/test';

test.describe('Calculator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should perform basic arithmetic operations', async ({ page }) => {
    // Setup test values
    await page.locator('input[type="number"]').first().fill('10');
    await page.locator('input[type="number"]').last().fill('5');

    // Test addition
    await page.getByText('+').click();
    await expect(page.getByText('Result: 15')).toBeVisible();

    // Test subtraction
    await page.getByText('-').click();
    await expect(page.getByText('Result: 5')).toBeVisible();

    // Test multiplication
    await page.getByText('*').click();
    await expect(page.getByText('Result: 50')).toBeVisible();

    // Test division
    await page.getByText('/').click();
    await expect(page.getByText('Result: 2')).toBeVisible();
  });

  test('should handle division by zero', async ({ page }) => {
    // Setup test values
    await page.locator('input[type="number"]').first().fill('10');
    await page.locator('input[type="number"]').last().fill('0');

    // Test division by zero
    await page.getByText('/').click();
    await expect(page.getByText('Cannot divide by zero')).toBeVisible();
  });

  test('should handle empty inputs', async ({ page }) => {
    // Clear first input (will be 0 by default)
    await page.locator('input[type="number"]').first().fill('');
    await page.locator('input[type="number"]').last().fill('5');

    // Test operation with empty input
    await page.getByText('+').click();
    await expect(page.getByText('Result: 5')).toBeVisible();
  });

  test('should handle decimal numbers', async ({ page }) => {
    await page.locator('input[type="number"]').first().fill('3.5');
    await page.locator('input[type="number"]').last().fill('2.1');

    await page.getByText('+').click();
    await expect(page.getByText('Result: 5.6')).toBeVisible();
  });
});
