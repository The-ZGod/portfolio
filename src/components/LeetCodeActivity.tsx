"use client";

import { useEffect, useMemo, useState } from "react";

type Activity = Record<string, number>;

type ApiResponse = {
    username: string;
    activity: Activity;
    error?: string;
};

const DAYS = 365;

function formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
}

function getLevel(count: number, max: number) {
    if (count === 0) return 0;
    if (max <= 1) return 4;

    const ratio = Math.log1p(count) / Math.log1p(max);

    if (ratio <= 0.25) return 1;
    if (ratio <= 0.5) return 2;
    if (ratio <= 0.75) return 3;

    return 4;
}

export default function LeetCodeActivity() {
    const [activity, setActivity] = useState<Activity>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadActivity = async () => {
            try {
                const response = await fetch("/api/leetcode/activity");
                const data: ApiResponse = await response.json();

                setActivity(data.activity ?? {});
            } catch (error) {
                console.error("Failed to load LeetCode activity:", error);
            } finally {
                setLoading(false);
            }
        };

        loadActivity();
    }, []);

    const days = useMemo(() => {
        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);

        const result: string[] = [];

        for (let i = DAYS - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setUTCDate(today.getUTCDate() - i);
            result.push(formatDate(date));
        }

        return result;
    }, []);

    const weeks = useMemo(() => {
        if (!days.length) return [];

        const firstDate = new Date(`${days[0]}T00:00:00Z`);
        const firstDay = firstDate.getUTCDay();

        const padded = [
            ...Array(firstDay).fill(""),
            ...days,
        ];

        const result: string[][] = [];

        for (let i = 0; i < padded.length; i += 7) {
            result.push(padded.slice(i, i + 7));
        }

        return result;
    }, [days]);

    const maxActivity = useMemo(() => {
        return Math.max(1, ...Object.values(activity));
    }, [activity]);

    const totalActivity = useMemo(() => {
        return Object.values(activity).reduce(
            (total, count) => total + count,
            0,
        );
    }, [activity]);

    const monthLabels = useMemo(() => {
        const labels: { label: string; index: number }[] = [];
        let previousMonth = -1;

        weeks.forEach((week, index) => {
            const firstDate = week.find(Boolean);

            if (!firstDate) return;

            const date = new Date(`${firstDate}T00:00:00Z`);
            const month = date.getUTCMonth();

            if (month !== previousMonth) {
                labels.push({
                    label: date.toLocaleString("en-US", {
                        month: "short",
                        timeZone: "UTC",
                    }),
                    index,
                });

                previousMonth = month;
            }
        });

        return labels;
    }, [weeks]);

    if (loading) {
        return (
            <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
                <div className="h-28 animate-pulse bg-zinc-100 dark:bg-zinc-950" />
            </div>
        );
    }

    return (
        <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
            <div className="flex items-end justify-between">
                <div>
                    {/* <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                        LEETCODE ACTIVITY
                    </p> */}

                    <div className="blueprint-heading">
                        <h2 className="text-xl font-semibold tracking-tight">
                            Leetcode Activity
                        </h2>
                    </div>

                    <p className="mt-2 text-xs text-zinc-500">
                        {totalActivity} submissions in the last year
                    </p>
                </div>

                <a
                    href="https://leetcode.com/u/OG_Aru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-technical text-[9px] text-zinc-400 transition-colors hover:text-white"
                >
                    OG_Aru ↗
                </a>
            </div>

            <div className="mt-5 w-full pb-2">
                <div className="w-full">
                    <div
                        className="mb-2 grid gap-[3px]"
                        style={{
                            gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {weeks.map((week, index) => {
                            const label = monthLabels.find(
                                (month) => month.index === index,
                            );

                            return (
                                <div
                                    key={`month-${index}`}
                                    className="h-4 font-technical text-[8px] text-zinc-500"
                                >
                                    {label?.label}
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className="grid grid-rows-7 grid-flow-col gap-[3px]"
                        style={{
                            gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {weeks.flatMap((week, weekIndex) =>
                            week.map((date, dayIndex) => {
                                if (!date) {
                                    return (
                                        <span
                                            key={`empty-${weekIndex}-${dayIndex}`}
                                            className="aspect-square w-full min-w-0"
                                        />
                                    );
                                }

                                const count = activity[date] ?? 0;
                                const level = getLevel(count, maxActivity);

                                return (
                                    <span
                                        key={date}
                                        title={`${count} submission${count === 1 ? "" : "s"} · ${date}`}
                                        className={[
                                            "aspect-square w-full min-w-1 rounded-[2px]",
                                            level === 0 &&
                                            "bg-zinc-100 dark:bg-zinc-900",
                                            level === 1 &&
                                            "bg-zinc-300 dark:bg-zinc-700",
                                            level === 2 &&
                                            "bg-zinc-400 dark:bg-zinc-600",
                                            level === 3 &&
                                            "bg-zinc-500 dark:bg-zinc-400",
                                            level === 4 &&
                                            "bg-zinc-700 dark:bg-zinc-200",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")}
                                    />
                                );
                            }),
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="font-technical text-[8px] text-zinc-500">
                    Less active
                </span>

                <div className="flex items-center gap-[3px]">
                    {[0, 1, 2, 3, 4].map((level) => (
                        <span
                            key={level}
                            className={[
                                "size-[10px] shrink-0 rounded-[2px]",
                                level === 0 && "bg-zinc-100 dark:bg-zinc-900",
                                level === 1 && "bg-zinc-300 dark:bg-zinc-700",
                                level === 2 && "bg-zinc-400 dark:bg-zinc-600",
                                level === 3 && "bg-zinc-500 dark:bg-zinc-400",
                                level === 4 && "bg-zinc-700 dark:bg-zinc-200",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        />
                    ))}

                    <span className="ml-1 font-technical text-[8px] text-zinc-500">
                        More active
                    </span>
                </div>
            </div>
        </div>
    );
}