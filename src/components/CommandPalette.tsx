"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";

const sections = [
    { id: "about", label: "About", type: "PAGE" },
    { id: "projects", label: "Projects", type: "PAGE" },
    { id: "experience", label: "Background", type: "PAGE" },
    { id: "skills", label: "Skills", type: "PAGE" },
    { id: "coding", label: "Coding", type: "PAGE" },
    { id: "contact", label: "Contact", type: "PAGE" },
];

const projects = [
    { id: "flagforge", label: "FlagForge" },
    { id: "job-application-tracker", label: "Job Application Tracker" },
    { id: "event-management", label: "Event Management System" },
    { id: "browser-history-manager", label: "Browser History Manager" },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setOpen((value) => !value);
            }

            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const navigate = (id: string) => {
        setOpen(false);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="fixed bottom-4 left-4 z-50 hidden rounded-[6px] border border-black/10 bg-white/80 px-3 py-2 font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400 backdrop-blur-md transition-colors hover:text-zinc-900 dark:border-white/10 dark:bg-black/80 dark:hover:text-white lg:block"
            >
                ⌘ K
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-[90] flex items-start justify-center bg-black/20 px-4 pt-[18vh] backdrop-blur-sm dark:bg-black/60"
                    onMouseDown={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-md overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <Command>
                            <div className="border-b border-black/10 px-4 dark:border-white/10">
                                <Command.Input
                                    autoFocus
                                    placeholder="Search portfolio..."
                                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                                />
                            </div>

                            <Command.List className="max-h-72 overflow-y-auto p-2">
                                <Command.Empty className="px-3 py-8 text-center font-technical text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                                    No results found.
                                </Command.Empty>

                                <Command.Group
                                    heading="NAVIGATION"
                                    className="font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400"
                                >
                                    {sections.map((section, index) => (
                                        <Command.Item
                                            key={section.id}
                                            value={section.label}
                                            onSelect={() => navigate(section.id)}
                                            className="mt-1 flex cursor-pointer items-center justify-between rounded-[5px] px-3 py-3 text-sm text-zinc-700 outline-none data-[selected=true]:bg-zinc-100 dark:text-zinc-300 dark:data-[selected=true]:bg-zinc-900"
                                        >
                                            <span>{section.label}</span>

                                            <span className="font-technical text-[8px] text-zinc-400">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <Command.Group
                                    heading="PROJECTS"
                                    className="mt-4 font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400"
                                >
                                    {projects.map((project) => (
                                        <Command.Item
                                            key={project.id}
                                            value={project.label}
                                            onSelect={() => {
                                                setOpen(false);
                                                window.location.href = `/projects/${project.id}`;
                                            }}
                                            className="mt-1 flex cursor-pointer items-center justify-between rounded-[5px] px-3 py-3 text-sm text-zinc-700 outline-none data-[selected=true]:bg-zinc-100 dark:text-zinc-300 dark:data-[selected=true]:bg-zinc-900"
                                        >
                                            <span>{project.label}</span>

                                            <span className="font-technical text-[8px] text-zinc-400">
                                                CASE STUDY →
                                            </span>
                                        </Command.Item>
                                    ))}
                                </Command.Group>
                            </Command.List>

                            <div className="border-t border-black/10 px-4 py-2 dark:border-white/10">
                                <span className="font-technical text-[8px] text-zinc-400">
                                    ESC TO CLOSE · ↑↓ TO NAVIGATE · ENTER TO SELECT
                                </span>
                            </div>
                        </Command>
                    </div>
                </div>
            )}
        </>
    );
}