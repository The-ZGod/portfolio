import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
    return (
        <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-5 px-5 sm:grid-cols-2">
            {projects.map((project) => (
                <article key={project.id} className="group min-w-0">
                    {/* Preview */}
                    <Link
                        href={`/projects/${project.id}`}
                        className="relative block aspect-[1.45/1] overflow-hidden rounded-[14px] border border-white/10 bg-zinc-950 p-2 transition-colors duration-300 hover:border-white/20"
                    >
                        {project.preview ? (
                            <iframe
                                src={project.preview}
                                title={`${project.title} preview`}
                                className="pointer-events-none h-full w-full rounded-[9px] scale-[1.01] transition-transform duration-500 group-hover:scale-[1.04]"
                                loading="lazy"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-[9px]">
                                <div className="text-center">
                                    <p className="font-technical text-3xl text-zinc-800">
                                        {project.title.slice(0, 2).toUpperCase()}
                                    </p>

                                    <p className="mt-2 font-technical text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                                        PROJECT PREVIEW
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Preview overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                        {/* Project number */}
                        <span className="absolute left-3 top-3 font-technical text-[8px] text-zinc-500">
                            {String(projects.indexOf(project) + 1).padStart(2, "0")}
                        </span>
                    </Link>

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

                        <p className="mt-2 max-w-md text-[13px] leading-6 text-zinc-500">
                            {project.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="flex min-w-0 flex-wrap gap-x-3 gap-y-1">
                                {project.technologies.slice(0, 5).map((technology) => (
                                    <span
                                        key={technology}
                                        className="font-technical text-[8px] text-zinc-500"
                                    >
                                        {technology}
                                    </span>
                                ))}
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