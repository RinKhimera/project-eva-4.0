import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="mt-20">
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <Link href="/about" legacyBehavior>
                        <a className="transition hover:text-pink-600 dark:hover:text-pink-500">
                          About
                        </a>
                      </Link>
                      <Link href="/skills" legacyBehavior>
                        <a className="transition hover:text-pink-600 dark:hover:text-pink-500">
                          Skills
                        </a>
                      </Link>
                      <Link href="/projects" legacyBehavior>
                        <a className="transition hover:text-pink-600 dark:hover:text-pink-500">
                          Projects
                        </a>
                      </Link>
                      <Link href="/contact" legacyBehavior>
                        <a className="transition hover:text-pink-600 dark:hover:text-pink-500">
                          Contact
                        </a>
                      </Link>
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      © 2023 Samuel Pokam. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
