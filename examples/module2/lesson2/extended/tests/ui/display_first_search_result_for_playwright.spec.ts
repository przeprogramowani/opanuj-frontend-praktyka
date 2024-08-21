import { expect, test } from '../../fixtures';
import { ArticlePage } from '../../pages/article.page';
import { MainPage } from '../../pages/main.page';

test('search information about Playwright', async ({ page }) => {
  const mainPage = new MainPage(page);
  const article = new ArticlePage(page);

  await mainPage.navigate();
  await mainPage.searchFor('Playwright');
  await mainPage.onClickSearchButton().click();

  await expect(article.getTitleOfPage()).toHaveText(/Playwright/i);
});
