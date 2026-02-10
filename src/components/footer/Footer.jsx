import { motion } from "framer-motion"; // Added framer-motion import
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-dark-secondary text-gray-300 pt-16 pb-8 px-6 md:px-20"
    >
      {/* Horizontal line above the footer */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 my-8 origin-left"
      ></motion.div>
      
      {/* --- Main Footer Content --- */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* --- Logo / About Section --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.img
              src={logo}
              alt="Dosth Construction Logo"
              className="w-12 h-12 rounded-full border-2 border-green shadow-md"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            Building dreams with precision and trust in Palakkad, Kerala.
            From design to delivery, we make your construction journey smooth and successful.
            Your vision, our expertise — together, we build a better tomorrow.
          </p>
        </motion.div>

        {/* --- Quick Links --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl font-semibold text-green mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <a href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-green transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* --- Contact Info --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl font-semibold text-green mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-3">
            {[
              { icon: <FaPhoneAlt className="text-green" />, text: "+91 85899 15201" },
              { icon: <FaPhoneAlt className="text-green" />, text: "+91 96050 19918" },
              { 
                icon: <FaMapMarkerAlt className="text-green mt-1" />, 
                text: "CS Arcade, Ezhakkad (PO), Mundur,\nPalakkad, Kerala - 678631" 
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {item.icon}
                <span className="whitespace-pre-line">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* --- Social Media --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl font-semibold text-green mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Follow Us
          </motion.h3>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaLinkedinIn />, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 rounded-full bg-gray-800 hover:bg-green hover:text-gray-900 transition"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#22c55e",
                  color: "#0f172a",
                  scale: 1.1
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- Bottom Line --- */}
      <motion.div 
        className="text-center mt-8 text-gray-500 text-sm space-y-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-green font-semibold">
            Dosth Construction
          </span>. All Rights Reserved.
        </p>
        <p className="text-green font-medium">
          Developed by Vaibhav Sonawane from Sangamner 💛
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;