import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TechTool = {
  name: string;
  logo: ReactNode;
};

export type TechStackGroup = {
  title: string;
  purpose: string;
  description: string;
  tools: TechTool[];
  icon?: ReactNode;
  accent?: string;
  span?: string;
};

export const TechBento = ({ groups }: { groups: TechStackGroup[] }) => {
  return (
    <div className="grid w-full gap-4 md:grid-cols-4">
      {groups.map((group) => (
        <article
          key={group.title}
          className={cn(
            "group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-6 text-left shadow-[0_12px_50px_rgba(15,15,15,0.1)] backdrop-blur",
            "dark:border-white/10 dark:bg-neutral-900/70",
            group.span ?? "md:col-span-2"
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-90 transition duration-500 group-hover:opacity-100",
              group.accent ??
                "bg-gradient-to-br from-emerald-200/40 via-transparent to-emerald-100/20 dark:from-emerald-500/10 dark:to-emerald-500/5"
            )}
          />
          <div className="pointer-events-none absolute inset-[-1px] rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 dark:opacity-100 dark:mix-blend-screen dark:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_0_28px_rgba(52,211,153,0.15)]" />
          <div className="relative flex h-full flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                  {group.purpose}
                </p>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  {group.title}
                </h3>
              </div>
              {group.icon && (
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-white text-neutral-700 shadow-sm dark:border-white/10 dark:bg-neutral-800 dark:text-white/80">
                  {group.icon}
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-3 md:max-w-[560px] md:flex-row">
              {group.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex min-w-[150px] flex-1 items-center gap-2 rounded-2xl border border-black/10 bg-white/90 px-3 py-2 text-xs font-semibold text-neutral-700 transition duration-300 group-hover:-translate-y-1 dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-100 dark:shadow-[0_0_0_1px_rgba(52,211,153,0.2),0_0_20px_rgba(52,211,153,0.12)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
                    {tool.logo}
                  </span>
                  {tool.name}
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-neutral-400">
              <span>Stack</span>
              <span>0{group.tools.length}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
