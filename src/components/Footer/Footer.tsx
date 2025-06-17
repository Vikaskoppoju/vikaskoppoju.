import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060C1A] text-white py-8 px-4 md:px-6">
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 max-w-6xl mx-auto">
        <h6 className="text-xl md:text-2xl font-bold text-center md:text-left">
          Contact
        </h6>
        {/* Email section removed */}
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mb-4">
        <p className="text-sm md:text-lg font-medium">+91 6305535725</p>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <a
            href="https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/VikasKoppoju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.dribbble.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Dribbble
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs md:text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Vikas Kumar Koppoju. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
