"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Header() {
  return (
    <div id="header" className="h-[45rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-1xl sm:text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
        Desig
        <span className="inline-block relative">
          {/* Gradient from left (white) to right (rgba(0,255,255)) */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(0,255,255)]">
            n.
          </span>
        </span>
        <span className="text-[rgba(0,255,255)] text-glow">Build.</span>
        <span className="inline-block relative">
          {/* Gradient from left (white) to right (rgba(0,255,255)) */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,255,255)] to-white">
            D
          </span>
        </span>
        evelop.
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
    </div>
  );
}
