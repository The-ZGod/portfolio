export type Project = {
    id: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        id: "flagforge",
        title: "FlagForge",
        category: "DEVELOPER PLATFORM",
        description:
            "A feature flag and experimentation platform for controlling feature rollouts, targeting users, and measuring percentage-based releases.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Prisma",
        ],
        github: "https://github.com/The-ZGod/FlagForge",
    },

    {
        id: "job-application-tracker",
        title: "Job Application Tracker",
        category: "FULL-STACK",
        description:
            "A full-stack application for organizing job applications, tracking application progress, and managing recruitment workflows.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "Prisma",
            "MySQL",
        ],
    },

    {
        id: "event-management",
        title: "Event Management System",
        category: "FULL-STACK",
        description:
            "A web application for managing events, registrations, and event-related information through a centralized platform.",
        technologies: [
            "Java",
            "Servlets",
            "JavaScript",
            "MySQL",
        ],
    },

    {
        id: "browser-history-manager",
        title: "Browser History Manager",
        category: "SYSTEM / WEB",
        description:
            "A browser history management application built around a doubly linked list with a web interface for interacting with stored history.",
        technologies: [
            "C",
            "Doubly Linked List",
            "Flask",
            "Python",
        ],
    },
];