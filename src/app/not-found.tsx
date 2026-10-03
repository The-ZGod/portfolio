import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Blueprint guides */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0 hidden md:block"
            >
                <div className="absolute inset-y-0 left-[30%] border-l border-dashed border-black/10 dark:border-white/10" />

                <div className="absolute inset-y-0 left-[70%] border-l border-dashed border-black/10 dark:border-white/10" />

                <div className="absolute left-0 right-0 top-[22vh] border-t border-dashed border-black/10 dark:border-white/10" />

                <div className="absolute left-[30%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30" />

                <div className="absolute left-[70%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 md:w-[40vw]">
                <div className="border border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 dark:border-white/10">
                        <span className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                            ERROR
                        </span>

                        <span className="font-technical text-[9px] text-zinc-400">
                            404
                        </span>
                    </div>

                    <div className="px-6 py-16">
                        <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                            SYSTEM / ROUTE NOT FOUND
                        </p>

                        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                            404
                        </h1>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
                            The page you're looking for doesn't exist or may have been moved.
                        </p>

                        <Link
                            href="/"
                            className="mt-8 inline-flex items-center border border-black/10 px-4 py-2 font-technical text-[9px] uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                        >
                            ← Return Home
                        </Link>
                    </div>

                    <div className="flex items-center justify-between border-t border-black/10 px-4 py-3 dark:border-white/10">
                        <span className="font-technical text-[8px] text-zinc-400">
                            ARIHANT ALAGOUDAR
                        </span>

                        <span className="font-technical text-[8px] text-zinc-400">
                            ROUTE / 404
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}