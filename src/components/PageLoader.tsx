"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black">
            <div className="w-64 px-4">
                <div className="flex items-center justify-between">
                    <span className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                        ARIHANT / SYSTEM
                    </span>

                    <span className="font-technical text-[9px] text-zinc-400">
                        2026
                    </span>
                </div>

                <div className="mt-4 h-px overflow-hidden bg-black/10 dark:bg-white/10">
                    <div className="h-full w-full origin-left animate-[loader_0.8s_ease-out_forwards] bg-zinc-900 dark:bg-white" />
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <span className="font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400">
                        Initializing
                    </span>

                    <span className="font-technical text-[8px] text-zinc-400">
                        OK
                    </span>
                </div>
            </div>
        </div>
    );
}