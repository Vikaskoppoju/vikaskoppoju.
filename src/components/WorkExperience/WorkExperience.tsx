// import React from "react";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <section className="bg-[#060C1A] text-white py-20" id="experience">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        {/* Yellow Gradient Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-yellow-400 mb-10"
        >
          Work Experience
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Work Experience Card 1 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            className="relative rounded-xl shadow-lg overflow-hidden border border-gray-700"
          >
            <div className="relative p-6">
              <span className="text-lg text-[#FFD700] font-medium">Mar 2025 - May 2025</span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-2">Data Analyst Power BI Trainee</h3>
              <p className="mt-2 text-lg font-light">Revature</p>
              <p className="mt-4 text-base font-normal">
                Currently undergoing Data Analytics training focusing on Python, SQL, and Data Visualization using Power BI.
              </p>
            </div>
          </motion.div>

          {/* Work Experience Card 2 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            className="relative rounded-xl shadow-lg overflow-hidden border border-gray-700"
          >
            <div className="relative p-6">
              <span className="text-lg text-[#FFD700] font-medium">Nov 2024 - Jan 2025</span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-2">Trainee</h3>
              <p className="mt-2 text-lg font-light">Revature</p>
              <p className="mt-4 text-base font-normal">
                Solidified SQL skills through hands-on experience in designing and optimizing database schemas, improving
 query performance by 25 percentage, and reducing data retrieval times.
              </p>
            </div>
          </motion.div>

          {/* Work Experience Card 3 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            className="relative rounded-xl shadow-lg overflow-hidden border border-gray-700"
          >
            <div className="relative p-6">
              <span className="text-lg text-[#FFD700] font-medium">Mar 2023 - Oct 2024</span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-2">Intern</h3>
              <p className="mt-2 text-lg font-light">OBSOFT ( Sri Vasavi Engineering College )</p>
              <p className="mt-4 text-base font-normal">
                 Developed a Django-based student evaluation system for academic performance tracking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
