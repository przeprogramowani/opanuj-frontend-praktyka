import { Locator, Page } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  private readonly watchButton: Locator;
  private readonly unwatchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.watchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Watch', exact: true });

    this.unwatchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Unwatch', exact: true });
  }

  async clickWatchButton() {
    return this.watchButton.click();
  }

  async clickUnwatchButton() {
    return this.unwatchButton.click();
  }

  getWatchButton() {
    return this.watchButton;
  }

  getUnwatchButton() {
    return this.unwatchButton;
  }
}
