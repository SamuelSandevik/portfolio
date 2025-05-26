import { useLanguage } from "../context/LanguageContext";
import navTranslations from "../translations/components/NavBar";
import homeTranslations from "../translations/pages/home";
import projectDataTranslations from "../assets/projectsData";
import projectTranslations from "../translations/pages/projects";
import aboutTranslations from "../translations/pages/about";

const translationFiles: Record<string, any> = {
  home: homeTranslations,
  nav: navTranslations,
  projectData: projectDataTranslations,
  projects: projectTranslations,
  about: aboutTranslations
};

const useTranslation = (...categories: (keyof typeof translationFiles)[]) => {
  const { language } = useLanguage();

  
  const mergedTranslations: Record<string, any> = categories.reduce((acc, category) => {
    return { ...acc, ...(translationFiles[category]?.[language] || {}) };
  }, {});

  const t = (key: string) => mergedTranslations[key] || key;

  return { t };
};

export default useTranslation;
