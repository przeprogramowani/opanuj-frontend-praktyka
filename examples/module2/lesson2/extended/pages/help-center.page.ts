import { type Locator, type Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class HelpCenterPage {
  private readonly page: Page;
  private readonly url = URLs.HELP_DESK_PAGE;
  private readonly faqInputSearch: Locator;
  private readonly faqSubmitButton: Locator;
  private readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;

    this.faqInputSearch = page.locator(
      '.wikitable tr:first-of-type input.mw-searchInput'
    );
    this.faqSubmitButton = page.getByRole('button', {
      name: 'Search the frequently asked',
    });
    this.searchResults = page.locator('.mw-search-result-heading');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }

  checkSearchResult() {
    return this.searchResults;
  }

  async searchFor(term: string) {
    await this.faqInputSearch.waitFor({ state: 'visible', timeout: 10000 });
    await this.faqInputSearch.fill(term);
    await this.faqSubmitButton.click();
    await this.page.waitForURL(`${URLs.SEARCH_RESULTS_PAGE}**search=${term}**`);
  }
}
