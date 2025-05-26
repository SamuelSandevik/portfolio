import FeaturedProjects from "../components/FeatureProject";
import useTranslation from "../hooks/UseTranslations";

const Projects = () => {
  const { t } = useTranslation("projects", "projectData");

  const projectData = [
    {
      id: 1,
      title: t("bookings_title"),
      description: t("bookings_description"),
      image: "/src/assets/images/bookingsSignUp.png",
      url: "/",
      tech: ["React", "Rust", "Tailwind"],
    },
    {
      id: 2,
      title: t("sillyStocks_title"),
      description: t("sillyStocks_description"),
      image: "/src/assets/images/logo-white-1200x1200.png",
      url: "sillystocks.netlify.app",
      tech: ["React", "Node", "API", "SCSS"],
    },
    {
      id: 3,
      title: t("vinylVibes_title"),
      description: t("vinylVibes_description"),
      image: "/src/assets/images/vinylvibesdesktop.png",
      url: "",
      tech: ["PHP", "MySQL", "Tailwind"],
    },
    {
      id: 4,
      title: t("games_title"),
      description: t("games_description"),
      image: "/src/assets/images/JS-Snake.png",
      url: "sillystocks.netlify.app",
      tech: ["JS", "Canvas", "C#", "Windows Forms"],
    },
  ];

  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          {t("projects")}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {t("description")}
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <FeaturedProjects projects={projectData} />
      </div>
    </div>
  );
};

export default Projects;
