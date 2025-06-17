import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpenCheck } from 'lucide-react';

const educationData = [
  {
    year: '2020 - 2024',
    title: 'B.Tech - Computer Science Engineering',
    institution: 'Sri Vasavi Engineering College, Tadepalligudem',
    grade: 'CGPA: 8.18',
    icon: <GraduationCap className="text-yellow-400 w-6 h-6" />,
  },
  {
    year: '2018 - 2020',
    title: 'Intermediate - MPC',
    institution: 'Tirumala Junior College, Bhimavaram',
    grade: 'CGPA: 9.09',
    icon: <BookOpenCheck className="text-yellow-400 w-6 h-6" />,
  },
  {
    year: '2017 - 2018',
    title: 'SSC',
    institution: 'Sri Chaitanya EM School, Tadepalligudem',
    grade: 'CGPA: 8.80',
    icon: <School className="text-yellow-400 w-6 h-6" />,
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative py-20 z-10 bg-[#060C1A]" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-400 to-purple-500"
        >
          Education
        </motion.h2>

        {/* Horizontal Timeline (Desktop) */}
        <div className="hidden md:flex items-center justify-between relative">
          <div className="absolute top-1/2 w-full border-t-2 border-yellow-400 rounded-full transform -translate-y-1/2 z-0" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-transparent hover:scale-105 transition-transform duration-300 text-center z-10"
            >
              <div className="flex flex-col items-center gap-2 p-4">
                <div className="mb-2">{edu.icon}</div>
                <h3 className="text-yellow-400 font-semibold">{edu.year}</h3>
                <h4 className="font-semibold text-white text-lg">{edu.title}</h4>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <p className="text-gray-400 text-xs">{edu.grade}</p>
              </div>
              <div className="w-4 h-4 bg-yellow-400 border-4 border-white dark:border-[#0C1222] rounded-full absolute left-1/2 transform -translate-x-1/2 bottom-0 z-20" />
            </motion.div>
          ))}
        </div>

        {/* Vertical Timeline (Mobile) */}
        <div className="md:hidden relative mt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-400 z-0" />

          <div className="space-y-14 relative z-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-2">{edu.icon}</div>
                <div className="bg-transparent p-4 rounded-xl">
                  <h3 className="text-yellow-400 font-semibold">{edu.year}</h3>
                  <h4 className="font-semibold text-white text-lg">{edu.title}</h4>
                  <p className="text-gray-300 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-xs">{edu.grade}</p>
                </div>
                <div className="w-4 h-4 bg-yellow-400 border-4 border-white dark:border-[#0C1222] rounded-full absolute left-1/2 transform -translate-x-1/2 z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
