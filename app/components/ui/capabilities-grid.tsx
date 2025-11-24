import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type Capability = {
  title: string;
  emphasis: string;
  description: string;
  icon?: ReactNode;
  tags?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
};

export const CapabilitiesGrid = ({ items }: { items: Capability[] }) => {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-neutral-900/70"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.25),transparent_30%)] opacity-0 blur-[1px] transition-opacity duration-500 group-hover:opacity-100 dark:opacity-100 dark:mix-blend-screen" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                {item.emphasis}
              </span>
              {item.icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-white/80 text-neutral-600 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:text-black dark:border-white/10 dark:bg-neutral-800/90 dark:text-neutral-200 dark:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_18px_rgba(16,185,129,0.25)]">
                  {item.icon}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
            {item.tags && (
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600",
                      "dark:border-white/15 dark:bg-neutral-800/70 dark:text-neutral-200"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.stats && (
              <dl className="grid grid-cols-2 gap-2 pt-4">
                {item.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/5 bg-white/80 p-3 text-left dark:border-white/10 dark:bg-neutral-800/70 dark:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_0_25px_rgba(52,211,153,0.15)]"
                  >
                    <dt className="text-xs uppercase tracking-wide text-neutral-400">
                      {stat.label}
                    </dt>
                    <dd className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-300">
              0{index + 1}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};
