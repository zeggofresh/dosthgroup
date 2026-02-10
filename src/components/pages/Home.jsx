import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import img1 from "../../assets/construction1.jpg";
import img2 from "../../assets/construction2.jpg";
import img3 from "../../assets/construction3.jpg";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  const slides = [
    {
      image: img1,
      title: "Building Dreams, Brick by Brick",
      text: "From design to delivery — we construct trust and excellence in Palakkad, Kerala.",
    },
    {
      image: img2,
      title: "Modern Designs, Timeless Quality",
      text: "Creating sustainable structures with precision and purpose in Palakkad & Kerala.",
    },
    {
      image: img3,
      title: "Your Vision, Our Foundation",
      text: "Turning your imagination into concrete reality since 2010 across Palakkad & Kerala.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919605019918", "_blank");
  };

  // Handle Call click
  const handleCallClick = () => {
    window.location.href = "tel:+919605019918";
  };

  return (
    <div className="w-full text-white bg-dark-primary">
      {/* ---------- HERO SECTION ---------- */}
      <div id="home" className="relative w-full h-screen overflow-hidden m-0 p-0">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "z-10" : "-z-10"
            }`}
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-50"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4 }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/70 to-transparent"></div>
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start pl-8 md:pl-20 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-gradient"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            {slides[current].text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 flex flex-col md:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-3 btn-primary rounded-lg shadow-lg transition duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-3 btn-outline rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-green scale-125" : "bg-gray-500"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            ></motion.button>
          ))}
        </div>
      </div>

      {/* ---------- REST SECTIONS ---------- */}
      <div className="bg-dark-secondary">
        {/* Added entrance animations to section containers */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Services />
        </motion.section>
        
        <motion.section 
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.section>
      </div>

      {/* ---------- Floating Contact Icons ---------- */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="p-3 bg-green text-white rounded-full shadow-lg hover:bg-secondary-green transition-all duration-300"
          aria-label="Call us"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: 1, 
            type: "spring",
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <FaPhone className="text-base" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="p-3 bg-blue text-white rounded-full shadow-lg hover:bg-secondary-blue transition-all duration-300"
          aria-label="Message us on WhatsApp"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: 1.2, 
            type: "spring",
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2
            }
          }}
        >
          <FaWhatsapp className="text-base" />
        </motion.button>
      </div>
    </div>
  );
}

export default Home;