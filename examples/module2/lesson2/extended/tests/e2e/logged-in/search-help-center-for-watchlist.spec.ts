import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { HelpCenterPage } from '../../../pages/help-center.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
});

test('search help center for information about watchlist', async ({ page }) => {
  const SEARCH_TERM = 'watchlist';

  const mainPage = new MainPage(page);
  const communityPortal = new CommunityPortalPage(page);
  const helpCenter = new HelpCenterPage(page);

  await mainPage.goToCommunityPortalPage();
  await expect(communityPortal.getTitle()).toHaveText(
    'Wikipedia:Community portal'
  );

  await communityPortal.goToHelpCenter();
  await expect(helpCenter.getTitle()).toHaveText('Wikipedia:Help desk');

  await helpCenter.searchFor(SEARCH_TERM);

  await expect(helpCenter.getTitle()).toHaveText('Search results');
  await expect(page.getByText(SEARCH_TERM).first()).toBeVisible();
});
