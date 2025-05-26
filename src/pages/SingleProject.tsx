import { useParams } from "react-router";
import useTranslation from "../hooks/UseTranslations";

const SingleProject = () => {
  const { t } = useTranslation("projects", "projectData");
  const { projectId } = useParams();

  const projects = [
    {
      id: "1",
      title: t("bookings_title"),
      description: t("bookings_description"),
      phoneImage: "/images/bookingsSignUp.png",
      computerImage: "",
      url: "",
      tech: ["React", "Rust", "Tailwind"],  
      features: [
        "Login and register with password or email",
        "Create booking systems",
        "Make custom appointments",
        "Manage users and bookings",
        "Create custom services",
        "Handle payments",
        "PostgreSQL database",
        "Dockerized",
        "email verification",
        "WIP",
        ],
    },
    {
      id: "2",
      title: t("sillyStocks_title"),
      description: t("sillyStocks_description"),
      phoneImage: "/images/SillyMobile.webp",
      computerImage: "/images/SillyDesk.webp",
      url: "https://sillystocks.netlify.app",
      tech: ["React", "Node", "API", "SCSS"],  
      features: [
        "MERN stack",
        "Sign up and sign in",
        "Browse stocks, news, crypto, markets, categories",
        "Save stocks to favorites",
        "Frontend hosted",
        "Api workaround with mock data",
        ],
    },
    {
      id: "3",
      title: t("vinylVibes_title"),
      description: t("vinylVibes_description"),
       phoneImage: "/images/vinylvibesmobile.png",
      computerImage: "/images/vinylvibesdesktop.png",
      url: "",
      tech: ["PHP", "MySQL", "Tailwind"],
      features: [
        "Sign up and sign in",
        "Browse products",
        "Filter and search for products",
        "Add products to cart",
        "Checkout and handle payments",
        "Responsive design",
        "Normalized database structure",
        "Migrations",
        ],
    },
    {
      id: "4",
      title: t("games_title"),
      description: t("games_description"),
       phoneImage: "/images/C-breakout.png",
      computerImage: "/images/JS-Snake.png",
      url: "",
      tech: ["JS", "Canvas", "C#", "Windows Forms"],
      features: [
        "Snake made in JavaScript and C#",
        "Breakout made in C# using Windows Forms",
        "Battleships made in C#",
        "21 made in C#",
        ],
    },
  ];

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="bg-slate-100 dark:bg-slate-800 min-h-screen flex items-center justify-center px-6">
        <p className="text-slate-800 dark:text-slate-200 text-xl">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen py-16 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-80 justify-center bg-white gap-6 p-6">
          <img
            src={project.phoneImage}
            alt={`${project.title} phone`}
            className="rounded-lg"
            loading="lazy"
          />
          <img
            src={project.computerImage}
            alt={`${project.title} computer`}
            className="rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {project.title}
          </h1>
          <p className="text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>

          <div className="flex flex-col gap-3 mb-6">
            {project.features!.map((feature, i) => (
              <span
                key={i}
                className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-4 py-1 text-sm"
              >
                - {feature}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((techItem, i) => (
              <span
                key={i}
                className="bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-full px-4 py-1 text-sm"
              >
                {techItem}
              </span>
            ))}
          </div>

            {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-800 dark:bg-slate-300 text-slate-100 dark:text-slate-900 font-semibold rounded hover:bg-slate-900 dark:hover:bg-slate-400 transition"
          >
            Visit Project
          </a>)}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
