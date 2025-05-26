import useTranslation from "../hooks/UseTranslations";

const Projects = () => {
  const { t } = useTranslation("about");

  return (
    <div className="bg-slate-100 dark:bg-slate-800 flex items-center min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center gap-6">
          <img
            src="/public/images/image.png"
            alt="On boat"
            className="w-32 h-32 object-cover rounded-lg border border-slate-300 dark:border-slate-600"
          />
          <img
            src="/public/images/image.jpg"
            alt="In Köln"
            className="w-32 h-32 object-cover rounded-lg border border-slate-300 dark:border-slate-600"
          />
          <img
            src="/public/images/image(4).jpg"
            alt="In Greece"
            className="w-32 h-32 object-cover rounded-lg border border-slate-300 dark:border-slate-600"
          />
        </div>

        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
          {t("about")}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {t("aboutDesc")}
        </p>
      </div>
    </div>
  );
};

export default Projects;
