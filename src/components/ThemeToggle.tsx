"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                type="button"
                className="rounded-[5px] border border-black/10 px-2.5 py-1.5 font-technical text-[10px] dark:border-white/10"
            >
                THEME
            </button>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-[5px] border border-black/10 px-2.5 py-1.5 font-technical text-[10px] transition-colors hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-zinc-900"
            aria-label="Toggle theme"
        >
            {isDark ? "LIGHT" : "DARK"}
        </button>
    );
}