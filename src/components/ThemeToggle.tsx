"use client";

import { useEffect, useState } from "react";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="size-8" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-8 items-center justify-center rounded-[6px] text-zinc-400 transition-colors duration-200 hover:bg-white/[0.06] hover:text-zinc-100"
        >
            {isDark ? (
                <BsBrightnessHighFill className="size-[15px]" />
            ) : (
                    <MdBrightness2 className="size-[15px]" />
            )}
        </button>
    );
}