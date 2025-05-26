export default function Stack() {
  const techStack = [
    { name: 'HTML', color: 'text-orange-500' },
    { name: 'CSS', color: 'text-blue-500' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'TypeScript', color: 'text-blue-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'PHP', color: 'text-purple-500' },
    { name: 'C#', color: 'text-blue-600' },
    { name: 'Python', color: 'text-green-500' },
    { name: 'Express', color: 'text-gray-300' },
    { name: 'MongoDB', color: 'text-green-600' },
    { name: 'SQL', color: 'text-blue-300' },
    { name: 'Tailwind CSS', color: 'text-teal-400' },
    { name: 'Git', color: 'text-red-400' },
  ];

  return (
    <section className="py-12 dark:bg-slate-800 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-4 py-2 rounded-full border dark:border-slate-700 border-gray-100 ${tech.color} dark:bg-slate-900 text-sm font-medium shadow-md hover:scale-105 transition-transform`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
