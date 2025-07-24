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
    domain: "Data Visualization",
    title: "Investment Strategy Recommendation",
    description:
      "This Power BI dashboard provides a comprehensive analysis of investment strategies, showcasing key metrics like ROI, risk levels, and market trends. It helps investors make informed decisions by visualizing complex data in an intuitive format.",
    image: "/assets/images/powerbi1.png",
    link: "https://drkhalidhakeem.com/",
  },
  {
    id: 2,
    domain: "Data Visualization",
    title: "Sales Intelligence Dashboard",
    description:
      " The dashboard gives a clear snapshot of sales performance, product and regional trends, and customer preferences. These insights can help in targeted marketing, stock planning, and store-level strategy improvements. With more data over time, deeper trends and growth metrics can be further explored",
    image: "/assets/images/powerbi2.png",
    link: "https://learnwithibrar.com/",
  },
  {
    id: 3,
    domain: "Machine Learning",
    title: "Disease Prediction using ML",
    description:
      "Developed a web app using Random Forest Algorithm for symptom-based predictions. Integrated with Django backend and built using HTML, CSS, JavaScript. Ensured accuracy with 75/25 train-test split.",
    image: "/assets/images/random.jpg",
    link: "https://github.com/Vikaskoppoju/DiseaseML",
  },
  {
    id: 4,
    domain: "Deep Learning",
    title: "Deep Fake Detection",
    description:
      "Built a Django-based app for uploading deepfake videos and detecting fakes with confidence scores. Trained on celeb-df, DFD Challenge, and FF++ datasets using ResNeXt + LSTM architecture.",
    image: "/assets/images/random.jpg",
    link: "https://github.com/Vikaskoppoju/deepfake",
  },
  {
    id: 5,
    domain: "UI/UX Redesign",
    title: "College Website Redesign",
    description:
      "Led a team of 5 in revamping the official college website with improved UI/UX using HTML, CSS, Bootstrap, and JavaScript for a modern and responsive experience.",
    image: "/assets/images/vasavi.png",
    link: "https://srivasaviengg.ac.in/",
  },
];


export default function DomainProjects() {
  return (
    <section className="py-20 text-white relative" id="work">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
        >
          Real Time Projects
        </motion.h2>

        {/* Cards Grid */}
        {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
  {project.description.length > 100
    ? `${project.description.slice(0, 100)}...`
    : project.description}
</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Check Out
        </a>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
