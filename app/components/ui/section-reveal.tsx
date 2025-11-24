"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

const variantMap: Record<
  Variant,
  {
    initial: Record<string, number>;
    animate: Record<string, number | string>;
  }
> = {
  fadeUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
};

export const SectionReveal = ({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: SectionRevealProps) => {
  const motionVariant = variantMap[variant];
  return (
    <motion.div
      initial={motionVariant.initial}
      whileInView={motionVariant.animate}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};
