import { SectionReveal } from "@/app/components/ui/section-reveal";
import { ProcessSteps } from "@/app/components/ui/process-steps";

const processSteps = [
  {
    title: "Align & Scope",
    blurb: "Start with shared clarity",
    detail:
      "We kick things off with quick chats and sketches—clarifying goals, accessibility needs, and performance targets so everyone’s on the same page before we touch code.",
    number: "01",
  },
  {
    title: "Design Systems Ready",
    blurb: "Break down the design",
    detail:
      "I review Figma screens, name the parts, and map out props and states—so components stay reusable and questions are spotted early.",
    number: "02",
  },
  {
    title: "Build & Validate",
    blurb: "Code with confidence",
    detail:
      "I build features in Next.js, connect data and state, and test key flows—so bugs are caught early and releases feel stable.",
    number: "03",
  },
  {
    title: "Launch & Iterate",
    blurb: "Keep things healthy",
    detail:
      "After launch, I monitor performance, fix issues fast, and keep docs updated—so the UI stays smooth and easy to maintain.",
    number: "04",
  },
];

const ProcessSection = () => {
  return (
    <SectionReveal variant="fadeRight">
      <section id="process" className="w-full px-4 pb-16 md:pb-28">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Process
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
            How I turn ideas into UI
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            I follow a simple loop: align, break down, build, and refine—with
            feedback guiding every step.
          </p>
        </div>
        <div className="mx-auto mt-12 w-full max-w-5xl">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
    </SectionReveal>
  );
};

export default ProcessSection;
