import { expect, test } from '../../../fixtures';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { HelpCenterPage } from '../../../pages/help-center.page';
import { TEXTs } from '../../../utils/constants';

test(`search "${TEXTs.SEARCH_TEXT}" in help center`, async ({ page }) => {
  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.navigate();
  await communityPortalPage.clickHelpDeskButton();

  const helpCenterPage = new HelpCenterPage(page);
  await helpCenterPage.searchFor(TEXTs.SEARCH_TEXT);
  
  const searchResults = helpCenterPage.getSearchResults();
  await expect(searchResults).toContainText(TEXTs.SEARCH_TEXT);
});
