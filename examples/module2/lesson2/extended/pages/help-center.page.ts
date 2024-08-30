import { Locator, Page } from '@playwright/test';

export class HelpCenterPage {
  private readonly searchInput: Locator;
  private readonly searchResults: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByRole('cell', { name: /Search the frequently asked/i }).getByRole('textbox');
    this.searchResults = page.getByText('There is a page named "');
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }

  getSearchResults() {
    return this.searchResults;
  }
}
