import { expect, test } from '../../../fixtures';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { TEXTs, URLs } from '../../../utils/constants';

test(`search for ${TEXTs.SEARCH_WIKIPEDIA_TEXT} article`, async ({ page }) => {
  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.navigate();

  const searchInput = page.getByLabel('Search Wikipedia');

  await searchInput.fill(TEXTs.SEARCH_WIKIPEDIA_TEXT);
  const clickSearchButton = page.getByRole('button', { name: 'Search' });
  await clickSearchButton.click();

  await expect(page).toHaveURL(URLs.PAGE_SEARCHED);
});
