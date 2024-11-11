import { expect, test } from '@playwright/test';

test.describe('Character Search with Signals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should filter characters by name', async ({ page }) => {
    await page.getByPlaceholder('Enter character name').fill('Rick');

    const characterList = page.getByRole('list');
    await expect(characterList).toBeVisible();

    // Verify exact number of Rick headings
    const rickHeadings = page.getByRole('heading', { name: /Rick/i });
    await expect(rickHeadings).toHaveCount(21);

    // Optionally verify that at least one is visible
    await expect(rickHeadings.first()).toBeVisible();
  });

  test('should filter characters by gender', async ({ page }) => {
    await page.getByLabel('Gender').selectOption('female');

    const characterList = page.getByRole('list');
    await expect(characterList).toBeVisible();

    // Get all list items and check if any contain "Beth"
    const listItems = characterList.getByRole('listitem');
    const bethHeadings = listItems.getByRole('heading', { name: /Beth/i });
    await expect(await bethHeadings.count()).toBeGreaterThan(1);
  });

  test('should sort characters by name', async ({ page }) => {
    await page.getByPlaceholder('Enter character name').fill('Rick');

    await page.getByLabel('Sort by').selectOption('name');

    const characterNames = page.getByRole('heading').all();
    const names = await Promise.all(
      (await characterNames).map((heading) => heading.textContent())
    );

    const sortedNames = [...names].sort();
    expect(names).toEqual(sortedNames);
  });

  test('should filter to show only Rick characters', async ({ page }) => {
    await page.getByPlaceholder('Enter character name').fill('Rick');

    await page.getByLabel('Show Rick Only').check();

    const characterHeadings = page.getByRole('heading');
    await expect(await characterHeadings.count()).toBeGreaterThan(0);

    const headingTexts = await characterHeadings.allTextContents();
    headingTexts.forEach((text) => {
      expect(text).toContain('Rick');
    });
  });

  test('should combine multiple filters', async ({ page }) => {
    await page.getByPlaceholder('Enter character name').fill('Rick');
    await page.getByLabel('Gender').selectOption('male');
    await page.getByLabel('Sort by').selectOption('name');

    const characterList = page.getByRole('list');
    await expect(characterList).toBeVisible();

    const characterItems = characterList.getByRole('listitem');
    await expect(await characterItems.count()).toBeGreaterThan(0);

    const cards = await characterItems.all();
    for (const card of cards) {
      await expect(card.getByRole('heading')).toContainText(/Rick/i);
    }
  });
});
