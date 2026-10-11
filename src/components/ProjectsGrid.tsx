import Link from "next/link";
import { projects } from "@/data/projects";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";
import { LineHoverLink } from "@/components/ui/line-hover-link"


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

                        <div className="h-full w-full overflow-hidden rounded-[6px] border border-white/10 bg-[#08080a]">
                            <div className="h-full w-full overflow-hidden rounded-[6px] border border-white/10 bg-black transition-all duration-500 ease-out group-hover:scale-[0.92]">
                                <img
                                    src={project.previewImage}
                                    alt={`${project.title} project preview`}
                                    className="h-full w-full object-contain"
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
                                <span
                                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1 ${project.status === "LIVE"
                                            ? "border-emerald-500/20 bg-emerald-500/[0.06]"
                                            : project.status === "IN DEVELOPMENT"
                                                ? "border-amber-400/20 bg-amber-400/[0.05]"
                                                : "border-white/[0.10] bg-white/[0.03]"
                                        }`}
                                >
                                    <span
                                        className={`size-1.5 shrink-0 rounded-full ${project.status === "LIVE"
                                                ? "bg-emerald-400"
                                                : project.status === "IN DEVELOPMENT"
                                                    ? "bg-amber-400"
                                                    : "bg-zinc-500"
                                            }`}
                                    />

                                    <span className="font-technical text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-300">
                                        {project.status}
                                    </span>
                                </span>
                            )}

                        </div>

                        <p className="mt-2 max-w-md text-[14px] leading-6 text-zinc-400">
                            {project.description}
                        </p>

                        

                        <div className="mt-5 flex flex-wrap items-center gap-4">
                            {/* Technology icons */}
                            <div className="flex min-w-0 items-center gap-1.5">
                                {project.technologies.map((technology) => {
                                    const Icon = technologyIcons[technology];

                                    if (!Icon) return null;

                                    return (
                                        <span
                                            key={technology}
                                            title={technology}
                                            className="text-zinc-500 transition-colors hover:text-zinc-200"
                                        >
                                            <Icon size={16} />
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Actions */}
                            <div className="flex shrink-0 items-center gap-3">
                                {/* <Link
                                    href={`/projects/${project.id}`}
                                    className="group/project inline-flex items-center gap-1 text-[11px] text-zinc-400 transition-colors hover:text-white"
                                >
                                    View Project
                                    <LuArrowUpRight className="size-3 transition-transform duration-200 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5" />
                                </Link> */}

                                <LineHoverLink
                                    href={`/projects/${project.id}`}
                                    variant="swap"
                                    className = "group/project inline-flex items-center gap-1 text-[11px] text-zinc-400 transition-colors hover:text-white"
                                >
                                    view Project
                                    <LuArrowUpRight className="size-3 transition-transform duration-200 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5" />
                                </LineHoverLink>

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open live ${project.title} demo`}
                                        title="Live demo"
                                        className="group/live inline-flex size-8 items-center justify-center rounded-[6px] border border-emerald-400/25 bg-emerald-400/[0.05] text-emerald-400 transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                                    >
                                        <LuExternalLink className="size-4 transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                                    </a>
                                )}
                            </div>
                        </div>


                    </div>
                </article>
            ))}
        </div>
    );
}