import { codingStats } from "@/data/coding";

export default function CodingStats() {
    return (
        <div className="mt-10 grid grid-cols-2 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10">
            {codingStats.map((stat, index) => (
                <div
                    key={stat.label}
                    className="bg-[var(--background)] p-5"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-technical text-[9px] text-zinc-400">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-technical text-[9px] tracking-[0.15em] text-zinc-400">
                            {stat.label}
                        </span>
                    </div>

                    <p className="mt-8 text-3xl font-bold tracking-[-0.04em]">
                        {stat.value}
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">
                        {stat.detail}
                    </p>
                </div>
            ))}
        </div>
    );
}