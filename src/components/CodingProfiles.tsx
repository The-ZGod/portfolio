"use client";

import { useEffect, useState } from "react";
import {
    SiCodechef,
    SiCodeforces,
    SiLeetcode,
} from "react-icons/si";
import { LuArrowUpRight } from "react-icons/lu";

type PlatformStats = {
    solved: number | null;
    contests: number | null;
    maxRating: number | null;
};

type CodingStats = {
    leetcode: PlatformStats;
    codeforces: PlatformStats;
    codechef: PlatformStats;
    codolio: PlatformStats;
};

const profiles = [
    {
        name: "LeetCode",
        key: "leetcode" as const,
        href: "https://leetcode.com/u/OG_Aru/",
        icon: SiLeetcode,
    },
    {
        name: "Codeforces",
        key: "codeforces" as const,
        href: "https://codeforces.com/profile/theZGod",
        icon: SiCodeforces,
    },
    {
        name: "CodeChef",
        key: "codechef" as const,
        href: "https://www.codechef.com/users/the_zgod",
        icon: SiCodechef,
    },
    {
        name: "Codolio",
        key: "codolio" as const,
        href: "https://codolio.com/profile/ZGod",
        icon: null,
    },
];

function formatValue(value: number | null) {
    if (value === null) return "—";
    return value.toLocaleString("en-IN");
}

function getRatingLabel(name: string) {
    if (name === "LeetCode") return "PEAK";
    if (name === "Codeforces") return "MAX";
    if (name === "CodeChef") return "MAX";
    return "PEAK";
}

export default function CodingProfiles() {
    const [stats, setStats] = useState<CodingStats | null>(null);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const response = await fetch("/api/coding-stats");

                if (!response.ok) {
                    throw new Error(
                        `Request failed with ${response.status}`,
                    );
                }

                const data: CodingStats = await response.json();
                setStats(data);
            } catch (error) {
                console.error(
                    "Failed to load coding profile stats:",
                    error,
                );
            }
        };

        loadStats();
    }, []);

    return (
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {profiles.map((profile) => {
                const Icon = profile.icon;
                const profileStats = stats?.[profile.key];

                return (
                    <div
                        key={profile.name}
                        className="group relative"
                    >
                        <a
                            href={profile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${profile.name} profile`}
                            className="relative flex h-10 items-center justify-between overflow-hidden rounded-[7px] border border-white/10 bg-white/[0.025] px-3 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        >
                            <span className="flex min-w-0 items-center gap-2">
                                {Icon ? (
                                    <Icon className="size-[14px] shrink-0 text-zinc-400 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-200 group-hover:opacity-100" />
                                ) : (
                                    <span className="flex size-[14px] shrink-0 items-center justify-center rounded-[3px] border border-zinc-500/60 font-technical text-[6px] font-bold text-zinc-400 transition-all duration-300 group-hover:border-zinc-300 group-hover:text-zinc-200">
                                        COD
                                    </span>
                                )}

                                <span className="truncate font-technical text-[9px] font-medium uppercase tracking-[0.08em] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-100">
                                    {profile.name}
                                </span>
                            </span>

                            <LuArrowUpRight className="size-[14px] shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200" />

                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white/60 transition-transform duration-500 ease-out group-hover:scale-x-100"
                            />
                        </a>

                        <div className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-[60] isolate w-[190px] -translate-x-1/2 translate-y-1 rounded-[8px] border border-white/[0.12] bg-[#050506] p-3 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                            <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                                <div className="flex items-center gap-2">
                                    {Icon ? (
                                        <Icon className="size-3.5 text-zinc-300" />
                                    ) : (
                                        <span className="flex size-3.5 items-center justify-center rounded-[3px] border border-zinc-500 font-technical text-[6px] font-bold text-zinc-300">
                                            COD
                                        </span>
                                    )}

                                    <span className="font-technical text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-200">
                                        {profile.name}
                                    </span>
                                </div>

                                <span className="flex items-center gap-1.5 font-technical text-[7px] uppercase tracking-[0.12em] text-zinc-600">
                                    <span className="size-1 rounded-full bg-emerald-400/70" />
                                    LIVE
                                </span>
                            </div>

                            <div className="grid grid-cols-3 divide-x divide-white/[0.07] py-4">
                                <div className="px-2 text-center first:pl-0">
                                    <p className="font-technical text-[7px] uppercase tracking-[0.08em] text-zinc-300">
                                        Solved
                                    </p>

                                    <p className="mt-1.5 text-[16px] font-semibold tracking-tight text-zinc-100">
                                        {formatValue(
                                            profileStats?.solved ?? null,
                                        )}
                                    </p>
                                </div>

                                <div className="px-2 text-center">
                                    <p className="font-technical text-[7px] uppercase tracking-[0.08em] text-zinc-300">
                                        Contests
                                    </p>

                                    <p className="mt-1.5 text-[16px] font-semibold tracking-tight text-zinc-100">
                                        {formatValue(
                                            profileStats?.contests ?? null,
                                        )}
                                    </p>
                                </div>

                                <div className="px-2 text-center last:pr-0">
                                    <p className="font-technical text-[7px] uppercase tracking-[0.08em] text-zinc-300">
                                        {getRatingLabel(profile.name)}
                                    </p>

                                    <p className="mt-1.5 text-[16px] font-semibold tracking-tight text-zinc-100">
                                        {formatValue(
                                            profileStats?.maxRating ?? null,
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/[0.07] pt-2.5">
                                <span className="font-technical text-[7px] uppercase tracking-[0.1em] text-zinc-600">
                                    Profile statistics
                                </span>

                                <span className="font-technical text-[7px] uppercase tracking-[0.1em] text-zinc-700">
                                    Auto synced
                                </span>
                            </div>

                            <span
                                aria-hidden="true"
                                className="absolute -bottom-[5px] left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-white/[0.12] bg-[#070708]"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}