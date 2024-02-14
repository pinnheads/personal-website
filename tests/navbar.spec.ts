import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';

test.describe('Verify Navbar', () => {
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

    test('dark mode is on by default', async ({page}) => {
        await expect(page.locator('html')).toHaveClass(/dark/);
    })

    test('change theme to light', async ({page}) => {
        await homePage.changeTheme();
        await expect(page.locator('html')).not.toHaveClass(/dark/);
    })

// TODO: This test needs to be updated with flags
    // test('navigate to different sections', async ({ page, isMobile }) => {
    //     // In a mobile device
    //     if(isMobile) {
    //         await homePage.openHamburgerMenu(); // Open Hamburger menu
    //         await homePage.navigateToSmProjects(); // Navigate to Projects section
    //         await expect(page).toHaveURL(/#projects/) //Verify the link
    //         // TODO: Add further verification in these tests to actually verify the navigation

    //         await homePage.brandName.click();
    //         await homePage.openHamburgerMenu();
    //         await homePage.navigateToSmExperience(); // Navigate to Experience section
    //         await expect(page).toHaveURL(/#experience/);

    //         await homePage.brandName.click();
    //         await homePage.openHamburgerMenu();
    //         await homePage.navigateToSmContact(); // Navigate to Contact section
    //         await expect(page).toHaveURL(/#contact/);
    //     } else { // on a desktop viewport
    //         await homePage.navigateToLgProjects();
    //         await expect(page).toHaveURL(/#projects/)

    //         await homePage.brandName.click();
    //         await homePage.navigateToLgExperience();
    //         await expect(page).toHaveURL(/#experience/);

    //         await homePage.brandName.click();
    //         await homePage.navigateToLgContact();
    //         await expect(page).toHaveURL(/#contact/);
    //     }
    // })
})