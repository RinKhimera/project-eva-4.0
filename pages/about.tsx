import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useSelector } from "react-redux";
import type { RootState } from "@/pages/store";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const About = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative">
          <NavBar />
          <div className="sm:px-8 mt-16 sm:mt-32">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                      <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                          src="/portrait.webp"
                          alt=""
                          sizes="(min-width: 1024px) 32rem, 20rem"
                          width={800}
                          height={800}
                          decoding="async"
                          data-nimg="1"
                          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Hi, I&apos;m Samuel Pokam.
                        <br /> I am a{" "}
                        <span className="text-pink-600">
                          full-stack developer,
                        </span>{" "}
                        with a particular interest in making things simple and
                        automating daily tasks.
                      </h1>
                      <div className="mt-6 space-y-7 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                        <p>
                          I bring together my expertise in both front-end and
                          back-end technologies to create dynamic and
                          user-friendly web applications. With a passion for
                          building scalable and efficient systems, I enjoy
                          solving complex problems and implementing innovative
                          solutions that make a difference for businesses and
                          end-users alike.
                        </p>
                        <p>
                          In my front-end work, I focus on crafting intuitive
                          and visually appealing interfaces that provide
                          seamless user experiences. I am skilled in HTML, CSS,
                          and JavaScript frameworks such as Next.js and React
                          Native, which allow me to build responsive, dynamic,
                          and mobile-friendly web pages. I also pay attention to
                          accessibility and usability standards to ensure that
                          my designs are inclusive and easy to navigate.
                        </p>
                        <p>
                          On the back-end side, I leverage my expertise in
                          technologies such as Node.js, Express.js, and MongoDB
                          to create scalable and efficient web applications. I
                          have experience in building RESTful APIs and working
                          with databases to store and retrieve data. I also pay
                          attention to security and best practices to ensure
                          that my applications are safe from potential attacks.
                          With a focus on creating well-structured and
                          maintainable code, I strive to create back-end systems
                          that enable seamless communication with the front-end
                          and provide a smooth user experience.
                        </p>
                      </div>
                    </div>
                    <div className="lg:pl-20">
                      <ul role="list">
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
                            href="https://github.com/RinKhimera"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                              ></path>
                            </svg>
                            <span className="ml-4">Follow on GitHub</span>
                          </a>
                        </li>
                        <li className="mt-4 flex">
                          <a
                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
                            href="https://www.linkedin.com/in/samuel-pokam/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600"
                            >
                              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                            </svg>
                            <span className="ml-4">Follow on LinkedIn</span>
                          </a>
                        </li>
                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                          <a
                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
                            href="mailto:dixiades@gmail.com"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                              ></path>
                            </svg>
                            <span className="ml-4">dixiades@gmail.com</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
