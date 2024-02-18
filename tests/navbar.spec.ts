import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test.describe('Verify Navbar', () => {
    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.goto();
    })

    test('has correct title @smoke', async ({ page }) => {
        await expect(page).toHaveTitle(/Utsav Deep/);
    })

    test('brand name is visible @smoke', async () => {
        // Verify the visibility of the brand name
        await expect(homePage.brandName).toBeVisible();

        // Verify the text for the brand name
        await expect(homePage.brandName).toHaveText(/Utsav Deep/)
    })

    test('dark mode is on by default @smoke', async ({page}) => {
        await expect(page.locator('html')).toHaveClass(/dark/);
    })

    test('change theme to light @smoke', async ({page}) => {
        await homePage.changeTheme();
        await expect(page.locator('html')).not.toHaveClass(/dark/);
    })

    test('navigate to different sections @regression', async ({ page, isMobile }) => {
        // Get flag data for navbarLinks before proceeding with the tests
        const response = await fetch(`${process.env.URL}/flags/navbarLinks.json`)
        const data = await response.json();
        test.skip(data[process.env.ENV] == false);
        // In a mobile device
        if(isMobile) {
            await homePage.openHamburgerMenu(); // Open Hamburger menu
            await homePage.navigateToSmProjects(); // Navigate to Projects section
            await expect(page).toHaveURL(/#projects/) //Verify the link
            // TODO: Add further verification in these tests to actually verify the navigation

            await homePage.brandName.click();
            await homePage.openHamburgerMenu();
            await homePage.navigateToSmExperience(); // Navigate to Experience section
            await expect(page).toHaveURL(/#experience/);

            await homePage.brandName.click();
            await homePage.openHamburgerMenu();
            await homePage.navigateToSmContact(); // Navigate to Contact section
            await expect(page).toHaveURL(/#contact/);
        } else { // on a desktop viewport
            await homePage.navigateToLgProjects();
            await expect(page).toHaveURL(/#projects/)

            await homePage.brandName.click();
            await homePage.navigateToLgExperience();
            await expect(page).toHaveURL(/#experience/);

            await homePage.brandName.click();
            await homePage.navigateToLgContact();
            await expect(page).toHaveURL(/#contact/);
        }
    })
})