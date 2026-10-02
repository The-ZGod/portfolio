export type SkillGroup = {
    title: string;
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: "LANGUAGES",
        items: [
            "C++",
            "Java",
            "JavaScript",
            "TypeScript",
            "Python",
            "SQL",
        ],
    },
    {
        title: "FRONTEND",
        items: [
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },
    {
        title: "BACKEND",
        items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "WebSockets",
        ],
    },
    {
        title: "DATABASES",
        items: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Prisma",
        ],
    },
    {
        title: "CORE CS",
        items: [
            "Data Structures & Algorithms",
            "OOP",
            "DBMS",
            "Operating Systems",
            "Computer Networks",
        ],
    },
    {
        title: "TOOLS",
        items: [
            "Git",
            "GitHub",
            "Docker",
            "Linux",
        ],
    },
];