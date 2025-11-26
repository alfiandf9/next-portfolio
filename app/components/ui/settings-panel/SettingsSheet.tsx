"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  GlobeIcon,
  MoonIcon,
  SunIcon,
  XIcon
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const languages = [
  { value: "en", label: "English" },
  { value: "id", label: "Bahasa" },
] as const;

type SettingsSheetProps = {
  open: boolean;
  onClose: () => void;
};

export const SettingsSheet = ({ open, onClose }: SettingsSheetProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] =
    useState<(typeof languages)[number]["value"]>("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-neutral-900">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Settings
                </h3>
                <button
                  onClick={onClose}
                  aria-label="Close settings"
                  className="rounded-full border border-neutral-200 p-2 text-neutral-500 hover:border-neutral-400 dark:border-neutral-800 dark:text-neutral-200"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="rounded-2xl border border-black/5 p-4 dark:border-white/10">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                    Theme
                  </p>
                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => setTheme("light")}
                      className={cn(
                        "flex flex-1 items-center gap-2 rounded-2xl border px-3 py-2",
                        theme === "light"
                          ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                          : "border-black/10 text-neutral-500 dark:border-white/10 dark:text-neutral-300"
                      )}
                    >
                      <SunIcon className="h-4 w-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "flex flex-1 items-center gap-2 rounded-2xl border px-3 py-2",
                        theme === "dark"
                          ? "border-emerald-400 bg-emerald-900/30 text-emerald-200"
                          : "border-black/10 text-neutral-500 dark:border-white/10 dark:text-neutral-300"
                      )}
                    >
                      <MoonIcon className="h-4 w-4" />
                      Dark
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/5 p-4 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                      Translation
                    </p>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                      In Development
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    {languages.map((item) => (
                      <button
                        key={item.value}
                        onClick={() => setLanguage(item.value)}
                        className={cn(
                          "flex flex-1 items-center gap-2 rounded-2xl border px-3 py-2 opacity-50 cursor-not-allowed",
                          language === item.value
                            ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                            : "border-black/10 text-neutral-500 dark:border-white/10 dark:text-neutral-300"
                        )}
                        disabled
                        title="Language switching is coming soon"
                      >
                        <GlobeIcon className="h-4 w-4" />
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Multi-language support coming soon
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 p-4 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-300">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                    Credits
                  </p>
                  <p className="mt-2">
                    Built with Next.js, Tailwind, framer-motion, and Aceternity
                    UI. Deployed on Vercel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
