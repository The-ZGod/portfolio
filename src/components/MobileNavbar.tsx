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

export default function MobileNavbar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.innerHeight * 0.35;
            let currentSection = sections[0].id;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                if (element.getBoundingClientRect().top <= offset) {
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
        <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden">
            <div className="flex items-center gap-1 rounded-[8px] border border-black/10 bg-white/90 p-1 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/90">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => scrollToSection(section.id)}
                            className={`rounded-[5px] px-2 py-2 font-technical text-[8px] tracking-[0.08em] transition-colors ${isActive
                                    ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                }`}
                        >
                            {section.label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}