import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  IconFrame,
  IconCodeCircle2,
  IconComponents,
  IconLink,
} from "@tabler/icons-react";
import LittleLemon from '../../app/images/little-lemon.png';
import Portfolio from '../../app/images/web-portfolio.png'
import PUPEIMS from '../../app/images/pupeims.png';
import QRcode from '../../app/images/qr-code-component.png';
import Blog from '../../app/images/blog-preview-card.png';
import Socials from '../../app/images/social-link-profile.png';
import Recipe from '../../app/images/recipe-page-main.png';

export function Projects() {
  const data = [
    {
      title: "2024",
      content: (
      <div className="flex flex-wrap justify-center gap-4 glow-effect">
        <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          The capstone project prepared by Meta “Facebook” earning the Front-End Developer Professional Certificate upon completion.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ A project prepared by Meta “Facebook”.
          </div>
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Created using React, JavaScript, CSS and HTML.
          </div>
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Functional customer reservation application.
          </div>
        </div>
        <div className="text-xs md:text-base lg:text-lg card card-compact bg-black w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)] mb-20">
          <figure className="relative group">
            <a href="https://little-lemon-zeta-liard.vercel.app/" target="_blank">
              <Image src={LittleLemon} alt="Little Lemon" className="w-full transition duration-300 ease-in-out group-hover:blur-sm"/>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-black text-black font-bold bg-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Live Preview
              </button>
            </a>
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Little Lemon!</h2>
            <p className="font-sans text-zinc-500">Little Lemon Reservation Application</p>
            <div className="card-actions font-sans">
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">React</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">JavaScript</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">HTML5</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">CSS3</div>
            </div>
            <div className="card-actions justify-end">
              <a href="https://www.figma.com/design/gTg00v2Te5cMmtB4yjU972/Wireframe?node-id=0-1&t=VxavYqoR0Z7M1hHW-1" target="_blank" title="Wireframe" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconFrame className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
              <a href="https://www.figma.com/design/HVtEZes8s8DiZlrJV5glOv/Prototype?node-id=0-1&t=UzqvEKHrRq2B4I4k-1" target="_blank" title="Prototype" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconComponents className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
              <a href="https://github.com/Hiraeight/Little-Lemon" target="_blank" title="Source Code" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconCodeCircle2 className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          My very first created portfolio using the skills I gained taking the Meta Front-End Developer Specialization.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Dark theme toggle.
          </div>
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Functional contact form.
          </div>
          <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Created using React, JavaScript, HTML and CSS
          </div>
        </div>
        <div className="text-xs md:text-base lg:text-lg card card-compact bg-black w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)] mb-8">
          <figure className="relative group">
            <a href="https://john-patrick-felicia.vercel.app/" target="_blank">
              <Image src={Portfolio} alt="Portfolio" className="w-full transition duration-300 ease-in-out group-hover:blur-sm"/>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-black text-black font-bold bg-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Live Preview
              </button>
            </a>
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Website Portfolio</h2>
            <p className="font-sans text-zinc-500">My first JavaScript React website portfolio.</p>
            <div className="card-actions font-sans">
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">React</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">JavaScript</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">HTML5</div>
              <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">CSS3</div>
            </div>
            <div className="card-actions justify-end">
              <a href="https://www.figma.com/design/lCfVIBKySHjEWgvCpRUOoM/Portfolio?node-id=0-1&t=ZMS6X5KCuZF5TiW2-1" target="_blank" title="Wireframe" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconFrame className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
              <a href="https://www.figma.com/design/lCfVIBKySHjEWgvCpRUOoM/Portfolio?t=99vAXDTKHUMXD1CI-0" target="_blank" title="Prototype" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconComponents className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
              <a href="https://github.com/Hiraeight/Portfolio-Website" target="_blank" title="Source Code" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] over:text-white hover:bg-gray-700">
                <IconCodeCircle2 className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            My Capstone Project
          </p>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I built an online course provider called PUP EIMS (Polytechnic University of the Philippines - Educational Instructional Module System) aimed at empowering both students and faculty members for my college capstone project.
          </p>
          <div className="text-xs md:text-base lg:text-lg card card-compact bg-black w-96 shadow-xl max-w-xl w-full mx-auto border border-[rgba(0,255,255,0.50)] mb-4">
            <figure className="relative group">
              <a href="https://pupeims.webflow.io/" target="_blank">
                <Image src={PUPEIMS} alt="PUPEIMS" className="w-full transition duration-300 ease-in-out group-hover:blur-sm"/>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-black text-black font-bold bg-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Live Preview
                </button>
              </a>
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">PUP EIMS</h2>
              <p className="font-sans text-zinc-500">Polytechnic University of the Philippines - Educational Instructional Module System</p>
              <div className="card-actions font-sans">
                <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">Webflow</div>
                <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">Zapier</div>
                <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">MemberStack</div>
                <div className="badge border border-zinc-500 bg-zinc-800 text-zinc-500">AirTable</div>
              </div>
              <div className="card-actions justify-end">
                <a href="https://www.figma.com/design/gTg00v2Te5cMmtB4yjU972/Wireframe?node-id=0-1&node-type=canvas&t=UDVcA30hilXYS0U1-0" target="_blank" title="Wireframe" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] hover:bg-gray-700">
                  <IconFrame className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
                </a>
                <a href="https://www.figma.com/design/HVtEZes8s8DiZlrJV5glOv/Prototype?node-id=0-1&node-type=canvas&t=0Q1o9C2VHPUPqmZS-0" target="_blank" title="Prototype" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)] hover:bg-gray-700">
                  <IconComponents className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
                </a>
                <a href="https://preview.webflow.com/preview/pupeims?utm_medium=preview_link&utm_source=dashboard&utm_content=pupeims&preview=e6fc6117f8e7001abd0718eb6916d08a&workflow=preview" target="_blank" title="Source Code" className="py-2.5 px-2.5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-full border focus:ring-gray-700 text-gray-400 border-white hover:border-[rgba(0,255,255)] hover:text-[rgba(0,255,255)]  hover:bg-gray-700">
                  <IconCodeCircle2 className="h-5 w-5 lg:h-6 lg:w-6 dark:text-neutral-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Front End Mentor",
      content: (
        <div>
          <p className="text-zinc-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Contributed four solution components on Front-End Mentor, which provided an excellent opportunity to practice responsiveness and utilize a variety of development tools. The collaborative environment with talented classmates enriched the learning experience, making it a fantastic way to hone my skills and explore new techniques in web development.
          </p>
          <div className="mb-8">
            <p className="text-[rgba(0,255,255)] text-xs md:text-sm font-normal mt-4">
            Live Previews:
            </p>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm hover:text-[rgba(0,255,255)]">
            <IconLink /><a href="https://www.frontendmentor.io/profile/Hiraeight" target="_blank" title="QR Code Component">QR Code Component</a>
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm hover:text-[rgba(0,255,255)]">
            <IconLink /><a href="https://www.frontendmentor.io/profile/Hiraeight" target="_blank" title="Blog Preview Card Component">Blog Preview Card Component</a>
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm hover:text-[rgba(0,255,255)]">
            <IconLink /><a href="https://www.frontendmentor.io/profile/Hiraeight" target="_blank" title="Social Links Profile">Social Links Profile</a>
            </div>
            <div className="flex gap-2 items-center text-zinc-400 dark:text-neutral-300 text-xs md:text-sm hover:text-[rgba(0,255,255)]">
            <IconLink /><a href="https://www.frontendmentor.io/profile/Hiraeight" target="_blank" title="Recipe Page Main">Recipe Page Main</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={QRcode}
              alt="QR Code Component"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition duration-300 ease-in-out group-hover:blur-sm shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Blog}
              alt="Blog Preview Card"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition duration-300 ease-in-out group-hover:blur-sm shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Socials}
              alt="Social Links Profile"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition duration-300 ease-in-out group-hover:blur-sm shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Recipe}
              alt="Recipe Page Main"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition duration-300 ease-in-out group-hover:blur-sm shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
