import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router";
import SettingsModal from "./SettingsModal";
import useTranslation from "../hooks/UseTranslations";

const NavBarMenu = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation("nav");

  return (
    <>
      <ul
        className={`${
          isMobile
            ? "flex flex-col space-y-6 items-start pt-10 text-left"
            : "flex flex-row space-x-6 items-center justify-center"
        } text-base font-medium text-gray-700 dark:text-gray-300`}
      >
        <li>
          <Link to="/projects" className="hover:text-blue-500 transition">
            {t("projects")}
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500 transition">
            {t("about")}
          </Link>
        </li>
        {/* Only show in desktop */}
        {!isMobile && (
          <li>
            <button
              onClick={() => setModalOpen(true)}
              className="p-1 hover:text-blue-500 transition"
              aria-label="Settings"
            >
              <Cog8ToothIcon className="w-5 h-5" />
            </button>
          </li>
        )}
      </ul>

      {/* Only show settings button in mobile below menu */}
      {isMobile && (
        <div className="mt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <Cog8ToothIcon className="w-5 h-5" />
            {t("settings")}
          </button>
        </div>
      )}

      <SettingsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default NavBarMenu;
