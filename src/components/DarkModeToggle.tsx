import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-5 flex items-center justify-between p-1 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-3" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <MoonIcon className="w-4 h-4 text-blue-500 absolute inset-0 m-auto" />
        ) : (
          <SunIcon className="w-4 h-4 text-yellow-300 absolute inset-0 m-auto" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
