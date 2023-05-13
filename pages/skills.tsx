import adobexd from "@/public/assets/icons/adobexd.svg"
import bootstrap from "@/public/assets/icons/bootstrap.svg"
import d3 from "@/public/assets/icons/d3.svg"
import figma from "@/public/assets/icons/figma.svg"
import git from "@/public/assets/icons/git.svg"
import gitlab from "@/public/assets/icons/gitlab.svg"
import graphql from "@/public/assets/icons/graphql.svg"
import javascript from "@/public/assets/icons/javascript.svg"
import mongodb from "@/public/assets/icons/mongodb.svg"
import node from "@/public/assets/icons/node.svg"
import postgresql from "@/public/assets/icons/postgresql.svg"
import react from "@/public/assets/icons/react.svg"
import redux from "@/public/assets/icons/redux.svg"
import sass from "@/public/assets/icons/sass.svg"
import tailwindcss from "@/public/assets/icons/tailwindcss.svg"
import typescript from "@/public/assets/icons/typescript.svg"
import Head from "next/head"
import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"
import { SiExpress, SiNextdotjs, SiPrisma } from "react-icons/si"

const Projects = () => {
  const frontendIcons = [
    {
      href: "https://www.javascript.com/",
      icon: <Image src={javascript} alt={""} className="h-7 w-7" />,
      name: "JavaScript",
    },
    {
      href: "https://www.typescriptlang.org/",
      icon: <Image src={typescript} alt={""} className="h-7 w-7" />,
      name: "TypeScript",
    },
    {
      href: "https://react.dev/",
      icon: <Image src={react} alt={""} className="h-8 w-8" />,
      name: "React",
    },
    {
      href: "https://redux.js.org/",
      icon: <Image src={redux} alt={""} className="h-8 w-8" />,
      name: "Redux",
    },
    {
      href: "https://nextjs.org/",
      icon: (
        <SiNextdotjs className="h-9 w-9 text-zinc-600 dark:text-zinc-400" />
      ),
      name: "Next.js",
    },
    {
      href: "https://tailwindcss.com/",
      icon: <Image src={tailwindcss} alt={""} className="h-8 w-8" />,
      name: "TailwindCSS",
    },
    {
      href: "https://getbootstrap.com/",
      icon: <Image src={bootstrap} alt={""} className="h-9 w-9" />,
      name: "Bootstrap",
    },
    {
      href: "https://sass-lang.com/",
      icon: <Image src={sass} alt={""} className="h-9 w-9" />,
      name: "Sass",
    },
    {
      href: "https://d3js.org/",
      icon: <Image src={d3} alt={""} className="h-8 w-8" />,
      name: "D3.js",
    },
  ]

  const backendIcons = [
    {
      href: "https://nodejs.org/en",
      icon: <Image src={node} alt={""} className="h-8 w-8" />,
      name: "Node.js",
    },
    {
      href: "https://expressjs.com/",
      icon: <SiExpress className="h-9 w-9 text-zinc-600 dark:text-zinc-400" />,
      name: "Express.js",
    },
    {
      href: "https://www.mongodb.com/",
      icon: <Image src={mongodb} alt={""} className="h-10 w-10" />,
      name: "MongoDB",
    },
    {
      href: "https://www.postgresql.org/",
      icon: <Image src={postgresql} alt={""} className="h-8 w-8" />,
      name: "PostgreSQL",
    },
    {
      href: "https://graphql.org/",
      icon: <Image src={graphql} alt={""} className="h-8 w-8" />,
      name: "GraphQL",
    },
    {
      href: "https://www.prisma.io/",
      icon: <SiPrisma className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />,
      name: "Prisma",
    },
  ]

  const designIcons = [
    {
      href: "https://www.figma.com/",
      icon: <Image src={figma} alt={""} className="h-8 w-8" />,
      name: "Figma",
    },
    {
      href: "https://helpx.adobe.com/xd/get-started.html",
      icon: <Image src={adobexd} alt={""} className="h-8 w-8" />,
      name: "AdobeXD",
    },
    {
      href: "https://git-scm.com/",
      icon: <Image src={git} alt={""} className="h-8 w-8" />,
      name: "Git",
    },
    {
      href: "https://github.com/",
      icon: (
        <AiFillGithub className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
      ),
      name: "GitHub",
    },
    {
      href: "https://about.gitlab.com/",
      icon: <Image src={gitlab} alt={""} className="h-8 w-8" />,
      name: "GitLab",
    },
  ]

  return (
    <>
      <Head>
        <title>Skills - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 sm:mt-28 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Technologies I use, software I love, and other things I
                  recommend.
                </p>
                <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                  The main tools I use to carry out my various projects.
                </p>
              </div>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-500/40">
                  <div className="flex max-w-3xl flex-col space-y-16">
                    <section className="md:grid md:grid-cols-4 md:items-baseline">
                      <div className="group relative flex flex-col items-start md:col-span-3">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <div className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:hidden">
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
                            Whenever I need to implement or improve the UI/UX of
                            an application.
                          </p>
                          <div className="grid grid-cols-5 gap-x-6 gap-y-6 p-2 md:grid-cols-6 lg:grid-cols-7">
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
                      <div className="relative z-10 order-first mt-1 mb-3 hidden items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:block">
                        Frontend techs
                      </div>
                    </section>
                    <section className="md:grid md:grid-cols-4 md:items-baseline">
                      <div className="group relative flex flex-col items-start md:col-span-3">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <div className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:hidden">
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
                            Regarding the management and use of databases,
                            RESTful APIs, authentication, and authorization,
                            here are my tools.
                          </p>
                          <div className="grid grid-cols-5 gap-x-6 gap-y-6 p-2 md:grid-cols-6 lg:grid-cols-7">
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
                      <div className="relative z-10 order-first mt-1 mb-3 hidden items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:block">
                        Backend techs
                      </div>
                    </section>
                    <section className="md:grid md:grid-cols-4 md:items-baseline">
                      <div className="group relative flex flex-col items-start md:col-span-3">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <div className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:hidden">
                          <span
                            className="absolute inset-y-0 left-0 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="h-4 w-0.5 rounded-full bg-zinc-800 dark:bg-zinc-100"></span>
                          </span>
                          Other tools
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            For the design and version control system.
                          </p>
                          <div className="grid grid-cols-5 gap-x-6 gap-y-6 p-2 md:grid-cols-6 lg:grid-cols-7">
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
                      <div className="relative z-10 order-first mt-1 mb-3 hidden items-center text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:block">
                        Other tools
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Projects
