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
  await articlePage.clickTopBarUnwatchButton();

  await expect(articlePage.getTopBarWatchButton()).toBeVisible();
});

test.describe('add featured article to watchlist', () => {
  test('via top bar', async ({ page }) => {
    const articlePage = new ArticlePage(page);
    await articlePage.clickTopBarWatchButton();

    await expect(articlePage.getTopBarUnwatchButton()).toBeVisible();
  });

  test('via sticky bar', async ({ page }) => {
    const articlePage = new ArticlePage(page);
    await articlePage.goToFirstSection();
    await articlePage.clickStickyBarWatchButton();

    await expect(articlePage.getStickyBarUnwatchButton()).toBeVisible();
  });
});
