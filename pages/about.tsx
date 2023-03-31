import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import type { RootState } from "@/pages/store";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const About = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>About - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative">
          <NavBar
            about={true}
            skills={false}
            projects={false}
            contact={false}
          />
          <main className="sm:px-8 mt-16 sm:mt-32">
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
                          loading="lazy"
                          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
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
                            <AiFillGithub className="h-6 w-6 -mt-0.5 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
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
                            <AiFillLinkedin className="h-6 w-6 -mt-0.5 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
                            <span className="ml-4">Follow on LinkedIn</span>
                          </a>
                        </li>
                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                          <a
                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
                            href="mailto:dixiades@gmail.com"
                          >
                            <AiFillMail className="h-6 w-6 -mt-0.5 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
                            <span className="ml-4">dixiades@gmail.com</span>
                          </a>
                        </li>
                      </ul>
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

export default About;
