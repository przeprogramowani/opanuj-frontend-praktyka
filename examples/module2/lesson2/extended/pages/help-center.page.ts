import { Locator, Page } from '@playwright/test';

export class HelpCenterPage {
  readonly page: Page;
  private readonly helpCenterLink: Locator;
  private readonly helpPlaceholder: Locator;
  private readonly clickButtonToSearch: Locator;
  private readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpCenterLink = page.getByRole('link', { name: 'Help', exact: true });
    this.helpPlaceholder = page.getByPlaceholder('Search Help pages');
    this.clickButtonToSearch = page.getByRole('button', {
      name: 'Search Help',
    });
    this.searchResults = page.locator('.mw-search-result-heading');
  }

  goToHelpCenter() {
    return this.helpCenterLink.click();
  }
  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }

  getHelpPlaceholder() {
    return this.helpPlaceholder;
  }

  enterTextToPlaceholder(text: string) {
    return this.helpPlaceholder.fill(text);
  }

  onClickButtonToSearch() {
    return this.clickButtonToSearch;
  }

  checkSearchResult() {
    return this.searchResults;
  }
}
