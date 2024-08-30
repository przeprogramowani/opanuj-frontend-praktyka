import { Locator, Page } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  private readonly topBarWatchButton: Locator;
  private readonly topBarUnwatchButton: Locator;
  private readonly stickyHeader = '#vector-sticky-header';
  private readonly stickyBarWatchButton: Locator;
  private readonly stickyBarUnwatchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topBarWatchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Watch', exact: true });

    this.topBarUnwatchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Unwatch', exact: true });

    this.stickyBarWatchButton = page
      .locator(this.stickyHeader)
      .getByTitle('Add this page to your watchlist');

    this.stickyBarUnwatchButton = page
      .locator(this.stickyHeader)
      .getByTitle('Remove this page from your watchlist');
  }

  clickTopBarWatchButton() {
    return this.topBarWatchButton.click();
  }

  clickTopBarUnwatchButton() {
    return this.topBarUnwatchButton.click();
  }

  clickStickyBarWatchButton() {
    return this.stickyBarWatchButton.click();
  }

  clickStickyBarUnwatchButton() {
    return this.stickyBarUnwatchButton.click();
  }

  goToFirstSection() {
    return this.page
      .getByRole('navigation', { name: /Contents/i })
      .getByRole('listitem')
      .nth(1)
      .click();
  }

  getTopBarWatchButton() {
    return this.topBarWatchButton;
  }

  getTopBarUnwatchButton() {
    return this.topBarUnwatchButton;
  }

  getStickyBarWatchButton() {
    return this.stickyBarWatchButton;
  }

  getStickyBarUnwatchButton() {
    return this.stickyBarUnwatchButton;
  }

  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }
}
