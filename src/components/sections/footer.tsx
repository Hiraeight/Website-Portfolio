
export const Footer = () => {
    return (
      <div className="relative mt-16 bg-zinc-900">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            className="fill-zinc-900"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
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
                    className="h-20 w-20 fill-white"
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
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-white">
                    Front-End Developer • UI/UX Designer • Experienced Email Marketing Specialist
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2">
              <div>
                <p className="font-semibold tracking-wide text-[rgba(0,255,255)]">
                  My Certificates
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="https://coursera.org/share/4fa9ea6b9bbd1bc202dc6751b3231e95"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      Meta Front-End Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="../page/unavailable.tsx"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      Meta React Native
                    </a>
                  </li>
                  <li>
                    <a
                      href="../page/unavailable.tsx"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      Harvard CS50x
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-[rgba(0,255,255)]">
                  My Projects
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="https://pupeims.webflow.io/"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      PUPEIMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://little-lemon-zeta-liard.vercel.app/"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      Little Lemon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://john-patrick-felicia.vercel.app/"
                      className="transition-colors duration-300 text-white hover:text-[rgba(0,255,255)]"
                      target="_blank"
                    >
                      First Website Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2024 John Patrick Felicia.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="mailto:johnpatrickdfelicia@gmail.com"
                className="transition-colors duration-300 text-white"
                title="Email"
                target="_blank"
              >
                <svg viewBox="0 0 512 512" fill="white" className="h-6 hover:fill-[rgba(0,255,255)]">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/johnpatrickfelicia/"
                className="transition-colors duration-300 text-white"
                title="GitHub"
                target="_blank"
              >
                <svg viewBox="0 0 496 512" fill="white" className="h-6 hover:fill-[rgba(0,255,255)]">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Hiraeight"
                className="transition-colors duration-300 text-white"
                title="LinkedIn"
                target="_blank"
              >
                <svg viewBox="0 0 448 512" fill="white" className="h-6 hover:fill-[rgba(0,255,255)]">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jp.felicia/"
                className="transition-colors duration-300 text-white"
                title="Instagram"
                target="_blank"
              >
                <svg viewBox="0 0 448 512" fill="white" className="h-6 hover:fill-[rgba(0,255,255)]">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/JohnPatrickFelicia"
                className="transition-colors duration-300 text-white"
                title="Facebook"
                target="_blank"
              >
                <svg viewBox="0 0 512 512" fill="white" className="h-6 hover:fill-[rgba(0,255,255)]">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };