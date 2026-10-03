import {
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiPrisma,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skills = [
    { name: "C++", icon: SiCplusplus },
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: null },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST APIs", icon: null },
    { name: "WebSockets", icon: null },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
    { name: "Data Structures & Algorithms", icon: null },
    { name: "OOP", icon: null },
    { name: "DBMS", icon: null },
    { name: "Operating Systems", icon: null },
    { name: "Computer Networks", icon: null },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
];

export default function SkillsGrid() {
    return (
        <div className="relative pt-6 pb-2">
            <div className="flex w-full flex-wrap gap-2">
                {skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="grow flex items-center justify-center gap-2 rounded-[6px] border border-black/30 bg-zinc-50 px-3 py-1.5 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 dark:border-white/[0.15] dark:bg-[#0a0a0a] dark:text-zinc-400 dark:hover:bg-[#121214]"
                        >
                            {SkillIcon ? (
                                <SkillIcon
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 shrink-0 text-zinc-500 opacity-80"
                                />
                            ) : (
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500 opacity-80"
                                />
                            )}
                            <span className="text-[13px] font-medium">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}