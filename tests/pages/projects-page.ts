import type { Page, Locator } from '@playwright/test';

interface Project {
    name: string;
    isFeatured: boolean;
    description: string;
    highlights: [string];
    github: string;
    live: string;
}

export class ProjectsPage {
    public readonly title: Locator;
    public readonly subHeading: Locator;
    public readonly otherProjectsHeading: Locator;
    public readonly featuredProject: Locator;
    public readonly featuredProjectsImage: Locator;
    public readonly featuredProjectName: Locator;
    public readonly featuredProjectDescription: Locator;
    public readonly featuredProjectSkill: Locator;
    public readonly featuredProjectGithub: Locator;
    public readonly featuredProjectLive: Locator;


    constructor(public readonly page: Page) {
        this.title = this.page.getByTestId('projects-title');
        this.subHeading = this.page.getByTestId('projects-subheading');
        this.otherProjectsHeading = this.page.getByTestId('projects-other');
        this.featuredProject = this.page.getByTestId('featured-project');
        this.featuredProjectsImage = this.page.getByTestId('featured-project-image');
        this.featuredProjectName = this.page.getByTestId('featured-project-name');
        this.featuredProjectDescription = this.page.getByTestId('featured-project-description');
        this.featuredProjectSkill = this.page.getByTestId('featured-project-skills');
        this.featuredProjectGithub = this.page.getByTestId('featured-project-github');
        this.featuredProjectLive = this.page.getByTestId('featured-project-live');
    }

    async getData(): Promise<Project[]> {
        const response = await fetch(`${process.env.URL}/resume/projects.json`)
        const data = await response.json();
        return data;
    }
}
