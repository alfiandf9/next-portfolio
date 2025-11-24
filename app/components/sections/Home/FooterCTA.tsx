import { SectionReveal } from "@/app/components/ui/section-reveal";

const FooterCTA = () => {
  return (
    <SectionReveal variant="fadeDown">
      <section id="footer" className="w-full px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-emerald-300/60 bg-emerald-50/80 p-10 text-center dark:border-emerald-500/40 dark:bg-emerald-900/20">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-500">
            Open to collaborate
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-emerald-900 dark:text-emerald-100">
            Ready for the next project
          </h3>
          <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-200">
            Looking for teams that care about detail, kind teams, and real
            impact. If that sounds like you, let&apos;s talk.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:alfian.fantara@gmail.com"
              className="rounded-full border border-emerald-400 bg-white px-6 py-2 text-sm font-semibold text-emerald-700 transition hover:shadow-lg dark:bg-transparent dark:text-emerald-200"
            >
              Say hello
            </a>
            <a
              href="/files/cv_muhammad_alfian_df.pdf"
              download
              className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Download CV
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">
            Made with ❤️ by Alfian · Powered by{" "}
            <a
              href="https://nextjs.org"
              className="text-emerald-600 dark:text-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://ui.aceternity.com"
              className="text-emerald-600 dark:text-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Aceternity UI
            </a>
          </p>
        </div>
      </section>
    </SectionReveal>
  );
};

export default FooterCTA;
