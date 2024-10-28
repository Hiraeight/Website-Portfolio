import Image from "next/image";
import React from "react";
import { FC } from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  IconFrame,
  IconCodeCircle2,
  IconComponents,
} from "@tabler/icons-react";
import LittleLemon from '../../app/images/little-lemon.png';

export function Projects() {
  const data = [
    {
      title: "2024",
      content: (
      <div className="flex flex-wrap justify-center gap-4 glow-effect">
        <div className="card card-compact bg-base-100 w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)]">
        <figure className="relative group">
          <a href="https://little-lemon-zeta-liard.vercel.app/">
            <Image src={LittleLemon} alt="Little Lemon" className="w-full transition duration-300 ease-in-out group-hover:blur-sm"/>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-white text-white font-bold bg-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              View More
            </button>
          </a>
        </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Little Lemon!</h2>
            <p className="font-sans text-zinc-500">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions font-sans">
              <div className="badge border border-zinc-500 bg-zinc-800">React</div>
              <div className="badge border border-zinc-500 bg-zinc-800">JavaScript</div>
              <div className="badge border border-zinc-500 bg-zinc-800">HTML5</div>
              <div className="badge border border-zinc-500 bg-zinc-800">CSS3</div>
            </div>
            <div className="card-actions justify-end">
              <a href="https://www.figma.com/design/gTg00v2Te5cMmtB4yjU972/Wireframe?node-id=0-1&t=VxavYqoR0Z7M1hHW-1" title="Wireframe" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconFrame className="h-full w-full dark:text-neutral-300" />
              </a>
              <a href="https://www.figma.com/design/HVtEZes8s8DiZlrJV5glOv/Prototype?node-id=0-1&t=UzqvEKHrRq2B4I4k-1" title="Prototype" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconComponents className="h-full w-full dark:text-neutral-300" />
              </a>
              <a href="https://github.com/Hiraeight/Little-Lemon" title="Source Code" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconCodeCircle2 className="h-full w-full dark:text-neutral-300" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
