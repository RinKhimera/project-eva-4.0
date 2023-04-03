import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import javascript from "../public/assets/javascript.svg";
import typescript from "../public/assets/typescript.svg";
import react from "../public/assets/react.svg";
import redux from "../public/assets/redux.svg";
import next from "../public/assets/next.svg";
import tailwindcss from "../public/assets/tailwindcss.svg";
import bootstrap from "../public/assets/bootstrap.svg";
import sass from "../public/assets/sass.svg";
import d3 from "../public/assets/d3.svg";
import node from "../public/assets/node.svg";
import mongodb from "../public/assets/mongodb.svg";
import postgresql from "../public/assets/postgresql.svg";
import graphql from "../public/assets/graphql.svg";
import adobexd from "../public/assets/adobexd.svg";
import figma from "../public/assets/figma.svg";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { SiExpress, SiNextdotjs } from "react-icons/si";

const Projects = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const frontendIcons = [
    {
      href: "#",
      icon: <Image src={javascript} alt={""} className="w-7 h-7" />,
      name: "JavaScript",
    },
    {
      href: "#",
      icon: <Image src={typescript} alt={""} className="w-7 h-7" />,
      name: "TypeScript",
    },
    {
      href: "#",
      icon: <Image src={react} alt={""} className="w-8 h-8" />,
      name: "React",
    },
    {
      href: "#",
      icon: <Image src={redux} alt={""} className="w-8 h-8" />,
      name: "Redux",
    },
    {
      href: "#",
      icon: (
        <SiNextdotjs className="w-9 h-9 text-zinc-600 dark:text-zinc-400" />
      ),
      name: "Next.js",
    },
    {
      href: "#",
      icon: <Image src={tailwindcss} alt={""} className="w-8 h-8" />,
      name: "TailwindCSS",
    },
    {
      href: "#",
      icon: <Image src={bootstrap} alt={""} className="w-9 h-9" />,
      name: "Bootstrap",
    },
    {
      href: "#",
      icon: <Image src={sass} alt={""} className="w-9 h-9" />,
      name: "Sass",
    },
    {
      href: "#",
      icon: <Image src={d3} alt={""} className="w-8 h-8" />,
      name: "D3.js",
    },
  ];

  const backendIcons = [
    {
      href: "#",
      icon: <Image src={node} alt={""} className="w-8 h-8" />,
      name: "Node.js",
    },
    {
      href: "#",
      icon: <SiExpress className="w-9 h-9 text-zinc-600 dark:text-zinc-400" />,
      name: "Express.js",
    },
    {
      href: "#",
      icon: <Image src={mongodb} alt={""} className="w-10 h-10" />,
      name: "MongoDB",
    },
    {
      href: "#",
      icon: <Image src={postgresql} alt={""} className="w-8 h-8" />,
      name: "PostgreSQL",
    },
    {
      href: "#",
      icon: <Image src={graphql} alt={""} className="w-8 h-8" />,
      name: "GraphQL",
    },
  ];

  const designIcons = [
    {
      href: "#",
      icon: <Image src={figma} alt={""} className="w-8 h-8" />,
      name: "Figma",
    },
    {
      href: "#",
      icon: <Image src={adobexd} alt={""} className="w-8 h-8" />,
      name: "AdobeXD",
    },
  ];

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Skills - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative">
          <NavBar
            about={false}
            skills={true}
            projects={false}
            contact={false}
          />
          <main className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mt-16 sm:mt-20">
                    <div className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-500/40">
                      <div className="flex max-w-3xl flex-col space-y-16">
                        <section className="md:grid md:grid-cols-4 md:items-baseline">
                          <div className="md:col-span-3 group relative flex flex-col items-start">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <div className="md:hidden relative z-10 order-first mb-3 flex items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 pl-3.5">
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-800 dark:bg-zinc-100"></span>
                              </span>
                              Frontend techs
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minima ut quidem accusantium
                                ratione aliquid corrupti eius sed sint eum.
                              </p>
                              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-6 gap-y-6 p-2">
                                {frontendIcons.map((icon, index) => (
                                  <a
                                    href={icon.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                  >
                                    <div className="flex flex-col items-center gap-1">
                                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                        {icon.icon}
                                      </div>
                                      <h2 className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                        {icon.name}
                                      </h2>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            Frontend techs
                          </div>
                        </section>
                        <section className="md:grid md:grid-cols-4 md:items-baseline">
                          <div className="md:col-span-3 group relative flex flex-col items-start">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <div className="md:hidden relative z-10 order-first mb-3 flex items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 pl-3.5">
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-800 dark:bg-zinc-100"></span>
                              </span>
                              Backend techs
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minima ut quidem accusantium
                                ratione aliquid corrupti eius sed sint eum.
                              </p>
                              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-6 gap-y-6 p-2">
                                {backendIcons.map((icon, index) => (
                                  <a
                                    href={icon.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                  >
                                    <div className="flex flex-col items-center gap-1">
                                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                        {icon.icon}
                                      </div>
                                      <h2 className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                        {icon.name}
                                      </h2>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            Backend techs
                          </div>
                        </section>
                        <section className="md:grid md:grid-cols-4 md:items-baseline">
                          <div className="md:col-span-3 group relative flex flex-col items-start">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <div className="md:hidden relative z-10 order-first mb-3 flex items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 pl-3.5">
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-800 dark:bg-zinc-100"></span>
                              </span>
                              Design tools
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minima ut quidem accusantium
                                ratione aliquid corrupti eius sed sint eum.
                              </p>
                              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-6 gap-y-6 p-2">
                                {designIcons.map((icon, index) => (
                                  <a
                                    href={icon.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                  >
                                    <div className="flex flex-col items-center gap-1">
                                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                        {icon.icon}
                                      </div>
                                      <h2 className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                        {icon.name}
                                      </h2>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            Design tools
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Projects;
