"use client";

import { ReactNode, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Target, Footprints, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";

export type CardHoverItem = {
  title: string;
  emphasis: string;
  description: string;
  icon?: ReactNode;
  tags?: string[];
  focusAreas?: string[];
  approach?: string[];
  outcomes?: string[];
};

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: CardHoverItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, index) => (
        <HoverCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
};

const HoverCard = ({ item, index }: { item: CardHoverItem; index: number }) => {
  const [activeTab, setActiveTab] = useState<"focus" | "approach" | "outcomes">(
    "focus"
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  const colors = {
    focus: "bg-emerald-400/20 dark:bg-emerald-500/30",
    approach: "bg-blue-400/20 dark:bg-blue-500/30",
    outcomes: "bg-purple-400/20 dark:bg-purple-500/30",
  };

  const lineColors = {
    focus: "from-emerald-400 to-emerald-600",
    approach: "from-blue-400 to-blue-600",
    outcomes: "from-purple-400 to-purple-600",
  };

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

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetGlow}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,15,15,0.12)] backdrop-blur transition duration-500 dark:border-white/10 dark:bg-neutral-900/70"
    >
      <motion.div
        style={{ x: glowX, y: glowY }}
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[120px] transition-all duration-500 group-hover:opacity-100",
          colors[activeTab]
        )}
      />
      <div className="relative flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
          {item.emphasis}
        </p>
        {item.icon && (
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-neutral-600 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:text-black dark:border-white/10 dark:bg-neutral-800 dark:text-white/70">
            {item.icon}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>
        </div>

        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 transition group-hover:border-slate-400/40 dark:border-white/15 dark:bg-neutral-800/60 dark:text-neutral-200`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8">
          <div className="mb-4 flex gap-2 border-b border-black/5 pb-2 dark:border-white/10">
            {[
              { id: "focus", icon: Target, label: "Focus", color: "emerald" },
              {
                id: "approach",
                icon: Footprints,
                label: "Approach",
                color: "blue",
              },
              {
                id: "outcomes",
                icon: Trophy,
                label: "Outcomes",
                color: "purple",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
                  activeTab === tab.id
                    ? `bg-${tab.color}-500/10 text-${tab.color}-600 dark:bg-${tab.color}-500/20 dark:text-${tab.color}-400`
                    : "text-neutral-500 hover:bg-black/5 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-neutral-200"
                )}
              >
                <tab.icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[140px]">
            <AnimatePresence mode="wait">
              {activeTab === "focus" && item.focusAreas && (
                <motion.div
                  key="focus"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <ul className="space-y-2">
                      {item.focusAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "approach" && item.approach && (
                <motion.div
                  key="approach"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
                    <ul className="space-y-2">
                      {item.approach.map((step) => (
                        <li
                          key={step}
                          className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "outcomes" && item.outcomes && (
                <motion.div
                  key="outcomes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/5 p-4 dark:border-purple-500/20 dark:bg-purple-500/10">
                    <ul className="space-y-2">
                      {item.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative mt-auto pt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-neutral-300">
        <span>0{index + 1}</span>
        <span
          className={cn(
            "h-1 w-16 rounded-full bg-gradient-to-r opacity-0 transition-all duration-500 group-hover:opacity-100",
            lineColors[activeTab]
          )}
        />
      </div>
    </article>
  );
};
