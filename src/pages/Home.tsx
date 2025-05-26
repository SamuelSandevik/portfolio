import FeaturedProjects from "../components/FeatureProject";
import Stack from "../components/Stack";
import useTranslation from "../hooks/UseTranslations";

const Home = () => {
  const { t } = useTranslation("home", "projectData");


   const projectData = [
    {
      id: 1,
      title: t("bookings_title"),
      description: t("bookings_description"),
      image: "/images/bookingsSignUp.png",
      url: "/",
      tech: ["React", "Rust", "Tailwind"],
    },
     {
      id: 3,
      title: t("vinylVibes_title"),
      description: t("vinylVibes_description"),
      image: "/images/vinylvibesdesktop.png",
      url: "",
      tech: ["PHP", "MySQL", "tailwind"],
    },
  ];

  return (
    <>
   <div className="dark:bg-slate-800 flex justify-center overflow-hidden m-0">
      <div className="border-solid border-slate-300 dark:border-t-slate-700 border-t-[150px] border-x-transparent border-l-[150px] border-r-0 border-b-0 md:border-t-[300px] md:border-l-[300px]"></div>
      <div className="border-solid border-t-slate-200 dark:border-t-slate-600 border-t-[150px] border-x-transparent border-r-[350px] border-l-0 border-b-0 md:border-t-[300px] md:border-r-[700px]"></div>
    </div>

    <div className="p-10 md:p-20 border-t-4 border-t-white dark:border-t-slate-800 dark:bg-slate-800 dark:text-white flex flex-col md:flex-row justify-center gap-8 items-center">
      <img
        src="/images/jag.jpg"
        alt="picture of me"
        className="w-[200px] object-contain rounded-md shadow-md"
      />
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold py-4">{t("heroTitle")}</h2>
        <p className="dark:text-slate-400 text-base md:text-lg leading-relaxed">
          {t("heroBody")}
        </p>
      </div>
    </div>


      <Stack />
      <FeaturedProjects projects={projectData} />
    </>
  );
};

export default Home;
