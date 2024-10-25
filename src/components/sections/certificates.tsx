"use client";

import { HoverEffect } from "../ui/card-hover-effect";

export function Certificates() {
  return (
    <div id="certificates" className="max-w-5xl mx-auto px-8 bg-transparent">
        <h2 className="md:text-3xl text-1xl lg:text-5xl font-bold text-center text-white relative z-20">
        My Professional Certificates
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Meta Front-End Developer",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Meta React Native",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Harvard CS50x",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://twitter.com",
  },
  {
    title: "Meta Front-End Developer",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://facebook.com",
  },
  {
    title: "Meta React Native",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://instagram.com",
  },
  {
    title: "Harvard CS50x",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://linkedin.com",
  },
];
