import { Locator, Page } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  private readonly topbarWatchButton: Locator;
  private readonly topbarUnwatchButton: Locator;
  private readonly stickyHeader = '#vector-sticky-header';
  private readonly watchStarStickyHeader = '#ca-watchstar-sticky-header';
  private readonly stickybarWatchButton: Locator;
  private readonly stickybarUnwatchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topbarWatchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Watch', exact: true });

    this.topbarUnwatchButton = page
      .getByRole('navigation', { name: 'Views' })
      .getByRole('link', { name: 'Unwatch', exact: true });

    this.stickybarWatchButton = page
      .locator(this.stickyHeader)
      .getByTitle('Add this page to your watchlist');

    this.stickybarUnwatchButton = page
      .locator(this.stickyHeader)
      .getByTitle('Remove this page from your watchlist');
  }

  clickTopbarWatchButton() {
    return this.topbarWatchButton.click();
  }

  clickTopbarUnwatchButton() {
    return this.topbarUnwatchButton.click();
  }

  clickStickybarWatchButton() {
    return this.stickybarWatchButton.click();
  }

  clickStickybarUnwatchButton() {
    return this.stickybarUnwatchButton.click();
  }

  goToFirstSection() {
    return this.page
      .getByRole('navigation', { name: /Contents/i })
      .getByRole('listitem')
      .nth(1)
      .click();
  }

  getTopbarWatchButton() {
    return this.topbarWatchButton;
  }

  getTopbarUnwatchButton() {
    return this.topbarUnwatchButton;
  }

  getStickybarWatchButton() {
    return this.stickybarWatchButton;
  }

  getStickybarUnwatchButton() {
    return this.stickybarUnwatchButton;
  }

  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }
}
