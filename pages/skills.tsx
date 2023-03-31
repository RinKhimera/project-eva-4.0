import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const HomeMenu = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

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
          <main>
            <div className="sm:px-8 mt-16 sm:mt-32">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="max-w-2xl">
                      <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-tight">
                        Things I&apos;ve made trying to put my dent in the
                        universe.
                      </p>
                      <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        I&apos;ve worked on tons of little projects over the
                        years but these are the ones that I&apos;m most proud
                        of. Many of them are open-source, so if you see
                        something that piques your interest, check out the code
                        and contribute if you have ideas for how it can be
                        improved.
                      </p>
                      <div className="mt-16 sm:mt-20"></div>
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
