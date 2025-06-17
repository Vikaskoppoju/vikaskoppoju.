
import { Typewriter } from "react-simple-typewriter"; // Install this package: npm install react-simple-typewriter
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Install this package: npm install react-icons

const DupeHero = () => {
  return (
    <>
    <div className="h-screen bg-[#060C1A] flex flex-col justify-center items-center text-center text-white">
      {/* Name Section */}
      <h1 className="text-6xl md:text-8xl font-extrabold">
        VIKAS KUMAR KOPPOJU
      </h1>

      {/* Typing Animation Section */}
      <p className="text-3xl md:text-5xl mt-6">
        <span className="text-[#FFD700]">
          <Typewriter
            words={["Freelancer", "Full Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="#"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>

      {/* Social Media Handles */}
      <div className="flex gap-10 mt-12 text-4xl">
        <a
          href="https://www.linkedin.com/in/vikaskoppoju/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0A66C2]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vikaskoppoju"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/vikaskoppoju"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1DA1F2]"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-lg md:text-2xl">
        <p>Email: <a href="mailto:koppojvikaskumar@gmail.com" className="hover:underline">koppojvikaskumar@gmail.com</a></p>
        <p>Phone: <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a></p>
      </div>
    </div>
    <div className="h-screen flex justify-between items-center bg-gray-900">
        <div></div>
        <div
          className="text-white text-8xl md:text-8xl font-bold bg-cover bg-center bg-no-repeat  rounded-md shadow-lg"
          style={{
            backgroundImage: "url('/assets/images/background-hero.jpg')", // Ensure the image is in the public folder
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VIKAS
        </div>
</div>

    </>
  );
};

export default DupeHero;
