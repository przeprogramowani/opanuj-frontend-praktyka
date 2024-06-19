import { expect, test } from '../../../fixtures';
import { ArticlePage } from '../../../pages/article.page';
import { MainPage } from '../../../pages/main.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToFeaturedArticle();
});

test.afterEach(async ({ page }) => {
  const articlePage = new ArticlePage(page);
  await articlePage.clickTopbarUnwatchButton();

  await expect(articlePage.getTopbarWatchButton()).toBeVisible();
});

test.describe('add featured article to watchlist', () => {
  test('via topbar', async ({ page }) => {
    const articlePage = new ArticlePage(page);
    await articlePage.clickTopbarWatchButton();

    await expect(articlePage.getTopbarUnwatchButton()).toBeVisible();
  });

  test('via stickybar', async ({ page }) => {
    const articlePage = new ArticlePage(page);
    await articlePage.goToFirstSection();
    await articlePage.clickStickybarWatchButton();

    await expect(articlePage.getStickybarUnwatchButton()).toBeVisible();
  });
});
