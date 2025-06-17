import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, DatabaseZap, Globe } from 'lucide-react';
import { BarChart3 } from 'lucide-react'; // For Power BI icon substitute

const skills = [
  { icon: <Code2 className="text-blue-400 w-8 h-8" />, name: 'Frontend Development' },
  { icon: <MonitorSmartphone className="text-green-400 w-8 h-8" />, name: 'Responsive Design' },
  { icon: <Globe className="text-orange-400 w-8 h-8" />, name: 'WordPress Website' },
  { icon: <DatabaseZap className="text-purple-400 w-8 h-8" />, name: 'Backend Development' },
  { icon: <BarChart3 className="text-yellow-400 w-8 h-8" />, name: 'Power BI Analyst' },
];


export default function SkillsShowcase() {
  return (
    <section className="relative py-20 bg-[#060C1A]" id='skill'>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-yellow-400 mb-10"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <h4 className="mt-4 text-white text-lg font-semibold">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
