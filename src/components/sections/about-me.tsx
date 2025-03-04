import Image from "next/image";
import pic1 from '../../app/images/My profile picture.png';
import pic2 from '../../app/images/crinkles.jpg';
import pic3 from '../../app/images/Family.jpg';

export const AboutMe = () => {
  
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div id="about-me" className="flex w-16 h-16 mb-4 rounded-full">
                <a
                    href="#top-nav"
                    aria-label="Go to top"
                    title="JP Dev"
                    onClick={(e) => handleSmoothScroll(e, "#top-nav")}
                    className="inline-flex items-center gap-1"
                >
                    <svg
                        id="svg"
                        version="1.0" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 500 250"
                        className="w-10 fill-white"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path d="M157.5 219.5 c-3.8 -2.3 -20 -11.9 -36 -21.2 -15.9 -9.3 -39.2 -23 -51.7 -30.3 -12.6 -7.3 -22.8 -13.6 -22.8 -14 0 -0.9 34.7 -21 36.2 -21 1.2 0 79.5 45.6 81.6 47.5 l1.4 1.3 -0.9 20.9 -0.8 21 -7 -4.2z"/>
                        <path d="M334 200.6 l0 -21.3 64 -37.7 c35.2 -20.7 64.2 -37.6 64.5 -37.6 0.3 0 8.8 4.8 19 10.7 l18.5 10.6 -1.7 1.2 c-1 0.7 -11 6.6 -22.3 13.2 -11.3 6.6 -41 24.1 -66 38.8 -71.1 41.9 -73.9 43.5 -75 43.5 l-1 0 0 -21.4z"/>
                        <path d="M18.8 137.2 l-18.7 -10.7 0.7 -0.6 c0.6 -0.6 98.5 -58.3 150.8 -88.9 l13.1 -7.7 0.7 21 0.7 21 -1.3 1.2 c-0.7 0.7 -28.7 17.3 -62.3 37 -33.5 19.7 -61.9 36.4 -63 37.1 l-2.1 1.4 -18.6 -10.8z"/>
                        <path d="M374.8 95.2 l-40.7 -23.7 -0.1 -21.7 0 -21.8 0.6 0 c0.3 0 8.7 4.8 18.7 10.7 30 17.5 87.7 51.4 94.5 55.3 l6.4 3.7 -14.4 8.3 c-7.8 4.6 -16.1 9.3 -18.4 10.6 -2.2 1.3 -4.5 2.4 -5 2.4 -0.5 0 -19.2 -10.7 -41.6 -23.8z"/>
                        <path d="M172 222.5 c0 -0.3 6.2 -11.2 13.8 -24.3 7.6 -13 32.6 -57.1 55.7 -97.9 l42 -74.3 20.8 0 20.7 0 0 1 c0 0.6 -10 18.7 -22.3 40.3 -12.2 21.5 -37.1 65.4 -55.2 97.5 l-33 58.2 -21.2 0 -21.3 0 0 -0.5z" className="fill-[rgba(0,255,255)]"/>
                    </svg>
                    <span className=";ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                    JP.DEV
                    </span>
                </a>
            </div>
            <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
                    Hello there!
                    <br className="hidden md:block" />
                    The name is{' '}
                    <span className="inline-block text-[rgba(0,255,255)]">
                    John Patrick.
                    </span>
                </h2>
                <p className="text-sm text-white mb-6">
                    Front-End Developer • UI/UX Designer • Experienced Email Marketing Specialist
                </p>
                <p className="text-base font-sans text-zinc-400 md:text-lg">
                    Hello! I&apos;m a passionate developer with a strong focus on <span className="italic text-white">front-end development</span> and a goal to become a <span className="italic text-white">full-stack developer</span> in the future. I&apos;ve completed online courses from Meta that specialize in front-end technologies, equipping me with the skills to create engaging and user-friendly interfaces.
                    <br/><br/>
                    I hold an <span className="italic text-white">Associate of Science in Information Technology</span>, and I have hands-on experience as an email marketing specialist, where I frequently utilized markup languages like HTML and CSS to craft effective campaigns.
                    <br/><br/>
                    When I&apos;m not coding, I enjoy spending time with my beloved cat and playing music on the guitar and piano. Recently, I&apos;ve developed a keen interest in web development, and I&apos;m excited to continue expanding my skills in this field!
                </p>
            </div>
            <div>
              <a
                href="https://www.canva.com/design/DAGTt3AwjO8/WJzzYpbNOH4imTEliwY0ug/view"
                aria-label="Check out my resume"
                target="_blank"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-[rgba(0,255,255)] hover:text-glow"
              >
                Check out my resume
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={pic1}
                alt="My profile"
              />
              <Image
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={pic2}
                alt="My cat"
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={pic3}
                alt="My Family"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };