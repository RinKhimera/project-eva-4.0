import { useState } from "react";
import NavBar from "@/components/NavBar";
import About from "@/components/About";

interface DarkMode {
  isDarkMode: boolean;
  setDarkMode: React.MouseEventHandler<HTMLButtonElement>;
}

const App = ({ isDarkMode, setDarkMode }: DarkMode) => {
  return (
    <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative">
        <NavBar isToggleOn={isDarkMode} onToggle={setDarkMode} />
        <About />
      </div>
    </div>
  );
};

export default App;
