"use client";

const sections = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "BACKGROUND" },
    { id: "skills", label: "SKILLS" },
    { id: "coding", label: "CODING" },
    { id: "contact", label: "CONTACT" },
];

export default function RightNavbar() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed right-[calc(15%-32px)] top-1/2 z-50 hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col gap-4">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-2 text-left"
                    >
                        <span className="font-technical text-[9px] text-zinc-400 transition-colors group-hover:text-[var(--foreground)]">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-3 bg-zinc-300 transition-all group-hover:w-6 group-hover:bg-[var(--foreground)] dark:bg-zinc-700" />

                        <span className="font-technical text-[9px] tracking-[0.12em] text-zinc-400 transition-colors group-hover:text-[var(--foreground)]">
                            {section.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}