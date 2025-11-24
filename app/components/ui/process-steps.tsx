"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type Step = {
  title: string;
  blurb: string;
  detail: string;
  number: string;
};

export const ProcessSteps = ({ steps }: { steps: Step[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      onMouseLeave={() => setActiveIndex(null)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map((step, index) => {
        const isFocused = activeIndex === index;
        const isDimmed = activeIndex !== null && activeIndex !== index;

        return (
          <motion.article
            key={step.title}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            tabIndex={0}
            className={`relative flex flex-col gap-4 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_12px_40px_rgba(15,15,15,0.05)] outline-none transition-all duration-500 dark:border-white/10 dark:bg-neutral-900/70 md:flex-row md:items-center md:gap-8 ${
              isFocused
                ? "shadow-[0_18px_50px_rgba(15,15,15,0.12)] md:scale-[1.01] focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_0_28px_rgba(52,211,153,0.12)] dark:focus-visible:ring-offset-neutral-900"
                : "focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"
            } ${isDimmed ? "md:scale-[0.99] md:opacity-40 md:blur-[1px]" : ""}`}
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-white text-lg font-semibold text-neutral-900 dark:border-white/10 dark:bg-neutral-800 dark:text-white/80">
                {step.number}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {step.blurb}
              </p>
              <p>{step.detail}</p>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};
