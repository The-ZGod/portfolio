"use client";

const screenshots = [
    "/projects/flagforge/01.png",
    "/projects/flagforge/02.png",
    "/projects/flagforge/03.png",
    "/projects/flagforge/04.png",
    "/projects/flagforge/05.png",
];

export default function ProjectScreenshotCarousel() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#08080a]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#08080a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#08080a] to-transparent" />

            <div className="flex h-full w-max animate-project-carousel">
                {[...screenshots, ...screenshots].map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className="flex h-full w-[520px] shrink-0 items-center justify-center px-4"
                    >
                        <div className="h-[82%] w-full overflow-hidden rounded-[4px] border border-white/10 bg-zinc-950 shadow-2xl">
                            <img
                                src={src}
                                alt={`FlagForge screenshot ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}