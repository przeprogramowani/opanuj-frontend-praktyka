import { expect, test } from '../../../fixtures';
import { ArticlePage } from '../../../pages/article.page';
import { MainPage } from '../../../pages/main.page';

test.afterEach(async ({ page }) => {
  const articlePage = new ArticlePage(page);
  await articlePage.clickTopBarUnwatchButton();

  await expect(articlePage.getTopBarWatchButton()).toBeVisible();
});

test('add featured article to watchlist', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToFeaturedArticle();

  const articlePage = new ArticlePage(page);
  await articlePage.clickTopBarWatchButton();

  await expect(articlePage.getTopBarUnwatchButton()).toBeVisible();
});
