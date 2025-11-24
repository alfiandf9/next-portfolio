import Experience from "@/components/sections/Experience/Experience";
import Projects from "@/components/sections/Projects/Project";
import CapabilitiesSection from "./components/sections/Home/CapabilitiesSection";
import DockControls from "./components/sections/Home/DockControls";
import Endorsements from "./components/sections/Home/Endorsements";
import FooterCTA from "./components/sections/Home/FooterCTA";
import HeroSection from "./components/sections/Home/HeroSection";
import NextUpSection from "./components/sections/Home/NextUpSection";
import ProcessSection from "./components/sections/Home/ProcessSection";
import ProfileSection from "./components/sections/Home/ProfileSection";
import TechSection from "./components/sections/Home/TechSection";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-lvh">
      {/* Hero Section */}
      <HeroSection />

      {/* Profile Section */}
      <ProfileSection />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Technologies & Tools Section */}
      <TechSection />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* What's Next Section */}
      <NextUpSection />

      {/* Endorsements Section */}
      {/* <Endorsements /> */}

      {/* Footer CTA */}
      <FooterCTA />

      <DockControls />
    </div>
  );
}
