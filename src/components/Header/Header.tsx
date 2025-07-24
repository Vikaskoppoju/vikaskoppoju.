import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#060C1A] h-20 shadow-md shadow-[#FFD700]/10">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-7 px-4 md:px-6 relative">
        {/* Mobile Logo */}
        <h1 className="block md:hidden text-lg font-bold text-white">
          Vikas Kumar Koppoju
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-white mx-auto">
          <ul className="flex items-center space-x-6 text-base font-medium">
            <li>
              <a href="#" className="hover:text-[#FFD700] transition-all duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-[#FFD700] transition-all duration-200">
                Experience
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-[#FFD700] transition-all duration-200">
                Works
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-[#FFD700] transition-all duration-200">
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#education" className="hover:text-[#FFD700] transition-all duration-200">
                Education
              </a>
            </li> */}
            <li>
              <a href="mailto:koppojuvikaskumar@gmail.com" className="bg-[#FFD700] text-black font-semibold py-1.5 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300">
                Let's chat
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute left-0 right-0 top-20 w-full bg-[#060C1A] border-t border-[#FFD700]/20 md:hidden transition-all duration-300`}
        >
          <ul className="flex flex-col items-center text-white text-base font-medium py-4 space-y-3">
            <li>
              <a href="#home" className="hover:text-[#FFD700]">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FFD700]">About</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-[#FFD700]">Experience</a>
            </li>
            <li>
              <a href="#work" className="hover:text-[#FFD700]">Works</a>
            </li>
            <li>
              <a href="#skill" className="hover:text-[#FFD700] transition-all duration-200">
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#education" className="hover:text-[#FFD700] transition-all duration-200">
                Education
              </a>
            </li> */}
            <li>
              <button className="bg-[#FFD700] text-black font-semibold py-2 px-5 rounded-lg hover:bg-yellow-400 mt-2 transition-all duration-300">
                Hire Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
