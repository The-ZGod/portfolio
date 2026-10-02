"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (documentHeight <= 0) {
                setProgress(0);
                return;
            }

            setProgress((scrollTop / documentHeight) * 100);
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[60] h-px w-full bg-black/5 dark:bg-white/5"
        >
            <div
                className="h-full bg-zinc-900 transition-[width] duration-100 dark:bg-white"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}