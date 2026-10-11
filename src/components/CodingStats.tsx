
"use client";

import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";

const statCards = [
    {
        number: "700+",
        label: "PROBLEMS",
        description: "DSA problems solved",
        href: "https://leetcode.com/u/OG_Aru/",
    },
    {
        number: "1600+",
        label: "LEETCODE",
        description: "Contest rating",
        href: "https://leetcode.com/u/OG_Aru/",
    },
    {
        number: "1106",
        label: "CODEFORCES",
        description: "Maximum rating",
        href: "https://codeforces.com/profile/theZGod",
    },
    {
        number: "★★",
        label: "CODECHEF",
        description: "Competitive programming",
        href: "https://www.codechef.com/users/the_zgod",
    },
];

export default function CodingStats() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-white/[0.12] bg-white/[0.12] sm:grid-cols-2">
            {statCards.map((card, index) => (
                <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    onFocus={() => setActiveCard(index)}
                    onBlur={() => setActiveCard(null)}
                    className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden bg-[#050506] p-6 transition-colors duration-300 hover:bg-[#0b0b0d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white/50 sm:min-h-[182px] sm:p-6"
                >
                    {/* Subtle spotlight */}
                    <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${activeCard === index
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                        style={{
                            background:
                                "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.07), transparent 65%)",
                        }}
                    />

                    {/* Technical corner detail */}
                    <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-4 w-px bg-white/30 transition-all duration-300 group-hover:h-7 group-hover:bg-white/70"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-px w-4 bg-white/30 transition-all duration-300 group-hover:w-7 group-hover:bg-white/70"
                    />

                    <div className="relative flex items-center justify-between">
                        <span className="font-technical text-[10px] tabular-nums text-zinc-500">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex items-center gap-2">
                            <span className="font-technical text-[9px] font-medium tracking-[0.16em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                                {card.label}
                            </span>
                            <LuArrowUpRight className="size-3.5 -translate-x-1 translate-y-1 text-zinc-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                        </div>
                    </div>

                    <div className="relative mt-10">
                        <p className="text-[38px] font-semibold leading-none tracking-[-0.055em] text-zinc-100 transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-[40px]">
                            {card.number}
                        </p>

                        <p className="mt-3 text-[13px] leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                            {card.description}
                        </p>
                    </div>

                    {/* Hover underline */}
                    <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    />
                </a>
            ))}
        </div>
    );
}
