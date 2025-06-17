import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Disease Prediction using ML',
    description:
      'Developed a web app using Random Forest Algorithm for symptom-based predictions. Integrated with Django backend and built using HTML, CSS, JavaScript. Ensured accuracy with 75/25 train-test split.',
    image: '/assets/images/random.jpg',
    link: 'https://github.com/Vikaskoppoju/DiseaseML',
  },
  {
    id: 2,
    title: 'Deep Fake Detection',
    description:
      'Built a Django-based app for uploading deepfake videos and detecting fakes with confidence scores. Trained on celeb-df, DFD Challenge, and FF++ datasets using ResNeXt + LSTM architecture.',
    image: '/assets/images/random.jpg',
    link: 'https://github.com/Vikaskoppoju/deepfake',
  },
  {
    id: 3,
    title: 'College Website Redesign',
    description:
      'Led a team of 5 in revamping the official college website with improved UI/UX using HTML, CSS, Bootstrap, and JavaScript for a modern and responsive experience.',
    image: '/assets/images/vasavi.png',
    link: 'https://srivasaviengg.ac.in/',
  },
];

const ProjectSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center justify-center overflow-hidden box-border" id='work'>
      
      {/* Glow Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-400/20 blur-[100px] top-0 left-0 rounded-full"></div>
        <div className="absolute w-72 h-72 bg-pink-400/20 blur-[120px] bottom-0 right-0 rounded-full"></div>
      </div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 text-3xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-yellow-400 mb-10"
      >
        My Works
      </motion.h1>

      {/* Slide Container */}
      <div className="relative z-10 w-full max-w-6xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 p-4 sm:p-10"
          >
            {/* Image */}
            <motion.img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full md:w-1/2 rounded-xl object-cover shadow-lg h-auto"
              whileHover={{ rotate: 1.5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                {currentProject.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-200">{currentProject.description}</p>
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition duration-300"
              >
                Read More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex mt-6 gap-2">
        {projects.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              idx === currentIndex ? 'bg-yellow-400 scale-110' : 'bg-gray-400'
            }`}
            animate={{ y: idx === currentIndex ? -2 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
