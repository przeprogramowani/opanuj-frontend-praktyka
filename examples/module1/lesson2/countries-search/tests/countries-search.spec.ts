import { expect, test } from '@playwright/test';
import { handleCountriesRoute } from './utils/handleCountriesRoute';

test.describe('Countries Search Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/restcountries.com/v3.1/**', handleCountriesRoute);
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load and display the search interface', async ({ page }) => {
    await expect(
      page.getByPlaceholder("Search by country's name...")
    ).toBeVisible();
    await expect(page.getByText('Filter By:')).toBeVisible();
    await expect(page.getByText('Sort By:')).toBeVisible();
  });

  test('should filter countries by name', async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search by country's name...");
    await searchInput.fill('poland');
    await expect(page.getByText('Poland')).toBeVisible();
    await expect(page.getByAltText('Poland flag')).toBeVisible();
  });

  test('should change filter type and search', async ({ page }) => {
    await page.getByLabel('Filter By:').selectOption('currency');
    const searchInput = page.getByPlaceholder(
      "Search by country's currency..."
    );

    const responsePromise = page.waitForResponse('**/currency/EUR');
    await searchInput.fill('EUR');
    await responsePromise;

    await expect(page.getByText('Germany')).toBeVisible();
    await expect(page.getByText('France')).toBeVisible();
  });

  test('should sort countries alphabetically', async ({ page }) => {
    await page.getByLabel('Sort By:').selectOption('alphabetical');

    const countryNames = await page.getByTestId('country-name').allInnerTexts();

    const sortedNames = [...countryNames].sort();
    expect(countryNames).toEqual(sortedNames);
  });

  test('should sort countries by population', async ({ page }) => {
    await page.getByLabel('Sort By:').selectOption('population');

    const populations = await page
      .getByTestId('country-population')
      .allInnerTexts()
      .then((texts) =>
        texts.map((text) => parseInt(text.replace(/[^0-9]/g, '')))
      );

    const sortedPopulations = [...populations].sort((a, b) => b - a);
    expect(populations).toEqual(sortedPopulations);
  });

  test('should handle API errors gracefully', async ({ page }) => {
    await page.route('**/restcountries.com/v3.1/**', async (route) => {
      await route.fulfill({
        status: 404,
        body: 'Not found',
      });
    });

    const searchInput = page.getByPlaceholder("Search by country's name...");
    await searchInput.fill('nonexistentcountry');

    await expect(page.getByText('No countries found')).toBeVisible();
  });

  test('should paginate results', async ({ page }) => {
    await expect(page.getByText('Page 1 of')).toBeVisible();

    await page.getByRole('button', { name: 'Next' }).click();

    await expect(page.getByText('Page 2 of')).toBeVisible();
  });
});
