"use client";

import { useEffect, useState } from "react";

const sections = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "BACKGROUND" },
    { id: "skills", label: "SKILLS" },
    { id: "coding", label: "CODING" },
    { id: "contact", label: "CONTACT" },
];

export default function RightNavbar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.innerHeight * 0.35;

            let currentSection = sections[0].id;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                const top = element.getBoundingClientRect().top;

                if (top <= offset) {
                    currentSection = section.id;
                }
            }

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed right-[calc(15%-32px)] top-1/2 z-50 hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col gap-4">
                {sections.map((section, index) => {
                    const isActive = activeSection === section.id;

                    return (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => scrollToSection(section.id)}
                            className="group flex items-center gap-2 text-left"
                        >
                            <span
                                className={`font-technical text-[9px] transition-colors duration-200 ${isActive
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-400"
                                    }`}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                                className={`h-px transition-all duration-300 ${isActive
                                        ? "w-6 bg-zinc-900 dark:bg-white"
                                        : "w-3 bg-zinc-300 dark:bg-zinc-700 group-hover:w-6"
                                    }`}
                            />

                            <span
                                className={`font-technical text-[9px] tracking-[0.12em] transition-colors duration-200 ${isActive
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-400"
                                    }`}
                            >
                                {section.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}