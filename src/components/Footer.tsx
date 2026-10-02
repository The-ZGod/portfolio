export default function Footer() {
    return (
        <footer className="border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                        ARIHANT ALAGOUDAR
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">
                        Software Engineering · Full Stack · AI/ML
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/The-ZGod"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-technical text-[9px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:text-[var(--foreground)]"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="#contact"
                        className="font-technical text-[9px] uppercase tracking-[0.1em] text-zinc-500 transition-colors hover:text-[var(--foreground)]"
                    >
                        Contact ↗
                    </a>
                </div>
            </div>

            <div className="border-t border-black/10 px-4 py-3 dark:border-white/10">
                <div className="flex items-center justify-between">
                    <span className="font-technical text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                        © 2026 Arihant Alagoudar
                    </span>

                    <span className="font-technical text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                        Built with Next.js
                    </span>
                </div>
            </div>
        </footer>
    );
}