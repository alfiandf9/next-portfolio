"use client";

import { Calendar, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { SectionReveal } from "@/app/components/ui/section-reveal";

const profileImages = [
  "/images/profile.jpg",
  "/images/profile-2.jpg",
  "/images/profile-3.jpg",
];

const ProfileSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionReveal variant="fadeRight">
      <section
        id="about"
        className="flex w-full items-center justify-center px-4 py-20 md:min-h-screen"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          {/* Photo Side */}
          <div className="order-2 md:order-1">
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl border border-black/5 bg-neutral-100 shadow-2xl dark:border-white/10 dark:bg-neutral-800">
              {/* Preload all images */}
              {profileImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Muhammad Alfian Dwi Fantara"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />
                </div>
              ))}

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-6 bg-emerald-500"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bio Side */}
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              About Me
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 dark:text-white md:text-4xl">
              Muhammad Alfian Dwi Fantara
            </h2>
            <p className="mt-1 text-lg text-emerald-600 dark:text-emerald-400">
              Design-led Frontend Developer
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                Frontend developer who likes clean UI and real results. I turn
                tricky flows into friendly screens that people actually want to
                use.
              </p>
              <p>
                I work with React, TypeScript, and Tailwind, plus React Query
                and Zustand for state management. I map access, state, and speed
                before I code—making sure the foundation is solid.
              </p>
              <p>
                Off the keyboard, I&apos;m gaming, walking the city, hunting
                street food, or just chilling and enjoying the moment.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>West Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <a
                  href="mailto:alfian.fantara@gmail.com"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  alfian.fantara@gmail.com
                </a>
              </div>
            </div>

            {/* Tech Stack Highlight */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-neutral-500">
                Core Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind",
                  "React Query",
                  "Zustand",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/15 dark:bg-neutral-800/80 dark:text-neutral-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

export default ProfileSection;
