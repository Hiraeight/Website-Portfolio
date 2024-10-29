import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCertificate,
  IconHome,
  IconMessage,
  IconMessageCode,
  IconTool,
  IconUserCircle,
} from "@tabler/icons-react";

export function Navigation() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#header",
    },
    {
      title: "Certificates",
      icon: (
        <IconCertificate className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#certificates",
    },
    {
      title: "Projects",
      icon: (
        <IconMessageCode className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Tools",
      icon: (
        <IconTool className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Contact Me",
      icon: (
        <IconMessage className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
      <FloatingDock
        items={links}
      />
  );
}
