import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router";
import SettingsModal from "./SettingsModal";
import useTranslation from "../hooks/UseTranslations";

const NavBarMenu = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false); 

  const { t } = useTranslation("nav");


  return (
    <>
      <ul className="flex flex-col md:flex-row md:space-x-8 text-lg font-medium text-gray-600 dark:text-gray-300">
        <li className="flex justify-center">
          <Link to="/projects" className="flex gap-2 items-center">
            <p>{t("projects")}</p>
          </Link>
        </li>
        <li className="flex justify-center">
          <Link to="/about" className="flex gap-2 items-center">
            <p>{t("about")}</p>
          </Link>
        </li>
        <li className="flex justify-left items-center">
            <button className="flex flex-row" onClick={() => {setModalOpen(!modalOpen)}}><Cog8ToothIcon className="w-5 h-5" /></button>
        </li>
      </ul>
      <SettingsModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
    </>

  );
};

export default NavBarMenu;
