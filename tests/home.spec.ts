import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';
import resumeData from '../src/assets/resume.json' assert {type: 'json'};

test.describe('Verify Home page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    })

    test('verify intro section @regression', async () => {
        // Verify Name
        await expect(homePage.introName).toContainText(resumeData.basics.name)

        //verify label
        await expect(homePage.label).toContainText(resumeData.basics.label)

        //verify summary
        await expect(homePage.summary).toHaveText(resumeData.basics.summary)
    })

    test('verify profile image and skills image @regression', async ({ page, isMobile }) => {
        await expect(homePage.profileImage).toBeVisible();

        // Dark Mode - Skills Image
        await expect(page.locator('html')).toHaveClass(/dark/);
        if (isMobile) {
            await expect(homePage.skillImageDark).not.toBeVisible();
        } else {
            await expect(homePage.skillImageDark).toBeVisible();
        }


        //Light Mode - skills image
        await homePage.changeTheme();
        await expect(page.locator('html')).not.toHaveClass(/dark/);
        if (isMobile) {
            await expect(homePage.skillImageLight).not.toBeVisible();
        } else {
            await expect(homePage.skillImageLight).toBeVisible();
        }
    })

    test('verify contact section navigation @smoke', async ({page}) => {
        const response = await fetch(`${process.env.URL}/flags/navbarLinks.json`)
        const data = await response.json();
        if(data[process.env.ENV]) {
            await homePage.navigateToContactSection();
            await expect(page).toHaveURL(/#contact/);
        } else {
            await expect(homePage.contact).toBeVisible();
        }
    })

    // Headless mode doesn't support navigation to a PDF document. See the upstream issue https://bugs.chromium.org/p/chromium/issues/detail?id=761295.
    // test.only('verify resume navigation', async ({ page, browserName }) => {
    //     await homePage.navigateToResume();
    //     await expect(page).toHaveURL(/resume/);
    // })

    test('verify github navigation @smoke', async ({ context }) => {
        const pagePromise = context.waitForEvent('page');
        await homePage.navigateToGithubProfile();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/github.com\/pinnheads/);
    })

    test('verify twitter navigation @smoke', async ({ context }) => {
        const pagePromise = context.waitForEvent('page');
        await homePage.navigateToTwitterProfile();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/twitter.com\/utsavdeep01/);
    })

    test('verify linkedin navigation @smoke', async ({ context }) => {
        const pagePromise = context.waitForEvent('page');
        await homePage.navigateToLinkedinProfile();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/linkedin.com\/in\/utsavdeep/);
    })
})