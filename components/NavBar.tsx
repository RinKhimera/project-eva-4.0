import { IoSunnyOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="h-16 relative flex">
      <div className="flex-1"></div>
      <div>
        <nav>
          <ul className="mr-5 px-8 text-sm font-medium w-auto gap-5 h-10 bg-white/90 shadow-lg shadow-zinc-800/5 backdrop-blur ring-1 ring-zinc-900/5 rounded-full flex items-center justify-center cursor-pointer">
            <li className="hover:text-teal-400 transition">About</li>
            <li className="hover:text-teal-400 transition">Techs</li>
            <li className="hover:text-teal-400 transition">Projects</li>
            <li className="hover:text-teal-400 transition">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="w-12 h-10 text-2xl bg-white/90 shadow-lg shadow-zinc-800/5 backdrop-blur ring-1 ring-zinc-900/5  rounded-full flex items-center justify-center cursor-pointer text-teal-500 hover:text-green-700 transition">
        <IoSunnyOutline />
      </div>
    </div>
  );
};

export default NavBar;
