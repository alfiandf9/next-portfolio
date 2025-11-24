"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { SectionReveal } from "@/app/components/ui/section-reveal";

const techLogos = {
  react: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <circle cx="32" cy="32" r="5" fill="#61DAFB" />
      <ellipse
        cx="32"
        cy="32"
        rx="18"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="3"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="18"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="3"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="18"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="3"
        transform="rotate(120 32 32)"
      />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#111111" />
      <path d="M18 20h10l18 26h-10L18 20Z" fill="white" opacity="0.95" />
      <path
        d="M34 20h6v24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="14" fill="#3178C6" />
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fill="white"
        fontWeight="700"
        fontSize="26"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
      >
        TS
      </text>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#0F172A" />
      <path
        d="M16 30c2-10 10-14 18-10 6 3 8 8 15 10 4 1 7 0 9-2-2 10-10 14-18 10-6-3-8-8-15-10-4-1-7 0-9 2Z"
        fill="#38BDF8"
      />
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#111111" />
      <path d="M18 14h28v18H32L18 14Z" fill="#88F" />
      <path d="M32 32h14v18H18L32 32Z" fill="#7C3AED" />
    </svg>
  ),
  reactQuery: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#1E1E1E" />
      <path
        d="M32 15l7 8 10-3-3 10 8 7-10 2-2 10-7-8-10 3 3-10-8-7 10-2 2-10Z"
        fill="#FF4154"
      />
      <circle cx="32" cy="32" r="5" fill="white" />
    </svg>
  ),
  zustand: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#1F2933" />
      <path
        d="M20 40c0-6 5-12 12-12s12 6 12 12-5 10-12 10-12-4-12-10Z"
        fill="#F5D0A5"
      />
      <circle cx="26" cy="30" r="3" fill="#111" />
      <circle cx="38" cy="30" r="3" fill="#111" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#0C1F17" />
      <path d="M20 46l12-28h18L38 46H20Z" fill="#3ECF8E" />
      <path
        d="M20 46h18l6-14"
        stroke="#1B5E40"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  testingLibrary: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#111827" />
      <path
        d="M18 44c2-10 10-18 20-18 4 0 8 2 8 5 0 3-4 5-8 5-4 0-8 2-8 5 0 3 3 5 6 5h10"
        stroke="#F87171"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="26" r="4" fill="#FBBF24" />
    </svg>
  ),
  playwright: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#052E16" />
      <circle cx="32" cy="28" r="10" fill="#22C55E" />
      <path
        d="M20 44c8-6 16-6 24 0"
        stroke="#86EFAC"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="28" cy="26" r="2" fill="#052E16" />
      <circle cx="36" cy="26" r="2" fill="#052E16" />
    </svg>
  ),
  lighthouse: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#1D1E30" />
      <path d="M30 18h4l8 28H22l8-28Z" fill="#F97316" />
      <path d="M24 30h16" stroke="#FED7AA" strokeWidth="3" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <rect width="64" height="64" rx="16" fill="#111" />
      <circle cx="24" cy="20" r="8" fill="#F24E1E" />
      <circle cx="24" cy="32" r="8" fill="#A259FF" />
      <circle cx="24" cy="44" r="8" fill="#1ABCFE" />
      <circle cx="36" cy="26" r="8" fill="#0ACF83" />
      <circle cx="36" cy="38" r="8" fill="#FF7262" />
    </svg>
  ),
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
      {
        name: "Supabase",
        logo: techLogos.supabase,
        why: "Real-time database with built-in auth",
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
      {
        name: "Playwright",
        logo: techLogos.playwright,
        why: "Reliable end-to-end testing across browsers",
      },
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
      className={`rounded-3xl border ${scheme.border} ${scheme.bg} p-6 transition-all duration-300 ${scheme.hoverBorder} dark:border-white/10 dark:bg-neutral-900/50`}
    >
      <div className="mb-4">
        <h3 className={`text-xl font-semibold ${scheme.text}`}>
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
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
            className="group relative flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white/80 p-4 text-center transition-all duration-300 hover:border-black/10 hover:shadow-lg dark:border-white/10 dark:bg-neutral-800/50 dark:hover:border-white/20"
          >
            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-2 left-1/2 z-10 w-48 -translate-x-1/2 -translate-y-full rounded-lg border border-black/10 bg-white px-3 py-2 text-xs text-neutral-700 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:border-white/20 dark:bg-neutral-800 dark:text-neutral-200">
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-black/10 bg-white dark:border-white/20 dark:bg-neutral-800" />
              {tool.why}
            </div>

            <div className="transition-transform duration-300 group-hover:scale-110">
              {tool.logo}
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
      <section id="tech" className="w-full px-4 pb-16 md:pb-28">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Technologies & Tools
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            My frontend development toolkit
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
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
