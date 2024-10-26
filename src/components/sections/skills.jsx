"use client";

import { Skills } from "../ui/block-animated-card";
import { SiAirtable, SiZapier, SiWebflow, SiTypescript, SiVisualstudio, SiClickup, SiJira } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill, RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt, FaGithub, FaFigma, FaNpm, FaSlack } from "react-icons/fa";

export function Skills() {
  return (
    <div id="skills" className="max-w-5xl mx-auto px-8 py-4 bg-transparent">
        <h2 className="md:text-3xl text-1xl lg:text-5xl font-bold text-center text-white relative z-20">
        My Skillset
      </h2>
      <Skills items={skillsData} />
    </div>
  );
}

const skillsData = [
  {
    title: "Languages",
    description: "A card that showcases a set of tools that you use to create your product.",
    logos: [IoLogoHtml5, IoLogoCss3, IoLogoJavascript, SiTypescript],
  },
  {
    title: "Libraries/ Frameworks",
    description: "A card that highlights more amazing tools and features.",
    logos: [RiNextjsFill, TbBrandReactNative, IoLogoReact, RiTailwindCssFill, RiBootstrapFill],
  },
  {
    title: "Tools",
    description: "A card that highlights more amazing tools and features.",
    logos: [FaGitAlt, FaGithub, SiVisualstudio, FaFigma, SiWebflow, FaNpm],
  },
  {
    title: "Others",
    description: "A card that highlights more amazing tools and features.",
    logos: [SiAirtable, SiZapier, SiClickup, SiJira, FaSlack],
  },
];

export default skillsData;