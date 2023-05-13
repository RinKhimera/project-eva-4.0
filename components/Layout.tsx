import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { RootState } from "@/pages/store"
import { useSelector } from "react-redux"

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  )
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
