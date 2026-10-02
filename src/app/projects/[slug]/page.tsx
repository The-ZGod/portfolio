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
            <main className="flex min-h-screen items-center justify-center px-6">
                <div className="text-center">
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
            <div className="mx-auto w-full max-w-4xl px-6 py-16">
                <Link
                    href="/#projects"
                    className="font-technical text-[10px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                    ← Back to projects
                </Link>

                <div className="mt-16">
                    <p className="font-technical text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                        {project.category}
                    </p>

                    <h1 className="mt-4 text-5xl font-bold tracking-[-0.05em]">
                        {project.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
                        {project.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-black/10 px-2 py-1 font-technical text-[9px] text-zinc-500 dark:border-white/10"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}