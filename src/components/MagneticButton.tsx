"use client";

import { useRef } from "react";
import gsap from "gsap";

type MagneticButtonProps = {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    primary?: boolean;
    external?: boolean;
};

export default function MagneticButton({
    href,
    children,
    icon,
    primary = false,
    external = false,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const button = buttonRef.current;
        const content = contentRef.current;
        const arrow = arrowRef.current;

        if (!button || !content || !arrow) return;

        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
            x: x * 0.12,
            y: y * 0.18,
            duration: 0.4,
            ease: "power3.out",
        });

        gsap.to(content, {
            x: x * 0.06,
            y: y * 0.06,
            duration: 0.4,
            ease: "power3.out",
        });

        gsap.to(arrow, {
            x: 3 + x * 0.04,
            y: -3 + y * 0.04,
            rotation: -8,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleEnter = () => {
        const button = buttonRef.current;
        if (!button) return;

        gsap.to(button, {
            scale: 1.025,
            duration: 0.35,
            ease: "power3.out",
        });
    };

    const handleLeave = () => {
        const button = buttonRef.current;
        const content = contentRef.current;
        const arrow = arrowRef.current;

        if (!button || !content || !arrow) return;

        gsap.to(button, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "elastic.out(1, 0.5)",
        });

        gsap.to(content, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
        });

        gsap.to(arrow, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const handleDown = () => {
        gsap.to(buttonRef.current, {
            scale: 0.97,
            duration: 0.12,
            ease: "power2.out",
        });
    };

    const handleUp = () => {
        gsap.to(buttonRef.current, {
            scale: 1.025,
            duration: 0.25,
            ease: "back.out(2)",
        });
    };

    return (
        <a
            ref={buttonRef}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            className={[
                "group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-[6px] px-4 text-[13px] font-medium will-change-transform",
                primary
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.04] text-zinc-300",
            ].join(" ")}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />

            <span
                ref={contentRef}
                className="relative z-10 inline-flex items-center gap-2 will-change-transform"
            >
                {icon && (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                        {icon}
                    </span>
                )}

                <span>{children}</span>

                <span
                    ref={arrowRef}
                    className="ml-1 text-zinc-500 will-change-transform"
                >
                    ↗
                </span>
            </span>
        </a>
    );
}