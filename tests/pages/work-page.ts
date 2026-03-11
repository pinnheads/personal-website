import type { Page, Locator } from '@playwright/test';

interface Work {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export class WorkPage {
    public readonly title: Locator;
    public readonly subHeading: Locator;
    public readonly workHistory: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByTestId('work-heading');
        this.subHeading = this.page.getByTestId('work-subheading');
        this.workHistory = this.page.getByTestId('work-history');
    }
}
