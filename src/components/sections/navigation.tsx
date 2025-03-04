import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCertificate,
  IconHome,
  IconMessage,
  IconMessageCode,
  IconTool,
  IconFileCv,
  IconUserCircle,
} from "@tabler/icons-react";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Show navigation after scrolling down 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#top-nav",
    },
    {
      title: "Certificates",
      icon: <IconCertificate className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#certificates",
    },
    {
      title: "Projects",
      icon: <IconMessageCode className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Tools",
      icon: <IconTool className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "About Me",
      icon: <IconUserCircle className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#about-me",
    },
    {
      title: "Contact Me",
      icon: <IconMessage className="h-full w-full text-white dark:text-neutral-300" />,
      href: "#contact",
    },
  ];
  
  const externalLink = {
    title: "My CV",
    icon: <IconFileCv className="h-full w-full text-white dark:text-neutral-300" />,
    href: "https://www.canva.com/design/DAGTt3AwjO8/WJzzYpbNOH4imTEliwY0ug/view",
  };

  return (
    <div
      className={`fixed bottom-0 right-0 transition-opacity duration-300 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <FloatingDock items={links} externalLink={externalLink} />
    </div>
  );
  
}
