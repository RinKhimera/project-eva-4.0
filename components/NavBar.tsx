import { setSystemDarkMode, toggleDarkMode } from "@/hooks/darkModeReducer"
import type { RootState } from "@/pages/store"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { BsMoonStars } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { IoSunnyOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"

const Navigation = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  )
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleDarkMode())
  }

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    dispatch(setSystemDarkMode(prefersDarkMode))
  }, [dispatch])

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <div className="top-[var(--header-top,theme(spacing.6))] w-full sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                      <Link href="/" legacyBehavior>
                        <a aria-label="Home" className="pointer-events-auto">
                          <Image
                            src="/assets/images/avatar.webp"
                            alt=""
                            className="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
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
                            className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80"
                            onClick={toggleMenu}
                          ></div>
                          <div
                            className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
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
                          <Link
                            href="/about"
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/about"
                                ? "text-pink-600 dark:text-pink-500"
                                : "hover:text-pink-600 dark:hover:text-pink-500"
                            }`}
                          >
                            About
                            {pathname === "/about" && (
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0"></span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/skills"
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/skills"
                                ? "text-pink-600 dark:text-pink-500"
                                : "hover:text-pink-600 dark:hover:text-pink-500"
                            }`}
                          >
                            Skills
                            {pathname === "/skills" && (
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0"></span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/projects"
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/projects"
                                ? "text-pink-600 dark:text-pink-500"
                                : "hover:text-pink-600 dark:hover:text-pink-500"
                            }`}
                          >
                            Projects
                            {pathname === "/projects" && (
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0"></span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/contact"
                                ? "text-pink-600 dark:text-pink-500"
                                : "hover:text-pink-600 dark:hover:text-pink-500"
                            }`}
                          >
                            Contact
                            {pathname === "/contact" && (
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0"></span>
                            )}
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
                        className="group  rounded-full bg-white/90 px-3 py-2 text-pink-400 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-pink-600 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        {isDarkMode ? (
                          <BsMoonStars className="m-0.5 text-lg" />
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
  )
}

export default Navigation
