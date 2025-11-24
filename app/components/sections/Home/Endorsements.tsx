import Image from "next/image";

import { SectionReveal } from "@/app/components/ui/section-reveal";

const quotes = [
  {
    name: "Farhan S.",
    role: "Product Lead · HEXA",
    quote:
      "Alfian keeps designers and engineers on the same page. Our design system landed because he bridged the gap.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dea P.",
    role: "Engineering Manager · Smooets",
    quote:
      "He speaks both metrics and code. Even when things get busy, he keeps the project calm and clear.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Irfan L.",
    role: "Design Lead · GigConnect",
    quote:
      "His handoff docs turn into playbooks for the team. Motion and accessibility land without drama.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

const Endorsements = () => {
  return (
    <SectionReveal variant="fadeLeft">
      <section className="w-full px-4 pb-16 md:pb-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Kind words
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            Notes from people I work with
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Short quotes about how I handle design systems, front-end work, and steady delivery.
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {quotes.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-black/5 bg-white/90 p-5 text-left shadow-lg dark:border-white/10 dark:bg-neutral-900/70"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/5 dark:border-white/15">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
};

export default Endorsements;
