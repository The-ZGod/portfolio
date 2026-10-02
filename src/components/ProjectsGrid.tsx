import { projects } from "@/data/projects";

export default function ProjectsGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10">
            {projects.map((project, index) => (
                <article
                    key={project.id}
                    className="group bg-[var(--background)] p-5 transition-colors duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-950"
                >
                    {/* Metadata */}
                    <div className="flex items-center justify-between">
                        <span className="font-technical text-[9px] text-zinc-400">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-technical text-[9px] tracking-[0.12em] text-zinc-400">
                            {project.category}
                        </span>
                    </div>

                    {/* Project title */}
                    <h3 className="mt-14 text-lg font-semibold tracking-[-0.02em]">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-6 text-zinc-500">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-6 flex min-h-[42px] flex-wrap content-start gap-1.5">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-[4px] border border-black/10 px-2 py-1 font-technical text-[9px] text-zinc-500 dark:border-white/10"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-7 flex gap-5">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-technical text-[9px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:text-[var(--foreground)]"
                            >
                                GitHub ↗
                            </a>
                        )}

                        <button
                            type="button"
                            className="font-technical text-[9px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:text-[var(--foreground)]"
                        >
                            Case Study →
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}