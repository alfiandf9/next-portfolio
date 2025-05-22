import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { DotBackground } from "./components/ui/dot-background";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Jura } from "next/font/google";
import { FloatingDock } from "./components/ui/floating-dock";
import { HomeIcon, User2Icon } from "lucide-react";
import { AnimatedTestimonials } from "./components/ui/testimonial";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience/Experience";
import { jura } from "@/lib/font";

const heroIcon = [
  {
    id: 1,
    name: "Github",
    designation: "alfiandf9",
    image: "/icons/github.png",
    href: "https://github.com/alfiandf9",
  },
  {
    id: 2,
    name: "Linkedin",
    designation: "Muhammad Alfian Dwi Fantara",
    image: "/icons/linkedin.png",
    href: "https://www.linkedin.com/in/malfiandf/",
  },
  {
    id: 3,
    name: "Email",
    designation: "Muhammad Alfian Dwi Fantara",
    image: "/icons/email.png",
    href: "mailto:alfiandwi48@gmail.com",
  },
];

const dockItems = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "About",
    icon: (
      <User2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Muhammad Alfian Dwi Fantara",
    designation: "also known as Alfian",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-lvh">
      {/* DOCK */}
      {/* <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-5 right-5 z-50"
      /> */}

      {/* Hero Section */}
      <DotBackground>
        <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen">
          <div className="relative w-72 h-72 bg-transparent border-8 border-transparent outline-4 outline-double rounded-full overflow-hidden">
            <Image
              src={"/images/portrait-2.png"}
              alt="my-portrait"
              fill
              objectFit="cover"
            />
          </div>

          <div className={`${jura.className} flex flex-col items-center gap-1`}>
            <span className="text-4xl">
              Hi, I&apos;m <strong>Muhammad Alfian</strong>
            </span>
            <span className="text-2xl">
              <TextGenerateEffect words="Front-end Developer" duration={2} />
            </span>
          </div>

          <div className="flex gap-6 items-center">
            <AnimatedTooltip items={heroIcon} />
          </div>
        </div>
      </DotBackground>

      {/* About Section */}
      <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Project Section */}
      <Projects />
    </div>
  );
}
