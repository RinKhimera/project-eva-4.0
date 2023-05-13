import Head from "next/head"
import Image from "next/image"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"

const About = () => {
  return (
    <>
      <Head>
        <title>About - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 sm:mt-28 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <Image
                      src="/assets/images/portrait.webp"
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
                      I started playing with computers when I was 10 years old.
                      Since then I have been tinkering with all sorts of
                      technologies that in some way or another led me to work on
                      photo and video editing, design, and ultimately to web
                      development.
                    </p>
                    <p>
                      As a web developer, I enjoy bridging the gap between
                      engineering and design — combining my technical knowledge
                      with my keen eye for design to create a beautiful product.
                      My goal is to always build applications that are scalable
                      and efficient under the hood while providing engaging,
                      pixel-perfect user experiences.
                    </p>
                    <p>
                      <b>When I&apos;m not in front of my coding screen, </b>
                      I&apos;m probably watching an anime, learning new stuff,
                      or playing video games.
                    </p>
                  </div>
                  <div>
                    <a
                      className="text-md group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                      href="/docs/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View my resume
                      <HiOutlineExternalLink />
                    </a>
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
                        <AiFillGithub className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
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
                        <AiFillLinkedin className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
                        <span className="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
                        href="mailto:dixiades@gmail.com"
                      >
                        <AiFillMail className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
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
    </>
  )
}

export default About
