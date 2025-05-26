import { useState } from "react";
import NavBarMenu from "./NavBarmenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-auto p-3 shadow-md bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center">
        <a href="/">
        <div className="flex text-gray-800 dark:text-gray-200 items-baseline gap-2">
          <p className="flex items-center text-xl first-letter:text-6xl font-bold ">
           SAMUEL SANDEVIK
          </p>
          <div className="text-xs">FULLSTACK DEVELOPER</div>
        </div>
        </a>

        <button
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`h-1 w-10 rounded-full bg-gray-800 dark:bg-gray-200 my-2 transform transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-3" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-10 rounded-full bg-gray-800 dark:bg-gray-200 my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-1 w-10 rounded-full bg-gray-800 dark:bg-gray-200 my-2 transform transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></div>
        </button>

        <div className="hidden md:flex">
          <NavBarMenu />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <NavBarMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
