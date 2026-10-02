import { projects } from "@/data/projects";
import Link from "next/link";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((item) => item.id === slug);

    if (!project) {
        return (
            <main className="min-h-screen">

                {/* Blueprint guides */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none fixed inset-0 z-50 hidden md:block"
                >
                    {/* Left vertical guide */}
                    <div className="absolute inset-y-0 left-[30%] border-l border-dashed border-white/15 dark:border-white/15" />

                    {/* Right vertical guide */}
                    <div className="absolute inset-y-0 left-[70%] border-l border-dashed border-white/15 dark:border-white/15" />

                    {/* Horizontal guide */}
                    <div className="absolute left-0 right-0 top-[22vh] border-t border-dashed border-white/15 dark:border-white/15" />

                    {/* Left intersection */}
                    <div className="absolute left-[30%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[var(--background)]" />

                    {/* Right intersection */}
                    <div className="absolute left-[70%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[var(--background)]" />
                </div>

                {/* Project content */}
                <div className="relative z-40 mx-auto w-full md:w-[40vw]">
                    <p className="font-technical text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                        404 / PROJECT NOT FOUND
                    </p>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight">
                        Project not found.
                    </h1>

                    <Link
                        href="/"
                        className="mt-8 inline-block font-technical text-[10px] uppercase tracking-[0.15em] text-zinc-500 underline underline-offset-4"
                    >
                        ← Back to portfolio
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <div className="mx-auto w-full md:w-[40vw]">

                {/* Project header */}
                <section className="border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between px-4 py-5">

                        {/* Back */}
                        <Link
                            href="/#projects"
                            className="flex size-8 items-center justify-center rounded-[5px] border border-black/10 text-sm text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-950"
                            aria-label="Back to projects"
                        >
                            ←
                        </Link>

                        {/* Project identity */}
                        <div className="flex-1 px-4">
                            <h1 className="text-sm font-semibold tracking-tight">
                                {project.title}
                            </h1>

                            <p className="mt-1 font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400">
                                Projects / {project.title}
                            </p>
                        </div>

                        {/* Index */}
                        <span className="font-technical text-[9px] text-zinc-400">
                            01
                        </span>

                    </div>
                </section>

                {/* Video */}
                <section className="border-b border-black/10 p-3 dark:border-white/10">
                    <div className="relative overflow-hidden border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-950">

                        {/* Technical label */}
                        <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-zinc-400" />

                            <span className="font-technical text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                PROJECT DEMO
                            </span>
                        </div>

                        {/* Index */}
                        <span className="absolute right-3 top-3 z-10 font-technical text-[8px] text-zinc-400">
                            01 / 01
                        </span>

                        {/* Video */}
                        <div className="aspect-video">
                            {project.video ? (
                                <iframe
                                    src={project.video}
                                    title={`${project.title} project demo`}
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                                            PROJECT DEMO
                                        </p>

                                        <p className="mt-3 text-sm text-zinc-500">
                                            Video coming soon
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom technical line */}
                        <div className="flex items-center justify-between border-t border-black/10 px-3 py-2 dark:border-white/10">
                            <span className="font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400">
                                {project.category}
                            </span>

                            <span className="font-technical text-[8px] text-zinc-400">
                                {project.id}
                            </span>
                        </div>

                    </div>
                </section>

                {/* Project links */}
                <section className="grid grid-cols-3 border-b border-black/10 dark:border-white/10">
                    <a
                        href={project.github ?? "#"}
                        target={project.github ? "_blank" : undefined}
                        rel={project.github ? "noopener noreferrer" : undefined}
                        className="border-r border-black/10 px-3 py-5 text-center font-technical text-[10px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-950"
                    >
                        GitHub ↗
                    </a>

                    {project.live ? (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-r border-black/10 px-3 py-5 text-center font-technical text-[10px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-950"
                        >
                            Website ↗
                        </a>
                    ) : (
                        <span className="cursor-not-allowed border-r border-black/10 px-3 py-5 text-center font-technical text-[10px] uppercase tracking-[0.1em] text-zinc-300 dark:border-white/10 dark:text-zinc-700">
                            Website
                        </span>
                    )}

                    {project.post ? (
                        <a
                            href={project.post}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-5 text-center font-technical text-[10px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950"
                        >
                            Post ↗
                        </a>
                    ) : (
                        <span className="cursor-not-allowed px-3 py-5 text-center font-technical text-[10px] uppercase tracking-[0.1em] text-zinc-300 dark:text-zinc-700">
                            Post
                        </span>
                    )}
                </section>

                {/* Project information */}
                <section className="border-b border-black/10 px-4 py-10 dark:border-white/10">
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-[-0.04em]">
                                {project.title}
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                                {project.description}
                            </p>
                        </div>

                        {project.status && (
                            <span className="mt-1 flex shrink-0 items-center gap-2 font-technical text-[9px] text-zinc-400">
                                <span
                                    className={`size-1.5 rounded-full ${project.status === "LIVE"
                                            ? "bg-emerald-500"
                                            : project.status === "IN DEVELOPMENT"
                                                ? "bg-amber-500"
                                                : "bg-zinc-400"
                                        }`}
                                />

                                {project.status}
                            </span>
                        )}
                    </div>
                </section>

                {/* Stack */}
                <section className="px-4 py-10">
                    <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                        Stack used
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="inline-flex items-center gap-2 rounded-[6px] border border-black/10 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-white/20"
                            >
                                <span className="size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Project footer */}
                <section className="border-t border-black/10 px-4 py-8 dark:border-white/10">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/#projects"
                            className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                        >
                            ← All projects
                        </Link>

                        <span className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                            {project.id} / 2026
                        </span>
                    </div>
                </section>

            </div>
        </main>
    );
}