import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
});

test('find the term in the main search', async ({ page }) => {
  const SEARCH_TERM = 'Playwright';

  const mainPage = new MainPage(page);
  await mainPage.activateSearch();
  await mainPage.searchFor(SEARCH_TERM);

  await expect(mainPage.getFirstSearchResult()).toHaveText(SEARCH_TERM);
});
