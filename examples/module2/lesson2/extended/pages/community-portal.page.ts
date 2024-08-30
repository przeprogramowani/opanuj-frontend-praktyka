import { Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortalPage {
  
  constructor(private readonly page: Page) {}

  navigate() {
    return this.page.goto(URLs.COMMUNITY_PORTAL_PAGE);
  }

  async clickHelpDeskButton() {
    await this.page.getByRole('link', { name: 'Help desk', exact: true }).click();
  }
}
