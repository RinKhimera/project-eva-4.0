import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface toggleDarkMode {
  isToggleOn: boolean;
  onToggle: React.MouseEventHandler<HTMLButtonElement>;
}
const NavBar = ({ isToggleOn, onToggle }: toggleDarkMode) => {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1">
                      <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                        <Link href="/" legacyBehavior>
                          <a aria-label="Home" className="pointer-events-auto">
                            <Image
                              src="/avatar.webp"
                              alt=""
                              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                              width={512}
                              height={512}
                              decoding="async"
                              data-nimg="1"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      <div className="pointer-events-auto md:hidden">
                        <button
                          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                          type="button"
                          aria-expanded="false"
                          id="headlessui-popover-button-:R2qb6:"
                        >
                          Menu
                        </button>
                      </div>
                      <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li>
                            <a
                              className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                              href="/about"
                            >
                              About
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/articles"
                            >
                              Skills
                            </a>
                          </li>
                          <li>
                            <a
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/projects"
                            >
                              Projects
                            </a>
                          </li>
                          <li>
                            <a
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/speaking"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="flex justify-end md:flex-1">
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          aria-label="Toggle dark mode"
                          onClick={onToggle}
                          className="group text-2xl text-pink-400 hover:text-pink-600 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                        >
                          <IoSunnyOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
