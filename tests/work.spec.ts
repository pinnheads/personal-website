import { expect, test } from '@playwright/test';
import { WorkPage } from './pages/work-page';
import { HomePage } from './pages/home-page';

let workPage: WorkPage;
let homePage: HomePage;

test.beforeEach(async ({ page, isMobile }) => {
    workPage = new WorkPage(page);
    homePage = new HomePage(page);
    homePage.goto();
    if (isMobile) {
        await homePage.openHamburgerMenu(); // Open Hamburger menu
        await homePage.navigateToSmExperience(); // Navigate to work section
        await expect(page).toHaveURL(/#work/) //Verify the link
    } else {
        await homePage.navigateToLgExperience();
        await expect(page).toHaveURL(/#work/)
    }
})

test('work page title and subheadings are displayed @smoke @regression', async () => {
    await expect(workPage.title).toHaveText(/Experience/);
    await expect(workPage.subHeading).toHaveText(/My most recent work history/);
    await expect(workPage.workHistory).toBeVisible();
})