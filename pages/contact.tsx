import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useState } from "react";

const Projects = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
            skills={false}
            projects={false}
            contact={true}
          />
          <main className="sm:px-8 mt-16 sm:mt-28">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-tight">
                      Here are some technologies I&apos;m familiar with.
                    </p>
                    <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                      The main tools I use to carry out my various projects.
                    </p>
                  </div>
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div className="lg:col-span-2">
                        <form action="#" method="POST">
                          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-5">
                              <label htmlFor="full_name">Full Name</label>
                              <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                                className="h-40 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Enter your comment here"
                                value={message}
                                onChange={(e: any) =>
                                  setMessage(e.target.value)
                                }
                              />
                            </div>

                            <div className="md:col-span-5 text-right">
                              <div className="inline-flex items-end">
                                <button
                                  type="submit"
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
  );
};
export default Projects;
