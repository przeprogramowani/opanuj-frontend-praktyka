import { CommunityPortalPage } from './../../../pages/community-portal.page';
import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';
import { HelpCenterPage } from '../../../pages/help-center.page';

test('search watchlist query in help center', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.navigate();

  const helpDesk = new HelpCenterPage(page);
  await helpDesk.navigate();

  await helpDesk.searchFor('watchlist');
  await helpDesk.searchResults();

  await expect(page.getByText('There is a page named "Watchlist" on Wikipedia')).toBeVisible();
});
