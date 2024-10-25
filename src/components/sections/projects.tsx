import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";import {
  IconFrame,
  IconSettings2,
  IconCodeCircle2,
  IconWorldWww,
  IconComponents,
} from "@tabler/icons-react";

export function Projects() {
  const data = [
    {
      title: "2024",
      content: (
      <div className="flex flex-wrap justify-center gap-4 ">
        <div className="card card-compact bg-base-100 w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)]">
        <figure className="relative group">
          <a href="#">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="w-full transition duration-300 ease-in-out group-hover:blur-sm"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-white text-white font-bold bg-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              View More
            </button>
          </a>
        </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-zinc-500">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <div className="badge border border-zinc-500 bg-zinc-800">React</div>
              <div className="badge border border-zinc-500 bg-zinc-800">JavaScript</div>
              <div className="badge border border-zinc-500 bg-zinc-800">HTML5</div>
              <div className="badge border border-zinc-500 bg-zinc-800">CSS3</div>
            </div>
            <div className="card-actions justify-end">
              <a href="" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconFrame className="h-full w-full dark:text-neutral-300" />
              </a>
              <a href="" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconComponents className="h-full w-full dark:text-neutral-300" />
              </a>
              <a href="" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconCodeCircle2 className="h-full w-full dark:text-neutral-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-zinc-500">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">HTML5</div>
              <div className="badge badge-outline">CSS3</div>
            </div>
            <div className="card-actions justify-end">
              <a href="" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-[rgba(0,255,255)] over:text-white hover:bg-gray-700">Wireframe</a>
              <a href="" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-[rgba(0,255,255)] over:text-white hover:bg-gray-700">Prototype</a>
              <a href="" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-[rgba(0,255,255)] over:text-white hover:bg-gray-700">Source Code</a>
              <a href="" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-[rgba(0,255,255)] over:text-white hover:bg-gray-700">Live</a>
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
