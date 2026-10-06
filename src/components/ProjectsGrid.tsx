import Link from "next/link";
import { projects } from "@/data/projects";

import {
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiMysql,
    SiJavascript,
    SiFlask,
    SiPython,
    SiC,
} from "react-icons/si";

const technologyIcons: Record<string, React.ElementType> = {
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    React: SiReact,
    "Node.js": SiNodedotjs,
    PostgreSQL: SiPostgresql,
    Prisma: SiPrisma,
    MySQL: SiMysql,
    JavaScript: SiJavascript,
    // Java: SiJava,
    Flask: SiFlask,
    Python: SiPython,
    C: SiC,
};

export default function ProjectsGrid() {
    return (
        <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-7 px-2 sm:grid-cols-2">
            {projects.map((project) => (
                <article key={project.id} className="group min-w-0">
                    {/* Preview */}
                    <div className="group relative aspect-[16/11] overflow-hidden rounded-[10px] border border-white/10 bg-[#08080a]">
                        <img
                            src={project.backgroundImage}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                        />

                        <div className="relative z-10 flex h-full items-center justify-center p-3">
                            <div className="h-full w-full overflow-hidden rounded-[6px] border border-white/10 bg-black transition-all duration-500 ease-out group-hover:scale-[0.92]">
                                <img
                                    src={project.previewImage}
                                    alt={`${project.title} project preview`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Project information */}
                    <div className="mt-4">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-[15px] font-semibold tracking-tight">
                                {project.title}
                            </h3>

                            {project.status && (
                                <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-technical text-[8px] uppercase tracking-[0.08em] text-zinc-400">
                                    <span
                                        className={`size-1.5 rounded-full ${project.status === "LIVE"
                                                ? "bg-emerald-500"
                                                : project.status === "IN DEVELOPMENT"
                                                    ? "bg-amber-500"
                                                    : "bg-zinc-500"
                                            }`}
                                    />

                                    {project.status}
                                </span>
                            )}
                        </div>

                        <p className="mt-2 max-w-md text-[14px] leading-6 text-zinc-400">
                            {project.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="mt-4 flex items-center gap-3">
                                {project.technologies.map((technology) => {
                                    const Icon = technologyIcons[technology];

                                    if (!Icon) return null;

                                    return (
                                        <span
                                            key={technology}
                                            title={technology}
                                            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
                                        >
                                            <Icon size={16} />
                                        </span>
                                    );
                                })}
                            </div>

                            <Link
                                href={`/projects/${project.id}`}
                                className="shrink-0 text-[11px] text-zinc-400 transition-colors hover:text-white"
                            >
                                View Project ↗
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}