import { timeline } from "@/data/experience";

export default function ExperienceTimeline() {
    return (
        <div className="mt-10">
            {timeline.map((item, index) => (
                <article
                    key={`${item.organization}-${index}`}
                    className="grid grid-cols-[80px_1fr] gap-5 border-t border-black/10 py-8 dark:border-white/10"
                >
                    {/* Period */}
                    <div>
                        <span className="font-technical text-[9px] leading-4 text-zinc-400">
                            {item.period}
                        </span>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex items-center justify-between gap-4">
                            <span className="font-technical text-[9px] tracking-[0.15em] text-zinc-400">
                                {item.type}
                            </span>

                            <span className="font-technical text-[9px] text-zinc-400">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <h3 className="mt-4 text-base font-semibold leading-6 tracking-tight">
                            {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-zinc-500">
                            {item.organization}
                        </p>

                        <p className="mt-4 text-xs leading-6 text-zinc-500">
                            {item.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}