import { expect, test } from '../../fixtures';
import { MainPage } from '../../pages/main.page';

test('search article and go to article page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  await mainPage.searchFor('Playwright');

  await page.route('https://en.wikipedia.org/w/rest.php/v1/search/title?q=Playwright&limit=10', async route => {
    const json = {"pages": [{
        "id": 39262,
        "key": "Playwright",
        "title": "Playwright",
        "excerpt": "Playwright",
        "matched_title": null,
        "description": "Person who writes plays",
        "thumbnail": {
            "mimetype": "image/jpeg",
            "width": 60,
            "height": 68,
            "duration": null,
            "url": "//upload.wikimedia.org/wikipedia/commons/thumb/1/13/Benjamin_Jonson_by_Abraham_van_Blyenberch.jpg/60px-Benjamin_Jonson_by_Abraham_van_Blyenberch.jpg"
        }
    }]};
    await route.fulfill({ json })
  });
  await mainPage.getFirstSearchResult().click();
  await expect(page.locator('#firstHeading')).toHaveText('Playwright');
});
