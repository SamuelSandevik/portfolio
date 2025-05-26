import useTranslation from "../hooks/UseTranslations";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
};

type FeaturedProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const {t} = useTranslation("home");
  return (
    <section className="py-16 dark:bg-slate-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 h-48 bg-gray-500 w-full object-cover"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="dark:bg-slate-800 text-xs px-2 py-1 rounded-full text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <a
                  href={"projects/" + project.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-teal-400 hover:underline"
                >
                  {t("viewProject")} →
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
