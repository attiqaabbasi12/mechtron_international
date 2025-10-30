import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll color and background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7); // after hero section
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-gray-900"
          : "bg-white/80 backdrop-blur-sm text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          className={`text-2xl font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <div>
            <div><span className="text-red-700 font-extrabold text-3xl">MECHTRON</span> International</div>
            {/* <span className="text-lg text-gray-900">Your Global Partner in Mechanical Design</span> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 text-xl font-medium transition-colors ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          {["about", "services", "projects", "courses", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] ${
                  scrolled ? "bg-red-700" : "bg-red-500"
                } group-hover:w-full transition-all duration-300`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              className={`w-7 h-7 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className={`w-7 h-7 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center py-6 space-y-4">
          {["about", "services", "projects", "courses", "contact"].map((item) => (
            <div
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer text-xl hover:text-red-500 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
