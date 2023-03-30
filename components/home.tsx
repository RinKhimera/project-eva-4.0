import NavBar from "@/components/NavBar";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HomeMenu = () => {
  return (
    <div className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative">
        <NavBar />
        <div className="">
          <div className="sm:px-8 mt-9 pt-20 ">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      Software engineer, web developer, and JavaScript
                      enthusiast
                    </h1>
                    <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                      I&apos;m Samuel, a full-stack developer passionate about
                      creating high-quality and innovative digital solutions.
                      With expertise in various programming languages,
                      frameworks, and design principles, I am committed to
                      delivering responsive, user-friendly, and aesthetically
                      pleasing websites.
                    </p>
                    <div className="mt-6  ">
                      <Link href="/about" legacyBehavior>
                        <a className="hover:underline flex items-center text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                          Let me introduce myself{" "}
                          <MdOutlineKeyboardDoubleArrowRight className="ml-4 -mb-1" />
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 flex gap-6">
                      <a
                        href="https://www.linkedin.com/in/samuel-pokam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group -m-1 p-1"
                      >
                        <AiFillLinkedin className="h-6 w-6 fill-zinc-500 transition group-hover:fill-pink-600 dark:fill-zinc-400 dark:group-hover:fill-pink-600" />
                      </a>
                      <a
                        href="https://github.com/RinKhimera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group -m-1 p-1"
                      >
                        <AiFillGithub className="h-6 w-6 fill-zinc-500 transition group-hover:fill-pink-600 dark:fill-zinc-400 dark:group-hover:fill-pink-600" />
                      </a>
                      <a
                        href="mailto:dixiades@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group -m-1 p-1"
                      >
                        <AiFillMail className="h-6 w-6 fill-zinc-500 transition group-hover:fill-pink-600 dark:fill-zinc-400 dark:group-hover:fill-pink-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20"></div>
          <div className="sm:px-8 mt-24 md:mt-28"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
