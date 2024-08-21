import { expect, test } from '../../../fixtures';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { HelpCenterPage } from '../../../pages/help-center.page';
import { MainPage } from '../../../pages/main.page';

test('search information about watchlist in help center', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToFeaturedArticle();

  const communityPortal = new CommunityPortalPage(page);
  const helpCenter = new HelpCenterPage(page);

  await communityPortal.goToCommunityPortal();
  await expect(communityPortal.getTitle()).toHaveText(
    'Wikipedia:Community portal'
  );

  await helpCenter.goToHelpCenter();
  await expect(helpCenter.getTitle()).toHaveText('Help:Contents');

  await helpCenter.enterTextToPlaceholder('watchlist');
  await helpCenter.onClickButtonToSearch().click();
  await expect(helpCenter.getTitle()).toHaveText('Search results');
  await expect(helpCenter.checkSearchResult().first()).toHaveText(/watchlist/i);
});
