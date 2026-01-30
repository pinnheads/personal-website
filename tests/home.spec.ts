import { expect, test } from '@playwright/test';
import { HomePage } from './pages/home-page';
// @ts-ignore
import architectData from '../src/assets/architect-data.json' with { type: 'json' };

test.describe('Architect Portfolio Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('verify sidebar profile info @smoke', async () => {
        await expect(homePage.systemId).toContainText(architectData.profile.id);
        
        const nameText = await homePage.name.innerText();
        // Normalize name text (remove newlines)
        const normalizedName = nameText.replace(/\n/g, ' ').trim();
        expect(normalizedName).toBe(architectData.profile.name);

        await expect(homePage.bio).toContainText(architectData.profile.bio);
    });

    test('verify social links @smoke', async () => {
        if (architectData.profile.social.github) {
             await expect(homePage.githubLink).toBeVisible();
             await expect(homePage.githubLink).toHaveAttribute('href', architectData.profile.social.github);
        }
        if (architectData.profile.social.linkedin) {
             await expect(homePage.linkedinLink).toBeVisible();
             await expect(homePage.linkedinLink).toHaveAttribute('href', architectData.profile.social.linkedin);
        }
        await expect(homePage.mailLink).toBeVisible();
    });

    test('verify skills section @regression', async () => {
        await expect(homePage.skillsSection).toBeVisible();
        for (const skill of architectData.skills) {
            await expect(homePage.skillsSection).toContainText(skill.category);
        }
    });

    test('verify projects section interaction @regression', async () => {
        await expect(homePage.projectsSection).toBeVisible();
        
        const count = architectData.projects.length;
        await expect(homePage.projectItems).toHaveCount(count);

        if (count > 0) {
            // Test interaction: Open first project
            await homePage.openProject(0);
            const firstProject = homePage.projectItems.nth(0);
            await expect(firstProject).toHaveClass(/active/);
            
            // Description should be visible
            const desc = firstProject.locator('p').first();
            await expect(desc).toBeVisible();
            await expect(firstProject).toContainText(architectData.projects[0].title);
        }
    });

    test('verify experience log @regression', async () => {
        await expect(homePage.workSection).toBeVisible();
        await expect(homePage.workItems).toHaveCount(architectData.experience.length);
        
        if (architectData.experience.length > 0) {
            const firstJob = homePage.workItems.first();
            await expect(firstJob).toContainText(architectData.experience[0].company);
            await expect(firstJob).toContainText(architectData.experience[0].role);
        }
    });

    test('verify theme toggle @smoke', async ({ page }) => {
        // Initial state: Dark mode is default class on html
        const html = page.locator('html');
        await expect(html).toHaveClass(/dark/);

        // Toggle
        await homePage.toggleTheme();
        await expect(html).not.toHaveClass(/dark/);

        // Toggle back
        await homePage.toggleTheme();
        await expect(html).toHaveClass(/dark/);
    });
});
