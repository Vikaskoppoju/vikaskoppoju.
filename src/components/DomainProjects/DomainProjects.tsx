import { motion } from "framer-motion";

interface Project {
  id: number;
  domain: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const domainProjects: Project[] = [
  {
    id: 1,
    domain: "WordPress Portfolio",
    title: "Prof. Khalid ul Rehman",
    description:
      "WordPress-based responsive portfolio designed for a professor from Saudi Arabia, highlighting research, publications, and achievements.",
    image: "/assets/images/khalid.png",
    link: "https://khalidulrehman.com", // replace with actual URL
  },
  {
    id: 2,
    domain: "WordPress Portfolio",
    title: "Dr. Ibrar Ahmed",
    description:
      "Professional WordPress portfolio created for a Saudi-based academic, emphasizing scholarly contributions and academic expertise.",
    image: "/assets/images/ibrar.png",
    link: "https://dribrarahmed.com", // replace with actual URL
  },
];

export default function DomainProjects() {
  return (
    <section className="py-20 text-white relative">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
        >
          Freelance Projects
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {domainProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-58 object-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <span className="text-sm text-indigo-400 font-semibold uppercase tracking-wide">
                  {project.domain}
                </span>
                <h3 className="text-2xl font-semibold mt-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition duration-300"
                >
                  Check Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
