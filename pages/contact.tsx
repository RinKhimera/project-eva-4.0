import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { sendContactForm } from "@/lib/api"
import Head from "next/head"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "./store"

const Projects = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  )

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendContactForm({ name, email, message })
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Skills - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div
              className="w-full bg-white ring-1 ring-zinc-100
                      dark:bg-zinc-900 dark:ring-zinc-300/20"
            ></div>
          </div>
        </div>
        <div className="relative">
          <NavBar
            about={false}
            skills={false}
            projects={false}
            contact={true}
          />
          <main className="mt-16 sm:mt-28 sm:px-8">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <p
                      className="text-4xl font-bold tracking-tight text-zinc-800
                               dark:text-zinc-100 sm:text-5xl md:leading-tight"
                    >
                      Here are some technologies I&apos;m familiar with.
                    </p>
                    <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                      The main tools I use to carry out my various projects.
                    </p>
                  </div>
                  <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
                    <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="text-lg font-medium">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div className="lg:col-span-2">
                        <form action="#" method="POST" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                            <div className="md:col-span-5">
                              <label htmlFor="full_name">Full Name</label>
                              <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                              />
                            </div>

                            <div className="md:col-span-5">
                              <label htmlFor="email">Email Address</label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                placeholder="email@domain.com"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                              />
                            </div>

                            <div className="md:col-span-5">
                              <label htmlFor="message">Message</label>
                              <textarea
                                name="email"
                                id="email"
                                className="mt-1 h-40 w-full rounded border bg-gray-50 px-4"
                                placeholder="Enter your comment here"
                                value={message}
                                onChange={(e: any) =>
                                  setMessage(e.target.value)
                                }
                              />
                            </div>

                            <div className="text-right md:col-span-5">
                              <div className="inline-flex items-end">
                                <button
                                  type="submit"
                                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
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
  )
}
export default Projects
