"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

import { SectionReveal } from "@/app/components/ui/section-reveal";

const techLogos = {
  react: "/icons/tech-icons/react.png",
  nextjs: "/icons/tech-icons/nextjs.png",
  typescript: "/icons/tech-icons/typescript.png",
  tailwind: "/icons/tech-icons/tailwindcss.png",
  framer: "/icons/tech-icons/framer.png",
  reactQuery: "/icons/tech-icons/tanstack.png",
  zustand: "/icons/tech-icons/zustand.png",
  testingLibrary: "/icons/tech-icons/react-testing.png",
  lighthouse: "/icons/tech-icons/lighthouse.png",
  figma: "/icons/tech-icons/figma.png",
};

const techCategories = [
  {
    name: "Core Stack",
    description: "Foundation for building fast, type-safe UIs",
    color: "blue",
    tools: [
      {
        name: "React",
        logo: techLogos.react,
        why: "Component-based architecture for reusable UI",
      },
      {
        name: "Next.js",
        logo: techLogos.nextjs,
        why: "Server-side rendering and routing out of the box",
      },
      {
        name: "TypeScript",
        logo: techLogos.typescript,
        why: "Type safety catches bugs before runtime",
      },
      {
        name: "Tailwind CSS",
        logo: techLogos.tailwind,
        why: "Utility-first CSS for rapid UI development",
      },
      {
        name: "Framer Motion",
        logo: techLogos.framer,
        why: "Smooth animations with declarative syntax",
      },
    ],
  },
  {
    name: "State & Data",
    description: "Managing state and server data efficiently",
    color: "purple",
    tools: [
      {
        name: "React Query",
        logo: techLogos.reactQuery,
        why: "Server state management with caching and sync",
      },
      {
        name: "Zustand",
        logo: techLogos.zustand,
        why: "Lightweight global state without boilerplate",
      },
    ],
  },
  {
    name: "Quality & Testing",
    description: "Ensuring reliability and performance",
    color: "emerald",
    tools: [
      {
        name: "Testing Library",
        logo: techLogos.testingLibrary,
        why: "User-centric component testing",
      },
      // {
      //   name: "Playwright",
      //   logo: techLogos.playwright,
      //   why: "Reliable end-to-end testing across browsers",
      // },
      {
        name: "Lighthouse",
        logo: techLogos.lighthouse,
        why: "Performance and accessibility audits",
      },
    ],
  },
  {
    name: "Design Tools",
    description: "Collaborating with design systems",
    color: "rose",
    tools: [
      {
        name: "Figma",
        logo: techLogos.figma,
        why: "Design handoff and component specs",
      },
    ],
  },
];

const TechCategory = ({
  category,
  index,
}: {
  category: (typeof techCategories)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const colorSchemes = {
    blue: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/5",
      text: "text-blue-600 dark:text-blue-400",
      hoverBorder: "hover:border-blue-500/40",
    },
    purple: {
      border: "border-purple-500/20",
      bg: "bg-purple-500/5",
      text: "text-purple-600 dark:text-purple-400",
      hoverBorder: "hover:border-purple-500/40",
    },
    emerald: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      text: "text-emerald-600 dark:text-emerald-400",
      hoverBorder: "hover:border-emerald-500/40",
    },
    rose: {
      border: "border-rose-500/20",
      bg: "bg-rose-500/5",
      text: "text-rose-600 dark:text-rose-400",
      hoverBorder: "hover:border-rose-500/40",
    },
  };

  const scheme = colorSchemes[category.color as keyof typeof colorSchemes];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl border ${scheme.border} ${scheme.bg} p-6 transition-all duration-300 ${scheme.hoverBorder} dark:border-white/10 dark:bg-neutral-900/50 dark:shadow-[0_0_20px_rgba(16,185,129,0.1)]`}
    >
      <div className="mb-4">
        <h3 className={`text-xl font-semibold ${scheme.text}`}>
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 + i * 0.05 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="group relative flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white/80 p-4 text-center transition-all duration-300 hover:border-black/10 hover:shadow-lg dark:border-white/10 dark:bg-neutral-800/50 dark:shadow-[0_0_15px_rgba(16,185,129,0.15)] dark:hover:border-emerald-500/30 dark:hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
          >
            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-2 left-1/2 z-10 w-48 -translate-x-1/2 -translate-y-full rounded-lg border border-black/10 bg-white px-3 py-2 text-xs text-neutral-700 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:border-white/20 dark:bg-neutral-800 dark:text-neutral-200">
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-black/10 bg-white dark:border-white/20 dark:bg-neutral-800" />
              {tool.why}
            </div>

            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src={tool.logo as string}
                alt={`${tool.name} logo`}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TechSection = () => {
  return (
    <SectionReveal variant="fadeLeft">
      <section id="tech" className="w-full px-4 py-12 md:pb-28">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Technologies & Tools
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            My frontend development toolkit
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            The technologies I use to build fast, accessible, and maintainable
            web applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {techCategories.map((category, index) => (
            <TechCategory
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
};

export default TechSection;
