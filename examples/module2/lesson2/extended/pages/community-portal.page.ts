import { type Locator, type Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortalPage {
  private readonly page: Page;
  private readonly url = URLs.COMMUNITY_PORTAL_PAGE;
  private readonly linkToHelpDesk: Locator;

  constructor(page: Page) {
    this.page = page;

    this.linkToHelpDesk = page
      .locator('div')
      .filter({ hasText: /^Help desk$/ })
      .getByRole('link');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  getTitle() {
    return this.page.getByRole('main').getByRole('heading').first();
  }

  async goToHelpCenter() {
    const helpDeskHref = (await this.linkToHelpDesk.getAttribute('href'))!;

    await this.linkToHelpDesk.click();

    return this.page.waitForURL(`**${helpDeskHref}`);
  }
}
