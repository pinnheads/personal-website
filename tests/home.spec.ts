import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test.describe('Verify Navbar and Home page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.goto();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Utsav Deep/);
    })

    test('brand name is visible', async ({ page }) => {
        // Verify the visibility of the brand name
        await expect(homePage.brandName).toBeVisible();

        // Verify the text for the brand name
        await expect(homePage.brandName).toHaveText(/Utsav Deep/)
    })

    test('dark mode is on', async ({page}) => {
        await expect(page.locator('html')).toHaveClass(/dark/);
    })

    test('change theme to light', async ({page}) => {
        await homePage.changeTheme();
        await expect(page.locator('html')).not.toHaveClass(/dark/);
    })

    test('navigate to projects section', async ({ page, isMobile }) => {

        if(isMobile) {
            await homePage.openHamburgerMenu();
        }

        await homePage.navigateToProjects();
        await expect(page).toHaveURL(/#projects/)
    })

    test('navigate to experience section', async ({ page, isMobile }) => {

        if(isMobile) {
            await homePage.openHamburgerMenu();
        }

        await homePage.navigateToExperience();
        await expect(page).toHaveURL(/#experience/)
    })

    test('navigate to contact section', async ({ page, isMobile }) => {

        if(isMobile) {
            await homePage.openHamburgerMenu();
        }

        await homePage.navigateToContact();
        await expect(page).toHaveURL(/#contact/)
    })

    test('navigate to home page', async ({ page, isMobile }) => {

        if(isMobile) {
            await homePage.openHamburgerMenu();
        }

        await homePage.navigateToContact();
        await expect(page).toHaveURL(/#contact/)

        await homePage.brandName.click();
        await expect(page).not.toHaveURL(/#contact/)
    })

})