import { Page } from '@playwright/test';

export class CommunityPortalPage {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://en.wikipedia.org/wiki/Wikipedia:Community_portal';
    }

    navigate() {
        return this.page.goto(this.url);
    }
}