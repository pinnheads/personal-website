import type { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    // Sidebar Elements
    readonly sidebar: Locator;
    readonly systemId: Locator;
    readonly name: Locator;
    readonly bio: Locator;
    readonly themeToggle: Locator;
    readonly githubLink: Locator;
    readonly linkedinLink: Locator;
    readonly mailLink: Locator;

    // Sections
    readonly skillsSection: Locator;
    readonly projectsSection: Locator;
    readonly workSection: Locator;

    // Items
    readonly skillCategories: Locator;
    readonly projectItems: Locator;
    readonly workItems: Locator;

    constructor(page: Page) {
        this.page = page;

        // Sidebar
        this.sidebar = page.locator('aside');
        this.systemId = this.sidebar.locator('text=SYSTEM_ID');
        this.name = this.sidebar.locator('h1');
        this.bio = this.sidebar.locator('p').first();
        this.themeToggle = page.locator('#theme-toggle');
        // Simple heuristic for social links based on icon presence or href
        this.githubLink = this.sidebar.locator('a[href*="github"]');
        this.linkedinLink = this.sidebar.locator('a[href*="linkedin"]');
        this.mailLink = this.sidebar.locator('a[href^="mailto"]');

        // Skills
        this.skillsSection = page.locator('section', { hasText: 'CAPABILITY_MATRIX' });
        this.skillCategories = this.skillsSection.locator('h3');

        // Projects
        this.projectsSection = page.locator('#projects-container');
        this.projectItems = this.projectsSection.locator('.project-item');

        // Work
        this.workSection = page.locator('section', { hasText: 'EXECUTION_LOG' });
        // The work items are direct children divs of the container inside the section
        // Structure: section > div.border-l > div.relative
        this.workItems = this.workSection.locator('.border-l > div.relative');
    }

    async goto() {
        await this.page.goto('/');
    }

    async toggleTheme() {
        await this.themeToggle.click();
    }

    async openProject(index: number) {
        const item = this.projectItems.nth(index);
        // Hover to open (desktop behavior implemented in script)
        await item.hover();
        // Or click header for mobile fallback logic
        await item.locator('.project-header').click();
    }
}