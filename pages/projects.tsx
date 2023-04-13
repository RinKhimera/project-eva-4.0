import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const HomeMenu = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const projects = [
    {
      name: "Modern UI/UX Webpage",
      imageSrc: "/projects/project1.png",
      imageAlt: "Project Image",
      description:
        "A modern landing page for a startup company with hero section, CTA button, testimonials and navigation links.",
      demoLink: "https://rinkhimera.github.io/manage-landing-page/",
      githubLink: "https://github.com/RinKhimera/manage-landing-page",
    },
    {
      name: "Project 2",
      imageSrc: "/projects/350x150.png",
      imageAlt: "Project Image",
      description:
        "This is a short description of Project 2. Lorem ipsum dolor sit amet, cnsectetur adipiscing elit.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      name: "Random Quote Machine",
      imageSrc: "/projects/project3.png",
      imageAlt: "Project Image",
      description:
        "A web-based application random quote machine that generates and displays random quotes to the user.",
      demoLink: "https://rinkhimera.github.io/quotes-generator/",
      githubLink: "https://github.com/RinKhimera/quotes-generator",
    },
    {
      name: "JavaScript Calculator",
      imageSrc: "/projects/project4.png",
      imageAlt: "Project Image",
      description:
        "Calculator app built with JavaScript to perform simple operations and integrated with a dark mode.",
      demoLink: "https://rinkhimera.github.io/js-calculator-v2.0/",
      githubLink: "https://github.com/RinKhimera/js-calculator-v2.0",
    },
    {
      name: "Todo List App",
      imageSrc: "/projects/project5.png",
      imageAlt: "Project Image",
      description:
        "An application that displays a list of tasks and provides the ability to add, delete, and update tasks.",
      demoLink: "https://rinkhimera.github.io/todo-list-app/",
      githubLink: "https://github.com/RinKhimera/todo-list-app",
    },
    // add more projects here
  ];

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Projects - Samuel Pokam</title>
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
            skills={false}
            projects={true}
            contact={false}
          />
          <main>
            <div className="sm:px-8 mt-16 sm:mt-28">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="max-w-2xl">
                      <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-tight">
                        Things I&apos;ve made trying to put my dent in the
                        universe.
                      </p>
                      <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                        I&apos;ve worked on tons of little projects over the
                        years but these are the ones that I&apos;m most proud
                        of. Many of them are open-source, so if you see
                        something that piques your interest, check out the code
                        and contribute if you have ideas for how it can be
                        improved.
                      </p>
                    </div>
                    <div className="mt-8 sm:mt-10">
                      <ul
                        role="list"
                        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
                      >
                        {projects.map((project) => (
                          <li
                            key={project.name}
                            className="group relative flex flex-col text-center p-5 rounded-2xl transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                          >
                            <div>
                              <Image
                                className="rounded-lg mt-5"
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                width={1920}
                                height={1080}
                              />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              {project.name}
                            </h2>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              {project.description}
                            </p>
                            <div className="w-full py-4 flex justify-evenly">
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                  <AiFillGithub className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
                                </div>
                              </a>
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                  <AiFillEye className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
                                </div>
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-20"></div>
            <div className="sm:px-8 mt-24 md:mt-28"></div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
