import type {Page, Locator} from '@playwright/test';

export class HomePage {
    public readonly brandName: Locator;
    public readonly themeToggleButton: Locator;
    public readonly smProjectsLink: Locator;
    public readonly smExperienceLink: Locator;
    public readonly smContactLink: Locator;
    public readonly lgProjectsLink: Locator;
    public readonly lgExperienceLink: Locator;
    public readonly lgContactLink: Locator;
    public readonly hamburgerMenu: Locator;
    public readonly introName: Locator;
    public readonly label: Locator;
    public readonly summary: Locator;
    public readonly socials: Locator;
    public readonly email: Locator;
    public readonly github: Locator;
    public readonly linkedin: Locator;
    public readonly twitter: Locator;
    public readonly contact: Locator;
    public readonly resume: Locator;
    public readonly profileImage: Locator;
    public readonly skillImageLight: Locator;
    public readonly skillImageDark: Locator;

    constructor(public readonly page: Page) {
        this.brandName = this.page.getByTestId('brand-name');
        this.themeToggleButton = this.page.getByTestId('theme-button');
        this.smProjectsLink = this.page.getByTestId('sm-link-projects');
        this.smExperienceLink = this.page.getByTestId('sm-link-experience');
        this.smContactLink = this.page.getByTestId('sm-link-contact');
        this.lgProjectsLink = this.page.getByTestId('lg-link-projects');
        this.lgExperienceLink = this.page.getByTestId('lg-link-experience');
        this.lgContactLink = this.page.getByTestId('lg-link-contact');
        this.hamburgerMenu = this.page.getByTestId('hamburger-menu');
        this.introName = this.page.getByTestId('intro-name');
        this.label = this.page.getByTestId('intro-profession');
        this.summary = this.page.getByTestId('intro-summary');
        this.socials = this.page.getByTestId('intro-socials');
        this.email = this.page.getByTestId('social-email');
        this.github = this.page.getByTestId('social-github');
        this.linkedin = this.page.getByTestId('social-linkedin');
        this.twitter = this.page.getByTestId('social-twitter');
        this.contact = this.page.getByTestId('contact-btn');
        this.resume = this.page.getByTestId('resume-btn');
        this.profileImage = this.page.getByTestId('intro-profile-image');
        this.skillImageLight = this.page.getByTestId('skills-image-light');
        this.skillImageDark = this.page.getByTestId('skills-image-dark');
    }

    async goto() {
        await this.page.goto('');
        console.log(process.env.URL)
    }

    async changeTheme() {
        await this.themeToggleButton.click();
    }

    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async navigateToSmProjects() {
        await this.smProjectsLink.click();
    }

    async navigateToSmExperience() {
        await this.smExperienceLink.click();
    }

    async navigateToSmContact() {
        await this.smContactLink.click();
    }

    async navigateToLgProjects() {
        await this.lgProjectsLink.click();
    }

    async navigateToLgExperience() {
        await this.lgExperienceLink.click();
    }

    async navigateToLgContact() {
        await this.lgContactLink.click();
    }

    async navigateToHome() {
        await this.brandName.click();
    }

    async navigateToGithubProfile() {
        await this.github.click();
    }

    async navigateToLinkedinProfile() {
        await this.linkedin.click();
    }

    async navigateToTwitterProfile() {
        await this.twitter.click();
    }

    async navigateToResume() {
        await this.resume.click();
    }

    async navigateToContactSection() {
        await this.contact.click();
    }
}
