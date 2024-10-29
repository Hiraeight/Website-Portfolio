"use client";

import { HoverEffect } from "../ui/card-hover-effect";


export function Certificates() {
  return (
    <div id="certificates" className="max-w-5xl mx-auto px-8 bg-transparent">
        <h2 className="md:text-3xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
        My Developer C
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(0,255,255)]">
            ertifications
          </span>
      </h2>
      <p className="font-sans text-zinc-400 text-center dark:text-neutral-300 text-base md:text-lg w-full max-w-5xl mx-auto px-8 ">
        Every line of code I write tells a story of growth, determination, and passion. My journey as a developer has been fueled by a relentless pursuit of knowledge, culminating in certifications that showcase my skills and commitment to excellence. Here are the milestones that define my career.
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Meta Front-End Developer",
    description:
      "Professional Certificate that consist of 9-course taught by Meta (facebook) specializing in Front-End Development that helped me have a deeper understanding in developing webpages.",
    link: "https://coursera.org/share/4fa9ea6b9bbd1bc202dc6751b3231e95",
    badge: "Completed",
  },
  {
    title: "Meta React Native",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "../page/unavailable.tsx",
    badge: "In Progress",
  },
  {
    title: "Harvard CS50x",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "../page/unavailable.tsx",
    badge: "In Progress",
  },
];
