"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Database, Layout, Smartphone, Workflow } from "lucide-react";

import { SectionReveal } from "@/app/components/ui/section-reveal";

type Project = {
  year: string;
  title: string;
  type: "Web App" | "Mobile App" | "Dashboard" | "API" | "Tool";
  role: string;
  contributions: string[];
  stack: string[];
  outcome?: string;
};

const projects: Project[] = [
  {
    year: "2024 - Current",
    title: "BPK Penabur",
    type: "Dashboard",
    role: "Frontend Developer",
    contributions: [
      "Rebuilt a web-based application for new student registration (PSB) at BPK Penabur, focusing on performance, accessibility, and responsive design.",
      " Designed and implemented a dashboard for the counseling feature, enabling efficient interaction between students and counselors.",
      "Translated UI designs from Figma into clean, responsive frontend components, ensuring visual consistency across devices.",
      "Integrated frontend with backend services, including defining and aligning API contracts with the backend team.",
      "Actively participated in discussions around application flow and requirements, helping bridge technical execution with user needs.",
      "Collaborated with the development team using Git, maintaining clean version control and smooth teamwork.",
    ],
    stack: ["ReactJS", "Tailwind", "React Query", "Zustand", "React ChartJS"],
    outcome:
      "Successfully delivered a fully functional web application for student registration and counseling, improving user experience and streamlining administrative workflows",
  },
  {
    year: "2024",
    title: "InfluenceID (Creator Analytics)",
    type: "Dashboard",
    role: "Frontend Developer",
    contributions: [
      "Developed responsive web pages based on Figma UI designs, ensuring consistency and usability across devices",
      "Collaborated with backend team to define and implement API contracts, enabling reliable data integration",
      "Integrated Xendit payment gateway into the pricing section, providing secure and seamless transaction flow",
    ],
    stack: ["React", "TypeScript", "Zustand", "Xendit"],
    outcome:
      "Delivered a functional analytics dashboard with payment integration, empowering influencers to track and monetize performance",
  },
  {
    year: "2022 - 2024",
    title: "E-Commerce BUMN",
    type: "Web App",
    role: "Frontend Developer",
    contributions: [
      "Translated UI designs from Figma into responsive web components, ensuring consistency and usability",
      "Improved, maintained, and refactored existing web applications based on client requests to enhance performance and reliability",
      "Collaborated with team members through pair programming to share knowledge and streamline task execution",
      "Integrated frontend with backend services, defining and aligning API contracts with the backend team",
      "Investigated and resolved issues, managed deployments, and conducted research to support continuous project improvement",
    ],
    stack: ["Next.js", "Tailwind", "Redux Toolkit"],
    outcome:
      "Delivered a responsive e-commerce web application with improved performance and reliability",
  },
  {
    year: "2022",
    title: "Inventory Management and Cashier (IMACA)",
    type: "Dashboard",
    role: "Frontend Developer",
    contributions: [
      "Developed web-based application modules to manage inventory and cashier operations",
      "Implemented UI components using Semantic UI and pugHTML for clean and responsive layouts",
      "Collaborated with backend team utilizing Node.js and Express.js to ensure seamless integration",
      "Worked with Neo4J database to support complex data relationships and queries",
    ],
    stack: ["pugHTML", "Node.js", "Express.js", "Semantic UI", "Neo4J"],
    outcome:
      "Delivered a functional inventory and cashier management system that streamlined operations for PT Hexacore Bina Sejahtera",
  },
  {
    year: "2021",
    title: "UIMax ISP (Inside Plant)",
    type: "Web App",
    role: "Frontend Developer",
    contributions: [
      "Improved, maintained, and refactored existing web-based applications based on client requests",
      "Implemented UI components using Semantic UI and pugHTML for responsive and consistent layouts",
      "Collaborated with backend team using Node.js and Express.js to ensure seamless data integration",
      "Worked with Neo4J database to support complex inventory relationships and queries",
    ],
    stack: ["pugHTML", "Node.js", "Express.js", "Semantic UI", "Neo4J"],
    outcome:
      "Enhanced performance and maintainability of inventory management system for digital infrastructure (Inside Plant)",
  },
  {
    year: "11/2020 - 12/2021",
    title: "UIMax OSP (Outside Plant)",
    type: "Web App",
    role: "Frontend Developer",
    contributions: [
      "Improved, maintained, and refactored web-based applications to meet evolving client requirements",
      "Developed UI components using Semantic UI and pugHTML for structured and scalable layouts",
      "Integrated frontend with backend services using Node.js and Express.js",
      "Utilized Neo4J database to manage complex asset relationships in the Outside Plant domain",
    ],
    stack: ["pugHTML", "Node.js", "Express.js", "Semantic UI", "Neo4J"],
    outcome:
      "Delivered a stable and scalable inventory system supporting Outside Plant operations for telecom infrastructure",
  },
  {
    year: "05/2021 - 11/2021",
    title: "ITAM (IT Asset Management)",
    type: "Web App",
    role: "Frontend Developer",
    contributions: [
      "Developed web-based application to manage IT asset storage and tracking",
      "Built UI components using Semantic UI and pugHTML for clean and functional interfaces",
      "Collaborated with backend team using Node.js and Express.js for smooth data flow",
      "Implemented Neo4J database to support asset categorization and relationship mapping",
    ],
    stack: ["pugHTML", "Node.js", "Express.js", "Semantic UI", "Neo4J"],
    outcome:
      "Delivered an efficient IT asset management system that streamlined tracking and storage processes",
  },
];

const typeIcons = {
  "Web App": Layout,
  "Mobile App": Smartphone,
  Dashboard: Database,
  API: Code2,
  Tool: Workflow,
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = typeIcons[project.type];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl border border-black/5 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl dark:border-white/10 dark:bg-neutral-900/70 dark:hover:border-emerald-500/30"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {project.year}
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span className="text-xs text-neutral-500">{project.type}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {project.role}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white text-neutral-600 shadow-sm transition-all duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:text-emerald-400">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        {/* Contributions */}
        <div className="mt-4">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            Key Contributions
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.contributions.map((contribution, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.2 + i * 0.05,
                }}
                className="flex items-start gap-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                <span>{contribution}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        {project.outcome && (
          <div className="mt-4 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 py-2 pl-3 pr-3 dark:bg-emerald-900/20">
            <p className="text-xs font-medium leading-relaxed text-emerald-700 dark:text-emerald-300">
              {project.outcome}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.2,
                delay: index * 0.1 + 0.4 + i * 0.03,
              }}
              className="rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-50 dark:border-white/15 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-900/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <SectionReveal variant="fadeUp">
      <section
        id="projects"
        className="relative z-10 w-full px-4 pb-20 md:pb-32"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            Projects I've built
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Most of my work involves internal tools and client projects under
            NDA. Here's what I can share about my contributions and the
            technologies I used.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.year}-${project.title}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
};

export default Projects;
