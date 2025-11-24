import Image from "next/image";

import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { DotBackground } from "@/app/components/ui/dot-background";
import { SectionReveal } from "@/app/components/ui/section-reveal";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { jura } from "@/lib/font";

const heroIcon = [
  {
    id: 1,
    name: "Github",
    designation: "alfiandf9",
    image: "/icons/github.png",
    href: "https://github.com/alfiandf9",
  },
  {
    id: 2,
    name: "Linkedin",
    designation: "Muhammad Alfian Dwi Fantara",
    image: "/icons/linkedin.png",
    href: "https://www.linkedin.com/in/malfiandf/",
  },
  {
    id: 3,
    name: "Email",
    designation: "Muhammad Alfian Dwi Fantara",
    image: "/icons/email.png",
    href: "mailto:alfiandwi48@gmail.com",
  },
];

const HeroSection = () => {
  return (
    <SectionReveal variant="scale">
      <DotBackground>
        <div
          className="flex flex-col gap-6 justify-center items-center w-full min-h-screen px-4 text-center"
          id="home"
        >
          <div className="relative w-48 h-48 md:w-72 md:h-72">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-6px] flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(at_50%_50%,#34d399_0deg,#0ea5e9_120deg,#a855f7_240deg,#34d399_360deg)] opacity-35 md:opacity-50 md:animate-[spin_18s_linear_infinite] motion-reduce:animate-none" />
              <div className="absolute inset-[10px] rounded-full bg-white/65 blur-[6px] dark:bg-neutral-950/65 md:blur-[8px]" />
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-transparent bg-white/60 ring-2 ring-emerald-200/60 shadow-[0_20px_60px_-25px_rgba(16,185,129,0.4)] backdrop-blur-sm dark:bg-neutral-900/60 dark:ring-emerald-300/35">
              <Image
                src={"/images/portrait-4.png"}
                alt="my-portrait"
                fill
                sizes="(max-width: 768px) 192px, 288px"
                priority
                objectFit="cover"
              />
            </div>
          </div>

          <div className={`${jura.className} flex flex-col items-center gap-2`}>
            <span className="text-3xl md:text-4xl">
              Hi, I&apos;m <strong>Muhammad Alfian</strong>
            </span>
            <span className="text-xl md:text-2xl" aria-live="polite">
              <TextGenerateEffect words="Front-end Developer" duration={2} />
            </span>
            <p className="max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
              I build friendly, fast web interfaces and work with design so
              everything feels clear on any device.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <AnimatedTooltip items={heroIcon} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <span className="pointer-events-none absolute inset-[-3px] rounded-full bg-[conic-gradient(at_50%_50%,rgba(52,211,153,0.6),rgba(14,165,233,0.5),rgba(168,85,247,0.5),rgba(52,211,153,0.6))] opacity-0 blur-[10px] transition duration-300 group-hover:opacity-100 dark:opacity-70 motion-reduce:hidden" />
              <span className="relative">View Projects</span>
            </a>
            <a
              href="/files/cv_muhammad_alfian_df.pdf"
              download
              className="group relative overflow-hidden rounded-full border border-neutral-300 px-6 py-2 text-sm font-semibold text-neutral-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-neutral-700 dark:text-neutral-200"
            >
              <span className="relative">Download CV</span>
            </a>
          </div>
        </div>
      </DotBackground>
    </SectionReveal>
  );
};

export default HeroSection;
