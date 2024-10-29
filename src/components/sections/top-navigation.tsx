import { useState } from "react";

export const TopNavigation = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div id="top-nav" className="bg-zinc-900">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="px-4 py-5 relative flex items-center justify-between">
                <a
                href="/"
                aria-label="Go home"
                title="JP Dev"
                className="inline-flex items-center"
              >
                <svg
                    id="svg"
                    version="1.0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 500 250"
                    className="w-10 lg:w-20 fill-white"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d="M157.5 219.5 c-3.8 -2.3 -20 -11.9 -36 -21.2 -15.9 -9.3 -39.2 -23 -51.7 -30.3 -12.6 -7.3 -22.8 -13.6 -22.8 -14 0 -0.9 34.7 -21 36.2 -21 1.2 0 79.5 45.6 81.6 47.5 l1.4 1.3 -0.9 20.9 -0.8 21 -7 -4.2z"/>
                    <path d="M334 200.6 l0 -21.3 64 -37.7 c35.2 -20.7 64.2 -37.6 64.5 -37.6 0.3 0 8.8 4.8 19 10.7 l18.5 10.6 -1.7 1.2 c-1 0.7 -11 6.6 -22.3 13.2 -11.3 6.6 -41 24.1 -66 38.8 -71.1 41.9 -73.9 43.5 -75 43.5 l-1 0 0 -21.4z"/>
                    <path d="M18.8 137.2 l-18.7 -10.7 0.7 -0.6 c0.6 -0.6 98.5 -58.3 150.8 -88.9 l13.1 -7.7 0.7 21 0.7 21 -1.3 1.2 c-0.7 0.7 -28.7 17.3 -62.3 37 -33.5 19.7 -61.9 36.4 -63 37.1 l-2.1 1.4 -18.6 -10.8z"/>
                    <path d="M374.8 95.2 l-40.7 -23.7 -0.1 -21.7 0 -21.8 0.6 0 c0.3 0 8.7 4.8 18.7 10.7 30 17.5 87.7 51.4 94.5 55.3 l6.4 3.7 -14.4 8.3 c-7.8 4.6 -16.1 9.3 -18.4 10.6 -2.2 1.3 -4.5 2.4 -5 2.4 -0.5 0 -19.2 -10.7 -41.6 -23.8z"/>
                    <path d="M172 222.5 c0 -0.3 6.2 -11.2 13.8 -24.3 7.6 -13 32.6 -57.1 55.7 -97.9 l42 -74.3 20.8 0 20.7 0 0 1 c0 0.6 -10 18.7 -22.3 40.3 -12.2 21.5 -37.1 65.4 -55.2 97.5 l-33 58.2 -21.2 0 -21.3 0 0 -0.5z" className="fill-[rgba(0,255,255)]"/>
                </svg>
                <span className="ml-2 text-sm lg:text-xl font-bold tracking-wide text-gray-100 uppercase">
                  JP .DEV
                </span>
              </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <a
                      href="#certificates"
                      aria-label="Certificates"
                      title="Certificates"
                      onClick={(e) => handleSmoothScroll(e, "#certificates")}
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      aria-label="Projects"
                      title="Projects"
                      onClick={(e) => handleSmoothScroll(e, "#projects")}
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      aria-label="Skills"
                      title="Skills"onClick={(e) => handleSmoothScroll(e, "#skills")}
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-us"
                      aria-label="About us"
                      title="About us"
                      onClick={(e) => handleSmoothScroll(e, "#about-us")}
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      aria-label="Contact"
                      title="Contact"
                      onClick={(e) => handleSmoothScroll(e, "#contact")}
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <a
                      href="https://www.canva.com/design/DAGTt3AwjO8/WJzzYpbNOH4imTEliwY0ug/view?utm_content=DAGTt3AwjO8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white hover:text-[rgba(0,255,255)] transition duration-200 rounded shadow-md bg-zinc-900 hover:bg-black focus:shadow-outline focus:outline-none"
                      aria-label="Resume"
                      title="Resume"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
                
                {/*Mobile Nav*/}
                <div className="lg:hidden">
                  <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <svg className="w-5 text-white" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                      />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-screen z-50">
                      <div className="p-5 bg-zinc-900 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <a
                                href="/"
                                aria-label="Go home"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <svg
                                    id="svg"
                                    version="1.0" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 500 250"
                                    className="w-20 fill-white"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path d="M157.5 219.5 c-3.8 -2.3 -20 -11.9 -36 -21.2 -15.9 -9.3 -39.2 -23 -51.7 -30.3 -12.6 -7.3 -22.8 -13.6 -22.8 -14 0 -0.9 34.7 -21 36.2 -21 1.2 0 79.5 45.6 81.6 47.5 l1.4 1.3 -0.9 20.9 -0.8 21 -7 -4.2z"/>
                                    <path d="M334 200.6 l0 -21.3 64 -37.7 c35.2 -20.7 64.2 -37.6 64.5 -37.6 0.3 0 8.8 4.8 19 10.7 l18.5 10.6 -1.7 1.2 c-1 0.7 -11 6.6 -22.3 13.2 -11.3 6.6 -41 24.1 -66 38.8 -71.1 41.9 -73.9 43.5 -75 43.5 l-1 0 0 -21.4z"/>
                                    <path d="M18.8 137.2 l-18.7 -10.7 0.7 -0.6 c0.6 -0.6 98.5 -58.3 150.8 -88.9 l13.1 -7.7 0.7 21 0.7 21 -1.3 1.2 c-0.7 0.7 -28.7 17.3 -62.3 37 -33.5 19.7 -61.9 36.4 -63 37.1 l-2.1 1.4 -18.6 -10.8z"/>
                                    <path d="M374.8 95.2 l-40.7 -23.7 -0.1 -21.7 0 -21.8 0.6 0 c0.3 0 8.7 4.8 18.7 10.7 30 17.5 87.7 51.4 94.5 55.3 l6.4 3.7 -14.4 8.3 c-7.8 4.6 -16.1 9.3 -18.4 10.6 -2.2 1.3 -4.5 2.4 -5 2.4 -0.5 0 -19.2 -10.7 -41.6 -23.8z"/>
                                    <path d="M172 222.5 c0 -0.3 6.2 -11.2 13.8 -24.3 7.6 -13 32.6 -57.1 55.7 -97.9 l42 -74.3 20.8 0 20.7 0 0 1 c0 0.6 -10 18.7 -22.3 40.3 -12.2 21.5 -37.1 65.4 -55.2 97.5 l-33 58.2 -21.2 0 -21.3 0 0 -0.5z" className="fill-[rgba(0,255,255)]"/>
                                </svg>
                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                JP .DEV
                                </span>
                            </a>
                          </div>
                          <div>
                            <button
                              aria-label="Close Menu"
                              title="Close Menu"
                              className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <nav>
                          <ul className="space-y-4">
                            <li>
                                <a
                                href="#certificates"
                                aria-label="Certificates"
                                title="Certificates"
                                onClick={(e) => handleSmoothScroll(e, "#certificates")}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                Certificates
                                </a>
                            </li>
                            <li>
                                <a
                                href="#projects"
                                aria-label="Projects"
                                title="Projects"
                                onClick={(e) => handleSmoothScroll(e, "#projects")}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                Projects
                                </a>
                            </li>
                            <li>
                                <a
                                href="#skills"
                                aria-label="Skills"
                                title="Skills"onClick={(e) => handleSmoothScroll(e, "#skills")}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                Skills
                                </a>
                            </li>
                            <li>
                                <a
                                href="#about-us"
                                aria-label="About us"
                                title="About us"
                                onClick={(e) => handleSmoothScroll(e, "#about-us")}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                About us
                                </a>
                            </li>
                            <li>
                                <a
                                href="#contact"
                                aria-label="Contact"
                                title="Contact"
                                onClick={(e) => handleSmoothScroll(e, "#contact")}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                Contact
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://www.canva.com/design/DAGTt3AwjO8/WJzzYpbNOH4imTEliwY0ug/view?utm_content=DAGTt3AwjO8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                aria-label="Resume"
                                title="Resume"
                                target="_blank"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[rgba(0,255,255)]"
                                >
                                Resume
                                </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      };