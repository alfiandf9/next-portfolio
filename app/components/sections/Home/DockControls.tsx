"use client";

import { useState } from "react";

import {
  BriefcaseIcon,
  FolderGit2Icon,
  HomeIcon,
  Layers3Icon,
  MessageSquareIcon,
  Settings2Icon,
  User2Icon,
  WorkflowIcon,
} from "lucide-react";

import { FloatingDock } from "@/app/components/ui/floating-dock";
import { SettingsSheet } from "@/app/components/ui/settings-panel/SettingsSheet";

const DockControls = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const dockItems = [
    { title: "Home", icon: <HomeIcon className="h-4 w-4" />, href: "#home" },
    { title: "About", icon: <User2Icon className="h-4 w-4" />, href: "#about" },
    {
      title: "Capabilities",
      icon: <Layers3Icon className="h-4 w-4" />,
      href: "#capabilities",
    },
    { title: "Tech", icon: <FolderGit2Icon className="h-4 w-4" />, href: "#tech" },
    {
      title: "Process",
      icon: <WorkflowIcon className="h-4 w-4" />,
      href: "#process",
    },
    { title: "Projects", icon: <BriefcaseIcon className="h-4 w-4" />, href: "#projects" },
    {
      title: "Experience",
      icon: <Layers3Icon className="h-4 w-4" />,
      href: "#experience",
    },
    {
      title: "Contact",
      icon: <MessageSquareIcon className="h-4 w-4" />,
      href: "#footer",
    },
    {
      title: "Settings",
      icon: <Settings2Icon className="h-4 w-4" />,
      onClick: () => setSettingsOpen(true),
    },
  ];

  return (
    <>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
        mobileClassName="fixed bottom-5 right-5 z-50"
      />
      <SettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};

export default DockControls;
