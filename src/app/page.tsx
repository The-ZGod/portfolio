import RightNavbar from "@/components/RightNavbar";
import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CodingStats from "@/components/CodingStats";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavbar from "@/components/MobileNavbar";
import LeetCodeActivity from "@/components/LeetCodeActivity";
import CodingProfiles from "@/components/CodingProfiles";
import BlueprintHeading from "@/components/BlueprintHeading";
import MagneticButton from "@/components/MagneticButton";
import { LuLinkedin, LuMail } from "react-icons/lu";
import { FiGithub, FiCommand } from "react-icons/fi";
import { FaRegAddressBook } from "react-icons/fa6";
import { IoIosSquare } from "react-icons/io";

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
        <div className="absolute inset-y-0 left-[calc(50%-20vw)] border-l border-dashed border-black/10 dark:border-white/10" />

        {/* Right vertical guide */}
        <div className="absolute inset-y-0 left-[calc(50%+20vw)] border-l border-dashed border-black/10 dark:border-white/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-40 mx-auto w-full md:w-[40vw]">

        {/* Banner */}
        <section className="relative h-[20vh] overflow-hidden border-y border-dashed border-black/10 dark:border-white/10">
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full object-cover"
          >
            <source src="/geto.mp4" type="video/mp4" />
          </video> */}

          <img
            src="/crown1.jpg"
            alt="Arihant Alagoudar"
          />
        </section>

        {/* Profile */}
        <section className="relative w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-dashed border-black/20 dark:border-white/15"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 z-20 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 z-20 size-[6px] translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
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
                  <span className="flex gap-2 font-technical text-[10px] text-zinc-400">
                    <FiCommand className="text-[12px] "/> <p>k</p>
                  </span>

                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-dashed border-black/20 dark:border-white/15"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-20 size-[6px] -translate-x-1/2 translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-20 size-[6px] translate-x-1/2 translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
          />
        </section>

        {/* Temporary content */}

        {/* Hero */}
        <section
          id="about"
          className="blueprint-section px-4"
        >
          <div className="mt-4">
            <p className="text-[15px] leading-5 text-zinc-300 dark:text-zinc-300">
              Software Engineer / Full-Stack Developer. I love building,
              learning, and shipping things.
            </p>

            <ul className="mt-5 space-y-2 text-[14px] leading-4 text-zinc-300 dark:text-zinc-300">
              <li className="flex gap-2">
                <span><IoIosSquare /></span>
                <span>
                  Software engineering, AI/ML, and developer tools excite me.
                </span>
              </li>
              <li className="flex gap-2">
                <span><IoIosSquare /></span>
                <span>
                  I enjoy turning ideas into practical products and solving real
                  problems.
                </span>
              </li>
              <li className="flex gap-2">
                <span><IoIosSquare /></span>
                <span>
                  Currently building projects with React, Next.js, Node.js, and
                  TypeScript.
                </span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-[6px] bg-zinc-100 px-3.5 text-[13px] font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-[0_8px_25px_rgba(255,255,255,0.12)] active:translate-y-0"
              >
                <span className="absolute inset-y-0 -left-[120%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-[420%]" />

                <span className="relative z-10 text-[14px] transition-transform duration-300 group-hover:scale-110">
                  <FaRegAddressBook />
                </span>

                <span className="relative z-10 text-[14px]">
                  View Resume
                </span>

                <span className="relative z-10 ml-1 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black">
                  ↗
                </span>
              </a>

              <a
                href="mailto:arihant.og@gmail.com"
                className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-[6px] border border-white/10 bg-white/[0.04] px-3.5 text-[13px] font-medium text-zinc-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_25px_rgba(255,255,255,0.05)] active:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 text-[15px] text-zinc-400 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-zinc-200">
                  <LuMail />
                </span>

                <span className="relative z-10">
                  email
                </span>

                {/* <span className="relative z-10 ml-1 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                  ↗
                </span> */}
              </a>
            </div>

            <p className="mt-7 text-sm text-zinc-500">
              Here are my{" "}
              <span className="text-zinc-300 dark:text-zinc-300">socials</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://github.com/The-ZGod"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-9 items-center gap-2 rounded-[6px] border border-white/10 bg-white/[0.04] px-3 text-[12px] font-medium text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.04)] active:translate-y-0"
              >
                <span className="transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <FiGithub />
                </span>
                <span>GitHub</span>
                {/* <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span> */}
              </a>

              <a
                href="https://www.linkedin.com/in/zgod/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-9 items-center gap-2 rounded-[6px] border border-white/10 bg-white/[0.04] px-3 text-[12px] font-medium text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.04)] active:translate-y-0"
              >
                <span className="font-semibold transition-transform duration-300 group-hover:scale-110">
                  <LuLinkedin className="text-[15px] " />
                </span>
                <span>LinkedIn</span>
                {/* <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span> */}
              </a>

              {/* <a
                href="mailto:arihant.og@gmail.com"
                className="group inline-flex h-9 items-center gap-2 rounded-[6px] border border-white/10 bg-white/[0.04] px-3.5 text-[12px] font-medium text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.04)] active:translate-y-0"
              >
                <span className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  ✉
                </span>
                <span>Email</span>
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span>
              </a> */}
            </div>
            
          </div>
        </section>

        <section
          id="projects"
          className="blueprint-section px-4 py-4"
        >
          <BlueprintHeading>
            <h2 className="text-xl font-semibold tracking-tight">
              Projects
            </h2>
          </BlueprintHeading>
              


          {/* <h2 className="text-xl font-semibold tracking-tight">
            Education
          </h2> */}
          <ProjectsGrid />
        </section>

        <section
          id="coding"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <BlueprintHeading>
            {/* <div className="mt-4 flex items-end justify-between gap-4"> */}
            <h2 className="text-xl font-semibold tracking-tight">
              Competitive programming
            </h2>
            {/* <span className="font-technical text-[9px] text-zinc-400">
              DSA / CP
            </span> */}
            {/* </div> */}
          </BlueprintHeading>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Regular problem solving across data structures, algorithms, and
            competitive programming platforms.
          </p>

          <CodingProfiles />

          <CodingStats />
          <LeetCodeActivity />
        </section>

        <section
          id="experience"
          className="blueprint-section px-4 py-4"
        >
          <BlueprintHeading>
            <h2 className="text-xl font-semibold tracking-tight">
              Education
            </h2>
          </BlueprintHeading>
          

          <ExperienceTimeline />
        </section>

        <section
          id="skills"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <BlueprintHeading>
            <h2 className="text-xl font-semibold tracking-tight">
              Skills &amp; Technologies
            </h2>
          </BlueprintHeading>

          <SkillsGrid />
        </section>

        
        <section
          id="contact"
          className="blueprint-section blueprint-reveal px-4 py-4"
        >
          <BlueprintHeading>
            <h2 className="text-xl font-semibold tracking-tight">
              Let&apos;s build something.
            </h2>
          </BlueprintHeading>

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