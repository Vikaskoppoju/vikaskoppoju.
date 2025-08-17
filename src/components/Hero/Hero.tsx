import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import me1 from "../../assets/images/me1.png";

export default function Hero() {
  return (
    <section className="sm:pt-25 pt-32 sm:pt-28 md:pt-24 lg:pt-10 overflow-hidden flex items-center bg-[#060C1A] text-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 mb-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Image with Parallax Animation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start off-screen (down)
            whileInView={{ y: 0, opacity: 1 }} // Fade up to original position
            whileHover={{ y: -10 }} // Optional hover effect (slight upward motion)
            transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth transition
            className="relative flex justify-center order-1 sm:order-2"
          >
            <motion.img
              className="w-64 h-auto sm:w-80 sm:h-auto sm:py-20 lg:w-[420px] lg:h-auto object-cover rounded-md shadow-xl pb-10"
              src={me1}
              alt="Vikas Kumar Koppoju"
              whileInView={{
                y: [0, 30], // Parallax effect when scrolling
                transition: { duration: 1, ease: "easeOut" },
              }}
            />
          </motion.div>

          {/* Text with Fade and Parallax Animation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start off-screen (down)
            whileInView={{ y: 0, opacity: 1 }} // Fade up to original position
            whileHover={{ y: -10 }} // Optional hover effect (slight upward motion)
            transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth transition
            className="order-2 sm:order-1 mt-5"
          >
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Vikas Kumar Koppoju
            </h1>

            {/* Typing Animation */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", // First text
                  3000, // Pause for 3 seconds
                  "Wordpress Developer", // Second text
                  3000, // Pause for 3 seconds
                  "Power BI Analyst", // Third text
                  3000, // Pause for 3 seconds
                ]}
                wrapper="span"
                speed={50} // Typing speed
                repeat={Infinity} // Loop animation
                className="text-[#FFD700]" // Custom color for the animation text
              />
            </div>

            {/* Subtitle */}
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-300 md:mt-8 text-justify">
              Passionate about crafting innovative solutions and transforming
              ideas into reality.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:text-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://drive.google.com/file/d/153QfMdBJAqso_tWlKDd6rYXH64DU76XA/view?usp=sharing" // Replace with your resume link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 md:text-lg font-medium text-black bg-[#FFD700] hover:bg-[#E6C200] rounded-xl shadow transition"
              >
                View Resume
              </a>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/" // Replace with your LinkedIn link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#0A66C2] transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Vikaskoppoju" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-500 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
                {/* <a
                  href="https://x.com/VikasKoppoju" // Replace with your Twitter link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#1DA1F2] transition"
                >
                  <i className="fab fa-twitter"></i>
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
