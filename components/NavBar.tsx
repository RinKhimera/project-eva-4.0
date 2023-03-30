import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/redux/darkModeReducer";
import type { RootState } from "@/pages/store";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
                          className="group flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                          type="button"
                          onClick={toggleMenu}
                        >
                          Menu
                          <IoIosArrowDown />
                        </button>
                        {isOpen && (
                          <div>
                            <div
                              className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
                              onClick={toggleMenu}
                            ></div>
                            <div
                              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
                              tabIndex={-1}
                            >
                              <div className="flex flex-row-reverse items-center justify-between">
                                <button
                                  aria-label="Close menu"
                                  className="-m-1 p-1"
                                  type="button"
                                  onClick={toggleMenu}
                                  tabIndex={0}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                  >
                                    <path
                                      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </button>
                                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                  Navigation
                                </h2>
                              </div>
                              <nav className="mt-6">
                                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                  <li>
                                    <Link href="/about" legacyBehavior>
                                      <a className="block py-2">About</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/skills" legacyBehavior>
                                      <a className="block py-2">
                                        Technologies & Skills
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/projects" legacyBehavior>
                                      <a className="block py-2">Projects</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/contact" legacyBehavior>
                                      <a className="block py-2">Contact</a>
                                    </Link>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}
                      </div>
                      <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li>
                            <Link href="/about" legacyBehavior>
                              <a className="relative block px-3 py-2 transition text-pink-600 dark:text-pink-600">
                                About
                                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0"></span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/skills" legacyBehavior>
                              <a className="relative block px-3 py-2 transition hover:text-pink-600 dark:hover:text-pink-600">
                                Skills
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/projects" legacyBehavior>
                              <a className="relative block px-3 py-2 transition hover:text-pink-600 dark:hover:text-pink-600">
                                Projects
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact" legacyBehavior>
                              <a className="relative block px-3 py-2 transition hover:text-pink-600 dark:hover:text-pink-600">
                                Contact
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="flex justify-end md:flex-1">
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          aria-label="Toggle dark mode"
                          onClick={handleToggle}
                          className="group  text-pink-400 hover:text-pink-600 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                        >
                          {isDarkMode ? (
                            <BsMoonStars className="text-lg m-0.5" />
                          ) : (
                            <IoSunnyOutline className="text-2xl" />
                          )}
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
