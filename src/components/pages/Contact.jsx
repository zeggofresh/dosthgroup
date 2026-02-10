import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="bg-dark-secondary text-white px-6 md:px-20 py-20 overflow-x-hidden">
      {/* Horizontal line above the section */}
      <div className="border-t border-gray-700 my-8"></div>
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-primary-gradient"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
      >
        Have a question or a construction project in mind?  
        Let’s discuss how we can build something great together.
      </motion.p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Phone */}
          <motion.div 
            className="flex items-start space-x-4 group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-green text-2xl mt-1"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaPhoneAlt />
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-semibold text-green group-hover:text-blue transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Phone
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                +91 85899 15201
              </motion.p>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                +91 96050 19918
              </motion.p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="flex items-start space-x-4 group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-blue text-2xl mt-1"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <FaEnvelope />
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-semibold text-blue group-hover:text-green transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Email
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                dosthstructarchconsultancy@gmail.com
              </motion.p>
            </div>
          </motion.div>

          {/* Office Address */}
          <motion.div 
            className="flex items-start space-x-4 group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-green text-2xl mt-1"
              whileHover={{ scale: 1.2 }}
            >
              <FaMapMarkerAlt />
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-semibold text-green group-hover:text-blue transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Office Address
              </motion.h3>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                CS Arcade, Ezhakkad (PO), Mundur,  
                Palakkad, Kerala - 678631
              </motion.p>
            </div>
          </motion.div>

          {/* Palakkad Office */}
          <motion.div 
            className="flex items-start space-x-4 group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-green text-2xl mt-1"
              whileHover={{ scale: 1.2 }}
            >
              <FaMapMarkerAlt />
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-semibold text-green group-hover:text-blue transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Palakkad Office
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Palakkad, Kerala, India
              </motion.p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-10"
          >
            <motion.h3 
              className="text-xl font-semibold text-green mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              Our Location
            </motion.h3>
            <motion.iframe
              title="Dosth Construction Palakkad Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126813.0!2d76.6518!3d10.7725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fe61d1d4d3d%3A0x9c8d9e9e9e9e9e9e!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1711000000000"
              className="w-full h-80 md:h-96 rounded-2xl border-0 shadow-lg"
              loading="lazy"
              allowFullScreen
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px rgba(34, 197, 94, 0.2)"
              }}
            ></motion.iframe>
          </motion.div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;