import { skillGroups } from "@/data/skills";

export default function SkillsGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10">
            {skillGroups.map((group, index) => (
                <div
                    key={group.title}
                    className="bg-[var(--background)] p-5"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-technical text-[9px] text-zinc-400">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-technical text-[9px] tracking-[0.15em] text-zinc-400">
                            {group.title}
                        </span>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="text-xs font-medium tracking-tight"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}