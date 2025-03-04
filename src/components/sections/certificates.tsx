"use client";

import { HoverEffect } from "../ui/card-hover-effect";


export function Certificates() {
  return (
    <div id="certificates" className="max-w-5xl mx-auto px-8 bg-transparent">
        <h2 className="md:text-3xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20 mb-4">
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
    title: "Career Essentials in Software Development",
    description:
      "This course provides a comprehensive overview of what it's like to be a programmer and the essential skills needed for a career in software development.",
    link: "https://www.linkedin.com/learning/certificates/e299cfa1d8c667ac63bf5d9a4bf3bd064ef0605f2c43ece0f249bcf5fcac00c9",
    badge: "Completed",
  },
  {
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    description:
      "These courses have equipped me with essential skills to master the language, from fundamental concepts like variables and functions to advanced topics such as asynchronous tasks and DOM scripting.",
    link: "https://www.linkedin.com/learning/certificates/1c7c1deafa837445eb787f514dbeac810de6d2e7847873d205c8b13205bf9d09",
    badge: "Completed",
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    description:
      "These courses teached me the skills to enrich a GitHub portfolio and elevate a profile in today's competitive job market.",
    link: "https://www.linkedin.com/learning/certificates/b287c1e27c8be608ad9cee3d514fe87535c0f25d11535ed33af0499f4c063b24",
    badge: "Completed",
  },
  {
    title: "Learning in progress, stay tuned!",
    description:
      "Searching for a new course to learn and improve my skills.",
    link: "#",
    badge: "In Progress",
  },
  {
    title: "Learning in progress, stay tuned!",
    description:
      "Searching for a new course to learn and improve my skills.",
    link: "#",
    badge: "In Progress",
  },
];
