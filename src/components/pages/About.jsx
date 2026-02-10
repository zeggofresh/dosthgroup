import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Added useState and useEffect
import aboutImage from "../../assets/constructionteam.jpg";
import missionImage from "../../assets/constructionsite.jpg";

// Counter component for animating numbers
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const currentValue = Math.floor(percentage * end);
      setCount(currentValue);
      
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return (
    <span>
      {count}
      {end.toString().includes('+') ? '+' : ''}
    </span>
  );
};

function About() {
  return (
    <div className="bg-dark-secondary text-white overflow-hidden">
      {/* Removed pt-24 md:pt-28 to eliminate top gap */}

      {/* SECTION 1 - About Overview */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <motion.img
            src={aboutImage}
            alt="Dosth Construction Team"
            className="rounded-2xl shadow-2xl w-full max-w-xl md:max-w-2xl object-cover border border-gray-800 transform transition duration-500 hover:scale-105 hover:shadow-green/20"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-12 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-gradient drop-shadow-lg"
          >
            About Dosth Construction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed mb-6"
          >
            <span className="text-green font-semibold">Dosth Construction</span> has
            been a symbol of quality, trust, and innovation. For over a decade, we've been
            redefining construction standards by delivering sustainable and aesthetically
            exceptional projects across residential, commercial, and industrial sectors in 
            <span className="text-green font-semibold"> Palakkad, Kerala</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-base leading-relaxed mb-8"
          >
            Our mission is simple — to build not just structures, but long-term relationships
            with our clients. Every project we take up is a commitment to excellence,
            blending modern architecture with solid engineering. From luxury homes to
            large-scale developments, we ensure quality craftsmanship, timely delivery, and
            transparent communication.
          </motion.p>

          {/* Stats Highlights with animated counters */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "120+", label: "Completed Projects" },
              { value: "50+", label: "Skilled Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transform transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-green"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <Counter end={parseInt(stat.value)} duration={3} />
                  {stat.value.includes('+') ? '+' : ''}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-10"
          >
            <motion.a
              href="/contact"
              className="px-8 py-3 btn-primary rounded-lg shadow-lg transition duration-300 inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              Let’s Build Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* SECTION 2 - Vision & Mission */}
      <div className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-16 py-20 border-t border-gray-800">
        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <motion.img
            src={missionImage}
            alt="Our Vision & Mission"
            className="rounded-2xl shadow-2xl w-full max-w-xl md:max-w-2xl object-cover border border-gray-800 transform transition duration-500 hover:scale-105 hover:shadow-green/20"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pr-12 text-center md:text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-primary-gradient drop-shadow-lg"
          >
            Our Vision
          </motion.h3>

          <motion.div
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.p
              className="text-gray-300 text-lg italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              “To build more than buildings—To build trust, transform spaces, and lead a new era of sustainable, smart, and soulful design.”
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We imagine communities where <span className="font-semibold text-green">good design is not a luxury, but a way of life</span>. Where <span className="font-semibold text-green">structures stand strong, and spaces speak with meaning</span>. Our vision is to become a trusted name in delivering <span className="font-semibold text-green">affordable, aesthetic, and responsible construction solutions</span> that touch lives.
            </motion.p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-primary-gradient drop-shadow-lg"
          >
            Our Mission
          </motion.h3>

          <motion.ul
            className="text-gray-300 text-lg space-y-4 list-disc list-inside pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              "To make <span className=\"font-semibold text-green\">architecture and engineering accessible</span> to everyone—with innovation, transparency, and heart",
              "To create <span className=\"font-semibold text-green\">smart, sustainable structures</span> that balance functionality, beauty, and environmental responsibility",
              "To offer <span className=\"font-semibold text-green\">end-to-end services</span>—from GPS surveys to township development—under one expert roof",
              "To empower clients with <span className=\"font-semibold text-green\">affordable design solutions</span> that never compromise on quality or style",
              "To lead by example in <span className=\"font-semibold text-green\">green building practices</span>, township planning, and client-focused service delivery"
            ].map((mission, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                dangerouslySetInnerHTML={{ __html: mission }}
              />
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-10"
          >
            <motion.a
              href="/projects"
              className="px-8 py-3 btn-outline rounded-lg shadow-lg transition duration-300 inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              Explore Our Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;