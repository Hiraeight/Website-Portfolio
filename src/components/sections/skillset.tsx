import { SiAirtable, SiZapier, SiWebflow, SiTypescript, SiVisualstudio, SiClickup, SiJira } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill, RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt, FaGithub, FaFigma, FaSlack } from "react-icons/fa";

const skillSections = [
  {
    title: "Languages",
    description: "Here shows the languages I have learned and have experience with.",
    skills: [
      { icon: IoLogoHtml5, name: "HTML5" },
      { icon: IoLogoCss3, name: "CSS3" },
      { icon: IoLogoJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: RiNextjsFill, name: "Next.js" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "These are the frameworks and libraries I have used in various projects.",
    skills: [
      { icon: IoLogoReact, name: "React" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS" },
      { icon: RiBootstrapFill, name: "Bootstrap" },
      { icon: TbBrandReactNative, name: "React Native" },
    ],
  },
  {
    title: "Tools",
    description: "Here are the tools that I frequently use for development and project management.",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiClickup, name: "ClickUp" },
      { icon: SiJira, name: "Jira" },
    ],
  },
  {
    title: "Others",
    description: "Here are the tools that I frequently use for development and project management.",
    skills: [
      { icon: SiAirtable, name: "AirTable" },
      { icon: SiZapier, name: "Zapier" },
      { icon: SiWebflow, name: "Webflow" },
      { icon: SiVisualstudio, name: "Visual Studio" },
      { icon: FaFigma, name: "Figma" },
      { icon: FaSlack, name: "Slack" },
    ],
  },
];

export const Skillset = () => {
  return (
    <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div id="skills" >
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-[rgba(0,255,255)]">
            Learned
          </p>
        </div>
        <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block text-[rgba(0,255,255)]">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-white">Keep</span>
          </span>{' '}
          on <br/>Learning . Progressing . Exploring .
        </h2>
        <p className="font-sans text-base text-zinc-400 md:text-lg">
          A comprehensive compilation of the skills and tools I&apos;ve acquired and utilized throughout my journey as a developer.
        </p>
      </div>

      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-4">
        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col sm:flex-row">
            <div>
              <h6 className="mb-2 font-bold leading-5 text-white">{section.title}</h6>
              <p className="font-sans mb-3 text-sm text-zinc-400">{section.description}</p>
              <ul className="mb-4 -ml-1 space-y-2">
                {section.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-white">
                    <div className="sm:mr-4 pr-4">
                      <div className="h-12 w-12 md:h-16 md:w-16 sm:h-12 sm:w-12 rounded-full flex items-center justify-center bg-[rgba(0,255,255,0.01)]
            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
                        <skill.icon className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-[rgba(0,255,255)]" />
                      </div>
                    </div>
                    {skill.name}
                  </li>
                ))}
              </ul>
              <h6
                aria-label=""
                className="inline-flex items-center transition-colors duration-200 text-[rgba(0,255,255)] hover:text-deep-purple-800"
              >
                learning new in progress<span className="loading loading-spinner loading-xs ml-1"></span>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
