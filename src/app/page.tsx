import RightNavbar from "@/components/RightNavbar";
import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CodingStats from "@/components/CodingStats";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RightNavbar />
      <MobileNavbar />

      {/* Blueprint guides */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      >
        {/* Left vertical guide */}
        <div className="absolute inset-y-0 left-[30%] border-l border-dashed border-black/10 dark:border-white/10" />

        {/* Right vertical guide */}
        <div className="absolute inset-y-0 left-[70%] border-l border-dashed border-black/10 dark:border-white/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-40 mx-auto w-full md:w-[40vw]">
        {/* Banner */}
        <section className="blueprint-reveal relative flex h-[22vh] items-end px-4 pb-5">
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
        <section className="relative w-full border-y border-dashed border-black/10 dark:border-white/10 md:-ml-[30vw] md:w-screen">
          <span
            aria-hidden="true"
            className="absolute left-[30%] top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30"
          />
          <span
            aria-hidden="true"
            className="absolute left-[70%] top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[var(--background)] dark:border-white/30"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[30%] size-1.5 -translate-x-1/2 translate-y-1/2 bg-black/30 dark:bg-white/30"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[70%] size-1.5 -translate-x-1/2 translate-y-1/2 bg-black/30 dark:bg-white/30"
          />

          <div className="mx-auto w-full md:w-[40vw]">
            <div className="px-4 py-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="size-[72px] shrink-0 overflow-hidden rounded-[7px] border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                    <img
                      src="/profile.jpg"
                      alt="Arihant Alagoudar"
                      className="h-full w-full object-cover grayscale transition-all duration-500 ease-out hover:scale-105 hover:grayscale-0"
                    />
                  </div>

                  <div className="min-w-0">
                    <h1 className="truncate text-[22px] font-semibold tracking-tight">
                      Arihant Alagoudar
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500">
                      Software Engineer · Full-Stack · AI/ML
                    </p>
                    <p className="mt-1 font-technical text-[8px] uppercase tracking-[0.12em] text-zinc-400">
                      ISE · RNSIT · Bengaluru
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="font-technical text-[8px] text-zinc-400">
                    ⌘ K
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temporary content */}

        {/* Hero */}
        <section
          id="about"
          className="blueprint-section px-4"
        >
          <div className="mt-6">
            <p className="text-[15px] leading-7 text-zinc-300 dark:text-zinc-300">
              Software Engineer / Full-Stack Developer. I love building,
              learning, and shipping things.
            </p>

            <ul className="mt-5 space-y-2 text-[14px] leading-6 text-zinc-500">
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  Software engineering, AI/ML, and developer tools excite me.
                </span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  I enjoy turning ideas into practical products and solving real
                  problems.
                </span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  Currently building projects with React, Next.js, Node.js, and
                  TypeScript.
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 bg-zinc-100 px-3 py-2 text-xs text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                View Resume ↗
              </a>

              <a
                href="mailto:arihant.og@gmail.com"
                className="border border-black/10 px-3 py-2 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/10 dark:hover:text-white"
              >
                Send an email ↗
              </a>
            </div>

            <p className="mt-7 text-sm text-zinc-500">
              Here are my{" "}
              <span className="text-zinc-300 dark:text-zinc-300">socials</span>
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://github.com/The-ZGod"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 px-3 py-2 font-technical text-[9px] text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/10 dark:hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/zgod/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 px-3 py-2 font-technical text-[9px] text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/10 dark:hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:arihant.og@gmail.com"
                className="border border-black/10 px-3 py-2 font-technical text-[9px] text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/10 dark:hover:text-white"
              >
                Email ↗
              </a>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="blueprint-section px-4 py-4"
        >
          <div className="blueprint-heading">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Projects
                </h2>
              </div>
            </div>
          </div>

          <ProjectsGrid />
        </section>

        <section
          id="experience"
          className="blueprint-section px-4 py-4"
        >
          <div className="blueprint-heading">
            <h2 className="text-xl font-semibold tracking-tight">
              Education
            </h2>
          </div>

          <ExperienceTimeline />
        </section>

        <section
          id="skills"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <div className="blueprint-heading">
            <h2 className="text-xl font-semibold tracking-tight">
              Skills
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Technologies and computer science fundamentals I use to design,
            build, and understand software systems.
          </p>

          <SkillsGrid />
        </section>

        <section
          id="coding"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <div className="blueprint-heading">
            {/* <div className="mt-4 flex items-end justify-between gap-4"> */}
            <h2 className="text-xl font-semibold tracking-tight">
              Competitive programming
            </h2>
            {/* <span className="font-technical text-[9px] text-zinc-400">
              DSA / CP
            </span> */}
            {/* </div> */}
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Regular problem solving across data structures, algorithms, and
            competitive programming platforms.
          </p>

          <CodingStats />
        </section>

        <section
          id="contact"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <div className="blueprint-heading">
            <h2 className="text-xl font-semibold tracking-tight">
              Let&apos;s build something.
            </h2>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            I&apos;m interested in software engineering opportunities,
            interesting technical problems, and projects where I can build and
            learn.
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