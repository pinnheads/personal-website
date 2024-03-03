// import { expect, test, type APIRequestContext } from '@playwright/test';
// import { ProjectsPage } from './pages/projects-page';
// import { HomePage } from './pages/home-page';

// import resumeData from '../src/assets/resume.json' assert {type: 'json'};

// interface Project {
//     name: string;
//     image: string;
//     isFeatured: boolean;
//     description: string;
//     highlights: [string];
//     github: string;
//     live: string;
// }

// const projectsData = resumeData.projects;
// let projectsPage: ProjectsPage;
// let projectsAPIContext: APIRequestContext;
// let homePage: HomePage;
// const featuredProjects = projectsData.filter((data) => data.isFeatured == true);
// const otherProjects = projectsData.filter((data) => data.isFeatured == false);


// test.beforeEach(async ({ page, isMobile }) => {
//     projectsPage = new ProjectsPage(page);
//     homePage = new HomePage(page);
//     homePage.goto();
//     // if (isMobile) {
//     //     await homePage.openHamburgerMenu(); // Open Hamburger menu
//     //     await homePage.navigateToSmProjects(); // Navigate to Projects section
//     //     await expect(page).toHaveURL(/#projects/) //Verify the link
//     // } else {
//     //     await homePage.navigateToLgProjects();
//     //     await expect(page).toHaveURL(/#projects/)
//     // }
//     // Get Projects data
//     // const projectsData = await projectsAPIContext.get('/resume/projects.json')
//     // expect(projectsData.ok()).toBeTruthy();

//     // // Get Featured projects data
//     // const allProjects: Project[] = await projectsData.json();
//     // featuredProjects = allProjects.filter((data) => data.isFeatured == true)

//     // otherProjects = allProjects.filter((data) => data.isFeatured == false)
// })

// // test.beforeAll(async ({ playwright }) => {
// //     projectsAPIContext = await playwright.request.newContext({
// //         baseURL: process.env.URL,
// //     })
// // })

// // test.afterAll(async ({ }) => {
// //     // Dispose all responses.
// //     await projectsAPIContext.dispose();
// // });

// test('projects page title and subheadings are displayed @smoke', async () => {
//     await expect(projectsPage.title).toHaveText(/Projects/);
//     await expect(projectsPage.subHeading).toHaveText(/My most recent and proud work/);

//     await expect(projectsPage.otherProjectsHeading).toHaveText(/Other noteworthy projects/);
// })

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

// test('verify featured projects @regression', async ({ page }) => {
//     await expect(projectsPage.title).toHaveText(/Projects/);
//     // loop featured projects data
//     featuredProjects.forEach(async (project) => {
//         const name = project.name.toLowerCase().replaceAll(' ', '_');

//         await expect(page.getByTestId(`${name}-featured-image`)).toBeVisible();
//         await expect(page.getByTestId(`${name}-featured-name`)).toHaveText(project.name);
//         await expect(page.getByTestId(`${name}-featured-description`)).toHaveText(project.description);
//         // TODO: Fix these tests
//         // project.highlights.forEach(async (highlight) => {
//         //     await expect(page.getByTestId(`${name}-featured-${highlight}`)).toHaveText(highlight, { timeout: 10000 });
//         // })
//         // if (project.github) {
//         //     await expect(page.getByTestId(`${name}-featured-github`)).toBeVisible();
//         // }
//         // if (project.live) {
//         //     await expect(page.getByTestId(`${name}-featured-live`)).toBeVisible();
//         // }
//     })
// })