import { expect, test } from '@playwright/test';
import { ProjectsPage } from './pages/projects-page';
import { HomePage } from './pages/home-page';

let projectsPage: ProjectsPage;
let homePage: HomePage;


test.beforeEach(async ({ page, isMobile }) => {
    projectsPage = new ProjectsPage(page);
    homePage = new HomePage(page);
    homePage.goto();
    if (isMobile) {
        await homePage.openHamburgerMenu(); // Open Hamburger menu
        await homePage.navigateToSmProjects(); // Navigate to Projects section
        await expect(page).toHaveURL(/#projects/) //Verify the link
    } else {
        await homePage.navigateToLgProjects();
        await expect(page).toHaveURL(/#projects/)
    }
})

test('projects page title and subheadings are displayed @smoke', async () => {
    await expect(projectsPage.title).toHaveText(/Projects/);
    await expect(projectsPage.subHeading).toHaveText(/My most recent and proud work/);

    await expect(projectsPage.otherProjectsHeading).toHaveText(/Other noteworthy projects/);
})

// test('verify other projects @regression', async ({ page }) => {
//     await expect(projectsPage.otherProjectsHeading).toHaveText(/Other noteworthy projects/);

//     // loop featured projects data
//     otherProjects.forEach(async (project) => {
//         const name = project.name.toLowerCase().replaceAll(' ', '_');

//         await expect(page.getByTestId(`${name}-project-name`)).toHaveText(project.name);
//         await expect(page.getByTestId(`${name}-project-description`)).toHaveText(project.description);
//         // TODO: Fix these tests
//         // project.highlights.forEach(async (highlight) => {
//         //     await expect(page.getByTestId(`${name}-project-${highlight}`)).toContainText(highlight);
//         // })
//         // if (project.github) {
//         //     await expect(page.getByTestId(`${name}-featured-github`)).toBeVisible();
//         // }
//         // if (project.live) {
//         //     await expect(page.getByTestId(`${name}-featured-live`)).toBeVisible();
//         // }
//     })
// })

test('verify featured projects @regression', async ({ page }) => {
    await expect(projectsPage.title).toHaveText(/Projects/);
    await expect(projectsPage.featuredProject).toBeVisible();
    await expect(projectsPage.featuredProjectsImage).toBeVisible();
    await expect(projectsPage.featuredProjectName).toBeVisible();
    await expect(projectsPage.featuredProjectDescription).toBeVisible();
    await expect(projectsPage.featuredProjectSkill).toBeVisible();
    await expect(projectsPage.featuredProjectGithub).toBeVisible();
    await expect(projectsPage.featuredProjectLive).toBeVisible();
})