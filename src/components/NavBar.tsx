import { useState } from "react";
import NavBarMenu from "./NavBarmenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-gray-800 dark:text-gray-200">
          <div className="flex items-baseline gap-2">
            <p className="text-xl font-bold leading-none">
              SAMUEL SANDEVIK
            </p>
            <span className="text-xs hidden sm:inline">FULLSTACK DEVELOPER</span>
          </div>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-1 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        <div className="hidden md:flex">
          <NavBarMenu />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-6 animate-fade-in-down">
          <NavBarMenu isMobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
