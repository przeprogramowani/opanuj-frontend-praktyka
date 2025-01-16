import { Locator, Page } from '@playwright/test';

export class HelpCenterPage {
    readonly page: Page;
    readonly url: string;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://en.wikipedia.org/wiki/Wikipedia:Help_desk';
        this.searchInput = page.getByRole('textbox', { name: '' }).first();
        this.searchButton = page.getByRole('button', { name: 'Search the frequently asked questions'})
    }

    navigate() {
        return this.page.goto(this.url);
    }

    async searchFor(term: string) {
        return this.searchInput.fill(term);
    }

    async searchResults() {
        await this.searchButton.click();

        return this.page.waitForURL(`https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=watchlist&ns0=1`);
    }
}