import type { Page, Locator } from '@playwright/test';

interface Project {
    name: string;
    isFeatured: boolean;
    description: string;
    highlights: [string];
    github: string;
    live: string;
}

export class ProjectsPage {
    public readonly title: Locator;
    public readonly subHeading: Locator;
    public readonly otherProjectsHeading: Locator;

    constructor(public readonly page: Page) {
        this.title = this.page.getByTestId('projects-title');
        this.subHeading = this.page.getByTestId('projects-subheading');
        this.otherProjectsHeading = this.page.getByTestId('projects-other');
    }

    async getData(): Promise<Project[]> {
        const response = await fetch(`${process.env.URL}/resume/projects.json`)
        const data = await response.json();
        return data;
    }
}
