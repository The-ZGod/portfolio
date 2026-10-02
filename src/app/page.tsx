import RightNavbar from "@/components/RightNavbar";
import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CodingStats from "@/components/CodingStats";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RightNavbar />
      {/* Blueprint guides */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      >
        {/* Left vertical guide */}
        <div className="absolute inset-y-0 left-[30%] border-l border-dashed border-black/10 dark:border-white/10" />

        {/* Right vertical guide */}
        <div className="absolute inset-y-0 left-[70%] border-l border-dashed border-black/10 dark:border-white/10" />

        {/* Upper horizontal guide */}
        <div className="absolute left-0 right-0 top-[22vh] border-t border-dashed border-black/10 dark:border-white/10" />

        {/* Header-aligned horizontal guide */}
        <div className="absolute left-0 right-0 top-[calc(22vh+112px)] border-t border-dashed border-black/10 dark:border-white/10" />

        {/* Left intersection */}
        <div className="absolute left-[30%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30" />

        {/* Right intersection */}
        <div className="absolute left-[70%] top-[22vh] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30" />

        {/* Header left intersection */}
        <div className="absolute left-[30%] top-[calc(22vh+112px)] size-1.5 -translate-x-1/2 -translate-y-1/2 bg-black/30 dark:bg-white/30" />

        {/* Header right intersection */}
        <div className="absolute left-[70%] top-[calc(22vh+112px)] size-1.5 -translate-x-1/2 -translate-y-1/2 bg-black/30 dark:bg-white/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-40  mx-auto w-full md:w-[40vw]">
        {/* Banner */}
        <section className="blueprint-reveal flex h-[22vh] items-end border-b border-black/10 px-4 pb-5 dark:border-white/10">
          <div>
            <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Portfolio / 2026
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-[-0.03em]">
              Arihant Alagoudar
            </h1>
          </div>
        </section>

        {/* Profile */}
        <section className="blueprint-reveal flex h-28 items-center justify-between border-b border-black/10 px-4 dark:border-white/10">
          {/* Identity */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex size-14 items-center justify-center rounded-[6px] border border-black/20 bg-zinc-100 dark:border-white/15 dark:bg-zinc-900">
              <span className="font-technical text-sm font-medium">
                AA
              </span>
            </div>

            {/* Details */}
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Arihant Alagoudar
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Full-Stack Developer · AI/ML
              </p>

              <p className="mt-1 font-technical text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                ISE · RNSIT · Bengaluru
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/The-ZGod"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] border border-black/10 px-2.5 py-1.5 font-technical text-[10px] transition-colors hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] border border-black/10 px-2.5 py-1.5 font-technical text-[10px] transition-colors hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-zinc-900"
            >
              Resume ↗
            </a>
          </div>
        </section>

        {/* Temporary content */}
        {/* Hero */}
        <section
          id="about"
          className="blueprint-reveal min-h-[calc(100vh-22vh-112px)] border-b border-black/10 px-4 py-20 dark:border-white/10"
        >
          {/* Section label */}
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            01 / INTRODUCTION
          </p>

          {/* Main statement */}
          <h2 className="mt-6 max-w-[680px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
            I build software
            <br />
            that solves
            <br />
            real problems.
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-[580px] text-sm leading-7 text-zinc-500 sm:text-[15px]">
            I&apos;m Arihant, a final-year Information Science and Engineering
            student focused on software engineering, full-stack development,
            and AI/ML.
          </p>

          <p className="mt-4 max-w-[580px] text-sm leading-7 text-zinc-500 sm:text-[15px]">
            I enjoy turning ideas into reliable products — from backend systems
            and APIs to interactive web applications and intelligent software.
          </p>

          {/* Technical metadata */}
          <div className="mt-12 grid grid-cols-2 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10">
            <div className="bg-[var(--background)] p-4">
              <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Focus
              </p>

              <p className="mt-2 text-xs font-medium">
                Software Engineering
              </p>
            </div>

            <div className="bg-[var(--background)] p-4">
              <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Currently
              </p>

              <p className="mt-2 text-xs font-medium">
                Building &amp; Learning
              </p>
            </div>

            <div className="bg-[var(--background)] p-4">
              <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Stack
              </p>

              <p className="mt-2 text-xs font-medium">
                TypeScript · React · Node.js
              </p>
            </div>

            <div className="bg-[var(--background)] p-4">
              <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Interests
              </p>

              <p className="mt-2 text-xs font-medium">
                Systems · AI/ML · Products
              </p>
            </div>
          </div>
        </section>


        <section
          id="projects"
          className="blueprint-reveal border-b border-black/10 px-4 py-24 dark:border-white/10"
        >
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            02 / PROJECTS
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.04em]">
              Selected work
            </h2>

            <span className="font-technical text-[9px] text-zinc-400">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            A selection of systems and applications I&apos;ve built while exploring
            full-stack development, software engineering, and AI/ML.
          </p>

          <ProjectsGrid />
        </section>

        <section
          id="experience"
          className="blueprint-reveal border-b border-black/10 px-4 py-24 dark:border-white/10"
        >
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            03 / BACKGROUND
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.04em]">
              Education & experience
            </h2>

            <span className="font-technical text-[9px] text-zinc-400">
              TIMELINE
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            My academic journey and the engineering work that has shaped how I
            approach software.
          </p>

          <ExperienceTimeline />
        </section>

        <section
          id="skills"
          className="blueprint-reveal border-b border-black/10 px-4 py-24 dark:border-white/10"
        >
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            04 / SKILLS
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.04em]">
              Technical toolkit
            </h2>

            <span className="font-technical text-[9px] text-zinc-400">
              06 CATEGORIES
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Technologies and computer science fundamentals I use to design,
            build, and understand software systems.
          </p>

          <SkillsGrid />
        </section>

        <section
          id="coding"
          className="blueprint-reveal border-b border-black/10 px-4 py-24 dark:border-white/10"
        >
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            05 / PROBLEM SOLVING
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.04em]">
              Competitive programming
            </h2>

            <span className="font-technical text-[9px] text-zinc-400">
              DSA / CP
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Regular problem solving across data structures, algorithms, and
            competitive programming platforms.
          </p>

          <CodingStats />
        </section>

        <section
          id="contact"
          className="blueprint-reveal px-4 py-24"
        >
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            06 / CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em]">
            Let&apos;s build something.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            I&apos;m interested in software engineering opportunities, interesting
            technical problems, and projects where I can build and learn.
          </p>

          {/* Contact panel */}
          <div className="mt-10 border border-black/10 dark:border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 dark:border-white/10">
              <span className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Contact / Arihant
              </span>

              <span className="flex items-center gap-2 font-technical text-[9px] text-zinc-400">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                AVAILABLE
              </span>
            </div>

            {/* Contact links */}
            <div className="divide-y divide-black/10 dark:divide-white/10">
              <a
                href="mailto:arihant.og@gmail.com"
                className="group flex items-center justify-between px-4 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950"
              >
                <div>
                  <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                    EMAIL
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    arihant.og@gmail.com
                  </p>
                </div>

                <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/The-ZGod"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950"
              >
                <div>
                  <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                    GITHUB
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    github.com/The-ZGod
                  </p>
                </div>

                <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/zgod/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950"
              >
                <div>
                  <p className="font-technical text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                    LINKEDIN
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    LinkedIn profile
                  </p>
                </div>

                <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}