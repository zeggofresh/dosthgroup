import React, { useState } from "react";
import { motion } from "framer-motion";

import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import construction1 from "../../assets/construction1.jpg";
import construction2 from "../../assets/construction2.jpg";

const staticProjects = [
  {
    title: "Luxury Villa Construction",
    description:
      "A modern 4BHK villa built with premium materials, eco-friendly design, and advanced architecture to blend elegance with comfort.",
    image: project1,
    contact: "+91 96050 19918"
  },
  {
    title: "Commercial Office Complex",
    description:
      "A 6-story commercial building featuring smart spaces, energy-efficient lighting, and sustainable design solutions.",
    image: project2,
    contact: "+91 96050 19918"
  },
  {
    title: "Apartment Residential Tower",
    description:
      "A 20-floor residential project with modern amenities, high safety standards, and spacious design for luxury living.",
    image: project3,
    contact: "+91 96050 19918"
  },
  {
    title: "Interior Design & Renovation",
    description:
      "Complete renovation and interior transformation project that redefined space functionality and aesthetics.",
    image: project4,
    contact: "+91 96050 19918"
  },
  {
    title: "Modern Housing Development",
    description:
      "Contemporary housing project with innovative design elements and sustainable building practices for modern families.",
    image: construction1,
    contact: "+91 96050 19918"
  },
  {
    title: "Green Building Initiative",
    description:
      "Eco-friendly construction project featuring renewable energy systems and sustainable materials for reduced environmental impact.",
    image: construction2,
    contact: "+91 96050 19918"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Enable background scrolling
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-dark-secondary text-white px-6 md:px-20 py-20">
      {/* Horizontal line above the section */}
      <div className="border-t border-gray-700 my-8"></div>
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-primary-gradient"
      >
        Our Featured Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
      >
        Explore some of our proudest achievements in{" "}
        <span className="text-green font-semibold">Palakkad, Kerala</span>{" "}
        that showcase our dedication, craftsmanship, and modern design
        excellence.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center overflow-hidden">
        {/* 🔸 Render Static Projects Only */}
        {staticProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 25px rgba(34, 197, 94, 0.3)"
            }}
            className="card-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-green/20 transition-all duration-500 max-w-sm cursor-pointer border border-gray-700"
            onClick={() => openModal(project)}
          >
            {/* Image Section */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Details */}
            <div className="p-6">
              <motion.h2 
                className="text-2xl font-semibold text-green mb-3"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h2>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Add a subtle pulse animation to indicate interactivity */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-green opacity-0 pointer-events-none"
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="bg-dark-primary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Close Button */}
              <motion.button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 bg-opacity-50 rounded-full p-2 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              {/* Project Image */}
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Project Details */}
              <div className="p-6 md:p-8">
                <motion.h2 
                  className="text-3xl font-bold text-green mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.description}
                </motion.p>
                
                {/* Contact Information */}
                <motion.div 
                  className="bg-gray-800 rounded-xl p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-blue mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Contact for this Project
                  </motion.h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.836.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-xl text-gray-200">{selectedProject.contact || "+91 96050 19918"}</span>
                  </div>
                  <motion.p 
                    className="text-gray-400 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Click to call or message us for more details about this project.
                  </motion.p>
                </motion.div>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button 
                    onClick={() => window.location.href = `tel:${selectedProject.contact || "+91 96050 19918"}`}
                    className="flex-1 min-w-[200px] py-3 bg-green hover:bg-secondary-green text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.502l4.493 1.498a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </motion.button>
                  <motion.button 
                    onClick={() => window.location.href = "/contact"}
                    className="flex-1 min-w-[200px] py-3 btn-outline rounded-lg transition duration-300 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Send Message
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;