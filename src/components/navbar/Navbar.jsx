import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-dark-primary backdrop-blur-md text-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-green"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base font-medium font-[Poppins]">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.3 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative group ${
                    activeSection === item.toLowerCase()
                      ? "text-green"
                      : "text-gray-200"
                  } transition duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-green transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 shadow-lg border-t border-gray-700 overflow-hidden"
        >
          <div className="px-4 pt-3 pb-5 space-y-3 text-center font-[Poppins] text-base">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full py-2 rounded-md ${
                    activeSection === item.toLowerCase()
                      ? "bg-green text-black"
                      : "text-gray-200 hover:bg-green hover:text-black"
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
