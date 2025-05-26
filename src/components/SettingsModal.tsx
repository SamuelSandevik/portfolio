import { XMarkIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "../context/LanguageContext";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = ({ isOpen, onClose }: Props) => {
  const { language, setLanguage } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition">
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Settings</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <DarkModeToggle />
          </div>

          <div className="flex items-center justify-between">
            <span>Language</span>
            <div className="space-x-2">
              <button
                onClick={() => setLanguage("swe")}
                className={`px-3 py-1 rounded-md ${
                  language === "swe"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                🇸🇪 Svenska
              </button>
              <button
                onClick={() => setLanguage("eng")}
                className={`px-3 py-1 rounded-md ${
                  language === "eng"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
