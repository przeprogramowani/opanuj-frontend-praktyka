import { Locator, Page } from '@playwright/test';

export class CommunityPortalPage {
  readonly page: Page;
  private readonly communityPortalLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.communityPortalLink = page.getByRole('link', {
      name: 'Community portal',
    });
  }

  goToCommunityPortal() {
    return this.communityPortalLink.click();
  }
  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }
}
