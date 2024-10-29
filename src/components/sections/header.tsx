"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="header" className="h-[45rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full flex items-center justify-center p-4 bg-transparent">
        <p className="text-sm text-white text-center">
          Front-End Developer • UI/UX Designer • Experienced Email Marketing Specialist
        </p>
        <div className="flex items-center" />
      </div>
      <h1 className="md:text-5xl text-1xl sm:text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
        Joh
        <span className="inline-block relative">
          {/* Gradient from left (white) to right (rgba(0,255,255)) */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(0,255,255)]">
            n&nbsp;
          </span>
        </span>
        <span className="text-[rgba(0,255,255)] text-glow">Patrick&nbsp;</span>
        <span className="inline-block relative">
          {/* Gradient from left (white) to right (rgba(0,255,255)) */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,255,255)] to-white">
            F
          </span>
        </span>
        elicia
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[rgba(0,255,255)] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[rgba(0,255,255)] to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_30%,white)]"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 pt-4">
        <div>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-xs lg:text-lg font-semibold text-white shadow-sm hover:text-[rgba(0,255,255)] hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let&apos;s Collaborate
        </a>
        </div>
        <div>
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "#projects")}
          className="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-xs lg:text-lg font-semibold text-white shadow-sm hover:text-[rgba(0,255,255)] hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View my projects
        </a>
        </div>
      </div>
    </div>
  );
}
