import { Code2Icon, PaintBucketIcon, RocketIcon } from "lucide-react";

import { CardHoverEffect } from "@/app/components/ui/card-hover-effect";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const capabilityHighlights = [
  {
    title: "From Figma to Functional UI",
    emphasis: "craft",
    description:
      "I turn Figma designs into responsive, accessible pages using React, Next.js, and TypeScript—built with performance and clarity in mind.",
    icon: <PaintBucketIcon className="h-5 w-5" />,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "NextJS",
      "Tailwind",
    ],
    focusAreas: [
      "Clean component structure",
      "Responsive layout",
      "Accessible markup",
      "Fast initial load",
    ],
    approach: [
      "Start with semantic HTML",
      "Style with utility-first CSS",
      "Translate design with precision",
    ],
    outcomes: [
      "Pages that feel intuitive and polished",
      "Code that's easy to maintain and extend",
    ],
  },
  {
    title: "Smart Data Flows and State Management",
    emphasis: "Logic",
    description:
      "I manage complex state and data fetching using React Query and Zustand—handling conditional queries, invalidation, and real-time mirroring with precision.",
    icon: <Code2Icon className="h-5 w-5" />,
    tags: [
      "React Query",
      "Zustand",
      "Conditional Logic",
      "Query Invalidation",
      "Real-time Sync",
    ],
    focusAreas: [
      "Reliable data flow",
      "Minimal re-renders",
      "Predictable state updates",
    ],
    approach: [
      "Use declarative queries",
      "Isolate logic in custom hooks",
      "Keep state local and scoped",
    ],
    outcomes: ["Smooth user experience", "Code that adapts to change"],
  },
  {
    title: "Code That's Ready to Grow",
    emphasis: "Delivery",
    description:
      "I write scalable, maintainable code with testing and performance in mind—so every release feels stable and easy to build on.",
    icon: <RocketIcon className="h-5 w-5" />,
    tags: [
      "Clean Code",
      "Component Reusability",
      "Performance Optimization",
      "CI/CD",
    ],
    focusAreas: [
      "Readable structure",
      "Reusable components",
      "Early testing mindset",
    ],
    approach: [
      "Keep logic modular",
      "Write with future changes in mind",
      "Test critical paths early",
    ],
    outcomes: ["Stable releases", "Codebase that scales with the team"],
  },
];

const CapabilitiesSection = () => {
  return (
    <SectionReveal variant="fadeDown">
      <section id="capabilities" className="w-full px-4 py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            How I build reliable, user-friendly web experiences
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            From design handoff to production-ready code, I focus on clarity,
            accessibility, and smooth developer workflows
          </p>
        </div>
        <div className="mx-auto mt-12 w-full max-w-6xl">
          <CardHoverEffect items={capabilityHighlights} />
        </div>
      </section>
    </SectionReveal>
  );
};

export default CapabilitiesSection;
