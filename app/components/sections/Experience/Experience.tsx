"use client";

import { useRef } from "react";

import { GridBackground } from "@/app/components/ui/grid-background";
import { SectionReveal } from "@/app/components/ui/section-reveal";
import { motion, useInView } from "motion/react";

const roles = [
  {
    id: 1,
    period: "2022 - Current",
    company: "PT. Smooets Teknologi Outsourcing",
    title: "Frontend Engineer",
    impact: "Building accessible, maintainable interfaces with clear logic.",
    achievements: [
      "Collaborated with the team and project manager to clarify goals, scope, and technical requirements.",
      "Translated mockups into responsive, accessible user interfaces using clean and maintainable code.",
      "Refactored and optimized existing components to improve performance and readability.",
      "Worked closely with backend developers to integrate APIs and ensure smooth data flow.",
      "Enhanced and extended features in existing web applications based on user and stakeholder feedback.",
      "Used Git for version control and team collaboration, following structured workflows and code reviews.",
    ],
    stack: ["Next.js", "React Query", "Zustand", "Typescript"],
  },
  {
    id: 2,
    period: "2020 - 2022",
    company: "PT. Hexacore Bina Sejahtera",
    title: "Frontend Web Developer",
    impact: "Delivered clean interfaces with role-based data",
    achievements: [
      "Discussed requirements and mockups with the team and project manager to align on goals and scope.",
      "Managed user roles and scopes using Identity Data Manager (IDM) to support access control.",
      "Built user interfaces based on mockups with attention to structure and responsiveness.",
      "Refactored and optimized code to improve performance and maintainability.",
      "Collaborated with backend developers to define and integrate data for the frontend.",
      "Improved and enhanced features in existing web applications based on team input.",
      "Used Git for version control and team coordination through structured workflows.",
    ],
    stack: ["Express", "pugHTML", "Javascript"],
  },
  {
    id: 3,
    period: "2019",
    company: "PT. Gamma Solusi Karya Nusantara",
    title: "Android Developer (Internship)",
    impact: "Gained hands-on experience in Android development",
    achievements: [
      "Developed modular Android features for logistics tracking.",
      "Explored and adapted to Android development environments.",
      "Contributed to a live product release with limited prior experience.",
    ],
    stack: ["Kotlin", "Firebase", "Figma"],
  },
  {
    id: 4,
    period: "2018",
    company: "Binary Team",
    title: "Fullstack Developer",
    impact: "Built custom CMS with Laravel and Git workflows",
    achievements: [
      "Collaborated with the team to define requirements and review mockups.",
      "Developed web applications using PHP, Laravel, and Bootstrap.",
      "Worked with the team using Git for version control and coordination.",
      "Introduced Git workflows that reduced integration issues significantly.",
    ],
    stack: ["Laravel", "Bootstrap", "MySQL", "GitLab"],
  },
];

const RoleCard = ({
  role,
  index,
}: {
  role: (typeof roles)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 md:pl-12"
    >
      {/* Timeline dot */}
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-[11px] top-6 hidden h-3 w-3 rounded-full bg-emerald-500 shadow-md ring-4 ring-white dark:ring-neutral-900 md:block"
      />

      {/* Card */}
      <article className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-8 shadow-xl backdrop-blur transition-all duration-300 hover:border-emerald-500/20 hover:shadow-2xl dark:border-white/10 dark:bg-neutral-900/70 dark:hover:border-emerald-500/30">
        {/* Subtle gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                {role.period}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{role.company}</p>
            </div>
            <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-900/40 dark:text-emerald-200 dark:group-hover:border-emerald-500/30 dark:group-hover:bg-emerald-900/60">
              {role.impact}
            </span>
          </div>

          {/* Achievements */}
          <ul className="mt-5 space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
            {role.achievements.map((achievement, i) => (
              <motion.li
                key={achievement}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.3 + i * 0.05,
                }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {role.stack.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.5 + i * 0.03,
                }}
                className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-50 dark:border-white/15 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-900/20"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <GridBackground>
      <SectionReveal variant="fadeUp">
        <section id="experience" className="w-full px-4 py-12 md:py-20">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Experience
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
              Projects and teams I&apos;ve contributed to
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              Frontend work that taught me how to balance speed, structure, and
              teamwork.
            </p>
          </div>

          <div className="relative mx-auto mt-12 flex w-full max-w-5xl flex-col gap-10">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-linear-to-b from-emerald-200 via-emerald-300 to-emerald-200 md:block" />

            {roles.map((role, index) => (
              <RoleCard key={role.id} role={role} index={index} />
            ))}
          </div>
        </section>
      </SectionReveal>
    </GridBackground>
  );
};

export default Experience;
