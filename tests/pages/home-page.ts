import type {Page, Locator} from '@playwright/test';

export class HomePage {
    public readonly brandName: Locator;
    public readonly themeToggleButton: Locator;
    public readonly projectsLink: Locator;
    public readonly experienceLink: Locator;
    public readonly contactLink: Locator;
    public readonly hamburgerMenu: Locator;


    constructor(public readonly page: Page) {
        this.brandName = this.page.getByTestId('brand-name');
        this.themeToggleButton = this.page.getByTestId('theme-button');
        this.projectsLink = this.page.getByTestId('section-link-projects');
        this.experienceLink = this.page.getByTestId('section-link-experience');
        this.contactLink = this.page.getByTestId('section-link-contact');
        this.hamburgerMenu = this.page.getByTestId('hamburger-menu');
    }

    async goto() {
        await this.page.goto('');
    }

    async changeTheme() {
        await this.themeToggleButton.click();
    }

    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async navigateToProjects() {
        await this.projectsLink.click();
    }

    async navigateToExperience() {
        await this.experienceLink.click();
    }

    async navigateToContact() {
        await this.contactLink.click();
    }

    async navigateToHome() {
        await this.brandName.click();
    }
}
