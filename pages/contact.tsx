import { sendContactForm } from "@/lib/api"
import Head from "next/head"
import { FormEvent, useState } from "react"
import { BiLoaderCircle } from "react-icons/bi"
import { useSelector } from "react-redux"
import { Flip, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { RootState } from "../config/store"

const Contact = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  )

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      await sendContactForm({ name, email, message })
      toast.success("Email sent successfully!", {
        position: "top-center",
        transition: Flip,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkMode ? "dark" : "light",
      })
      setName("")
      setEmail("")
      setMessage("")
    } catch (error: any) {
      const errorMessage = error.message
      console.log(errorMessage)
      toast.error(errorMessage, {
        position: "top-center",
        transition: Flip,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkMode ? "dark" : "light",
      })
    }
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Contact - Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 sm:mt-28 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mb-8 max-w-2xl">
                <p
                  className="text-4xl font-bold tracking-tight text-zinc-800
                               dark:text-zinc-100 sm:text-5xl md:leading-tight"
                >
                  Take a coffee & chat with me.
                </p>
                <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                  Get in touch or shoot me an email directly on
                  dixiades@gmail.com
                </p>
              </div>
              <div
                className="mb-6 rounded p-4 px-4 shadow-lg ring-1 ring-zinc-100
                      dark:bg-zinc-900 dark:ring-zinc-300/20 md:p-8"
              >
                <ToastContainer />
                <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                  <div className="text-zinc-800 dark:text-zinc-100">
                    <p
                      className="text-2xl font-medium text-zinc-800
                                   dark:text-zinc-100"
                    >
                      Personal Details
                    </p>
                    <p className="text-base leading-loose text-zinc-600 dark:text-zinc-400">
                      Please fill out all the fields.
                    </p>
                  </div>

                  <div className="lg:col-span-2">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-4 gap-y-4 text-sm md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label
                            htmlFor="full_name"
                            className="text-zinc-800 dark:text-zinc-100"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                            placeholder="John Doe"
                            value={name}
                            required
                            onChange={(e: any) => setName(e.target.value)}
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label
                            htmlFor="email"
                            className="text-zinc-800 dark:text-zinc-100"
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                            placeholder="email@domain.com"
                            value={email}
                            required
                            onChange={(e: any) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label
                            htmlFor="message"
                            className="text-zinc-800 dark:text-zinc-100"
                          >
                            Message
                          </label>
                          <textarea
                            name="email"
                            id="email"
                            className="mt-1 h-40 w-full rounded border bg-gray-50 px-4"
                            placeholder="Hello, we need a front-end developer who is proficient in Tailwind CSS. How soon can we discuss this?"
                            value={message}
                            required
                            onChange={(e: any) => setMessage(e.target.value)}
                          />
                        </div>

                        <div className="text-right md:col-span-5">
                          <div className="inline-flex items-end">
                            <button
                              type="submit"
                              disabled={isLoading}
                              className="flex w-24 items-center justify-center rounded bg-pink-500 py-2 px-4 font-bold text-white transition hover:bg-pink-700 disabled:bg-gray-700"
                            >
                              {isLoading ? (
                                <BiLoaderCircle className="text-xl" />
                              ) : (
                                "Submit"
                              )}
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
      </div>
    </>
  )
}
export default Contact
