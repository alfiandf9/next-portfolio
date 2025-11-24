"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { BookOpen, FlaskConical, Wrench } from "lucide-react";

import { SectionReveal } from "@/app/components/ui/section-reveal";
import { cn } from "@/lib/utils";

const focusAreas = [
  {
    label: "Learning",
    title: "React internals & testing",
    copy: "Digging deeper into how React works under the hood—especially around rendering, hooks, and component lifecycles. Also learning how to write unit tests to catch bugs early and build with confidence.",
    icon: BookOpen,
    color: "blue",
  },
  {
    label: "Experimenting",
    title: "Backend tools & workflows",
    copy: "Trying out backend tools like Express, Nest and Prisma to understand how APIs, databases, and server logic fit into the bigger picture. Still figuring out what works best for my stack.",
    icon: FlaskConical,
    color: "purple",
  },
  {
    label: "Refining",
    title: "Improving developer flow",
    copy: "Tweaking my workflow to stay fast and focused—whether it's better folder structure, reusable hooks, or clearer naming. Small changes that make a big difference over time.",
    icon: Wrench,
    color: "emerald",
  },
];

const FocusCard = ({
  area,
  index,
}: {
  area: (typeof focusAreas)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;
    x.set(relativeX);
    y.set(relativeY);
  };

  const resetGlow = () => {
    x.set(0);
    y.set(0);
  };

  const colors = {
    blue: "bg-blue-400/20 dark:bg-blue-500/30",
    purple: "bg-purple-400/20 dark:bg-purple-500/30",
    emerald: "bg-emerald-400/20 dark:bg-emerald-500/30",
  };

  const iconColors = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
  };

  const accentColors = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    emerald: "from-emerald-400 to-emerald-600",
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetGlow}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/90 p-6 text-left shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-white/10 dark:bg-neutral-900/70"
    >
      {/* Cursor-following glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-100",
          colors[area.color as keyof typeof colors]
        )}
      />

      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full rounded-bl-full bg-gradient-to-br opacity-10",
            accentColors[area.color as keyof typeof accentColors]
          )}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
            {area.label}
          </p>
          <motion.div
            whileHover={{ y: -4, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-neutral-800",
              iconColors[area.color as keyof typeof iconColors]
            )}
          >
            <area.icon className="h-5 w-5" />
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {area.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {area.copy}
        </p>

        {/* Bottom accent line */}
        <div className="mt-6 flex justify-end">
          <span
            className={cn(
              "h-1 w-12 rounded-full bg-gradient-to-r opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100",
              accentColors[area.color as keyof typeof accentColors]
            )}
          />
        </div>
      </div>
    </motion.article>
  );
};

const NextUpSection = () => {
  return (
    <SectionReveal variant="fadeUp">
      <section id="next-up" className="w-full px-4 pb-16 md:pb-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            What&apos;s next
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            What I&apos;m focusing on next
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            What I&apos;m learning, exploring, and sharpening between
            projects—so I keep growing as a frontend developer.
          </p>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <FocusCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
};

export default NextUpSection;
