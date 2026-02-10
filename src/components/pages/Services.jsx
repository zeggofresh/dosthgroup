import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  Paintbrush,
  Home,
  Ruler,
  Briefcase,
  Layers,
  MapPin,
  Building,
  DraftingCompass,
  FileText,
  Calculator,
  Palette
} from "lucide-react";

const services = [
  {
    title: "Construction Planning",
    description:
      "We offer complete construction planning with top-quality materials, precise timelines, and expert execution for every project.",
    icon: <Hammer className="w-12 h-12 text-green mb-4" />,
    details: "Our construction planning service ensures that every aspect of your project is meticulously planned and executed. We work closely with architects, engineers, and suppliers to create a seamless workflow that minimizes delays and maximizes efficiency. From foundation to finishing touches, we maintain strict quality control and transparent communication throughout the process.",
    benefits: [
      "Comprehensive project timeline and milestones",
      "Quality material sourcing and supplier management",
      "Expert team coordination and supervision",
      "Regular progress updates and transparent reporting",
      "Risk assessment and mitigation strategies"
    ]
  },
  {
    title: "Building Renovation",
    description:
      "Transform your existing space with modern designs and durable renovations built to last.",
    icon: <Home className="w-12 h-12 text-blue mb-4" />,
    details: "Our building renovation services breathe new life into existing structures. Whether it's updating outdated interiors, expanding living spaces, or modernizing infrastructure, we approach each renovation with careful planning and attention to detail. We specialize in preserving the integrity of existing structures while incorporating modern amenities and design elements.",
    benefits: [
      "Structural assessment and reinforcement",
      "Modern design integration with existing architecture",
      "Energy-efficient upgrades and sustainability improvements",
      "Minimal disruption to your daily routine",
      "Cost-effective solutions compared to new construction"
    ]
  },
  {
    title: "Interior Design",
    description:
      "Creative interior design solutions that blend beauty, functionality, and comfort to elevate your lifestyle.",
    icon: <Paintbrush className="w-12 h-12 text-teal mb-4" />,
    details: "Our interior design services transform spaces into personalized sanctuaries that reflect your style and meet your functional needs. We combine aesthetic sensibility with practical considerations to create environments that are both beautiful and livable. From concept to completion, we manage all aspects of interior design including space planning, material selection, and furniture placement.",
    benefits: [
      "Customized design solutions tailored to your preferences",
      "Space optimization and functional layout planning",
      "Access to premium materials and furnishings",
      "Coordination with contractors and artisans",
      "Project management from design to installation"
    ]
  },
  {
    title: "Architectural Design",
    description:
      "Professional architectural layouts tailored to your vision, ensuring elegance and structural strength.",
    icon: <Ruler className="w-12 h-12 text-green mb-4" />,
    details: "Our architectural design services create structures that are not only visually stunning but also structurally sound and environmentally responsible. We work with you to translate your vision into detailed architectural plans that meet all regulatory requirements while pushing the boundaries of creative design. Our team stays current with the latest design trends and building technologies.",
    benefits: [
      "Custom architectural designs reflecting your unique vision",
      "Integration of sustainable and eco-friendly building practices",
      "Compliance with all local building codes and regulations",
      "3D visualization and virtual walkthroughs before construction",
      "Collaboration with structural and MEP engineers"
    ]
  },
  {
    title: "Project Management",
    description:
      "Efficient project management ensures timely delivery, budget control, and top-notch quality standards.",
    icon: <Briefcase className="w-12 h-12 text-blue mb-4" />,
    details: "Our project management services provide peace of mind by overseeing every aspect of your construction project. We coordinate all stakeholders, manage timelines and budgets, and ensure quality standards are met throughout the construction process. With experienced project managers assigned to each job, we minimize risks and maximize value for our clients.",
    benefits: [
      "Single point of contact for all project communications",
      "Real-time project tracking and milestone monitoring",
      "Budget control and cost optimization strategies",
      "Quality assurance and compliance checks",
      "Risk management and issue resolution"
    ]
  },
  {
    title: "3D Visualization",
    description:
      "Experience your project before construction begins through detailed 3D models and realistic renders.",
    icon: <Layers className="w-12 h-12 text-teal mb-4" />,
    details: "Our 3D visualization services allow you to experience your project before a single brick is laid. Using cutting-edge software and rendering technology, we create photorealistic models that showcase every detail of your future space. This enables informed decision-making, early design adjustments, and better communication with all project stakeholders.",
    benefits: [
      "Photorealistic renders and virtual walkthroughs",
      "Design iterations and modifications before construction",
      "Improved client understanding and approval process",
      "Marketing and presentation tools for real estate developers",
      "Identification of potential design issues early in planning"
    ]
  },
  {
    title: "GPS Digital Land Survey",
    description:
      "Advanced GPS Digital Land Surveys that decode your terrain with pinpoint accuracy—helping you plan, design, and build with confidence.",
    icon: <MapPin className="w-12 h-12 text-green mb-4" />,
    details: "Every dream structure begins with understanding the land beneath it. At DOSTH Struct-Arch Consultancy, we offer advanced GPS Digital Land Surveys that decode your terrain with pinpoint accuracy—helping you plan, design, and build with confidence. Using high-precision GPS equipment and digital mapping tools, we ensure every inch of your land is measured, mapped, and meaningfully presented. Be it a compact residential plot or expansive farmland, we deliver detailed reports that go beyond basic boundaries.",
    benefits: [
      "Boundary and plot demarcation",
      "Contour survey for slope and elevation mapping",
      "Leveling survey for grading and site planning",
      "Route alignment for roads or layouts",
      "Area and volume calculations",
      "Professional Survey Report Package with PDF drawings, CAD (.dwg) files, KML/KMZ views, CSV spreadsheets, and HTML-linked views"
    ]
  },
  {
    title: "2D & 3D Architectural Design",
    description:
      "Translate your ideas into clear, realistic, and technically sound plans that serve as the creative and structural backbone of your project.",
    icon: <Building className="w-12 h-12 text-blue mb-4" />,
    details: "Before a foundation is laid, a vision must be shaped. At DOSTH Struct-Arch Consultancy, we help you visualize that vision with precision. Our 2D and 3D architectural design services translate your ideas into clear, realistic, and technically sound plans that serve as the creative and structural backbone of your project. Whether it's a cozy home, a sleek commercial space, or a grand villa—we create intelligent layouts and compelling visualizations that ensure what you imagine is exactly what gets built. We understand the importance of aligning living spaces with positive energy. Our designs follow traditional Vastu Shastra principles—optimizing spatial orientation, light, airflow, and function to enhance well-being and harmony in your home or building.",
    benefits: [
      "2D Floor Plans with efficient, space-optimized layouts",
      "3D Elevations with stunning visuals of your building's façade",
      "3D Interior Layouts with custom-designed spaces",
      "360° Virtual Walkthroughs (optional)",
      "Working Drawings with construction-ready details",
      "Vastu-compliant planning included on request"
    ]
  },
  {
    title: "CAD Drafting Services",
    description:
      "Transform ideas, sketches, and concepts into clean, detailed, and professional 2D architectural and structural drawings using industry-standard CAD tools.",
    icon: <DraftingCompass className="w-12 h-12 text-teal mb-4" />,
    details: "At DOSTH Struct-Arch Consultancy, our CAD Drafting Services form the technical heart of every successful construction project. We transform ideas, sketches, and concepts into clean, detailed, and professional 2D architectural and structural drawings using industry-standard CAD tools. Whether you're an architect, engineer, builder, or property owner, our drafting services ensure your plans are ready for execution, approval, and submission—without confusion or delay. We also prepare K-SMART-compliant drawings for Kerala's digital building permit platform, ensuring smooth and fast approval from local authorities.",
    benefits: [
      "Architectural Plans including floor plans, sections, and elevations",
      "Structural Drawings with RCC detailing and column layouts",
      "Electrical & Plumbing Layouts for smooth coordination",
      "Site Layouts with approach roads and landscaping elements",
      "K-SMART Drawings ready for direct upload to government portal",
      "Demo Plans for preview and feedback before final submission"
    ]
  },
  {
    title: "Building Documentation",
    description:
      "Prepare all the essential documents you need to start, progress, and complete your building legally and confidently.",
    icon: <FileText className="w-12 h-12 text-purple mb-4" />,
    details: "Behind every great building is a stack of accurate, well-prepared documents. At DOSTH Struct-Arch Consultancy, we specialize in preparing all the essential documents you need to start, progress, and complete your building legally and confidently. Our team ensures that every drawing, certificate, and file complies with local authority norms, bank requirements, and technical standards—so your project never faces unnecessary delays. Whether you're applying for permits, seeking a bank loan, or ready to wrap up your construction, we've got the paperwork covered—professionally and precisely.",
    benefits: [
      "K-SMART Permit Drawings & Application support",
      "Self-Permit Documentation for Panchayat approvals",
      "Stage-by-Stage Certificates for bank loans",
      "Construction Estimation Reports with BOQ",
      "Completion Certificate for utility connections",
      "Supporting Survey Data including GPS reports and ownership sketches"
    ]
  },
  {
    title: "Structural Design Services",
    description:
      "Ensure that your building is not only beautiful but also safe, stable, and sustainable with our structural design services.",
    icon: <Calculator className="w-12 h-12 text-green mb-4" />,
    details: "We don't just design buildings—we design strength. At DOSTH Struct-Arch Consultancy, our structural design services ensure that your building is not only beautiful but also safe, stable, and sustainable. From small villas to multi-storey complexes, we create structural systems that are cost-effective, technically sound, and compliant with all relevant codes.",
    benefits: [
      "RCC Structural Design with beam, column, slab & footing detailing",
      "Load-bearing calculations and earthquake-resistant design (IS 456/IS 1893 standards)",
      "Steel Structure Design for industrial sheds and framed structures",
      "Trusses, purlins, and connection detailing",
      "Structural Layout Drawings including column layout plans and footing details",
      "Design Revisions & Optimization with value engineering to reduce material cost",
      "Construction-Ready Documents with Bar Bending Schedule (BBS) and editable CAD files"
    ]
  },
  {
    title: "Architectural Design – Interior & Exterior",
    description:
      "Combine creativity, technical precision, and local relevance—offering timeless designs that are both functional and beautiful.",
    icon: <Palette className="w-12 h-12 text-blue mb-4" />,
    details: "Where Function Meets Aesthetics. At DOSTH Struct-Arch Consultancy, we believe that every space should reflect your personality and purpose. Our architectural design services combine creativity, technical precision, and local relevance—offering timeless designs that are both functional and beautiful. We design every element—from building facades to living room corners—with care, style, and purpose.",
    benefits: [
      "Exterior Elevation Design with 2D & 3D views of your building façade",
      "Material, texture, and lighting detailing",
      "Style options: Modern, Traditional, Colonial, Kerala style, Contemporary",
      "Interior Design Concepts with room-wise space planning and layout",
      "False ceiling & lighting design and custom furniture placements",
      "Landscape & Outdoor Planning with garden & green space layouts",
      "Vastu-Based Design Alignment with space orientation and zoning as per Vastu"
    ]
  },
  {
    title: "Estimation & Quantity Survey",
    description:
      "Help you stay in control of your budget from the very beginning with detailed and transparent estimates.",
    icon: <Calculator className="w-12 h-12 text-teal mb-4" />,
    details: "Plan Wisely. Build Smartly. Accurate cost planning is the backbone of every successful project. At DOSTH Struct-Arch Consultancy, our Estimation and Quantity Survey services help you stay in control of your budget from the very beginning. We provide detailed and transparent estimates, quantity take-offs, and material calculations that make decision-making easier—whether you're building a home, a commercial space, or an industrial structure.",
    benefits: [
      "Detailed Cost Estimation with construction cost projections and item-wise rate analysis",
      "Quantity Take-Off (BOQ) with accurate material quantity calculation",
      "Rate Analysis based on current local market rates",
      "Estimation for Bank Loans with formats approved by major banks",
      "Deliverables include Detailed BOQ, Material and labour split-up, and Cost estimation report"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Enable background scrolling
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-dark-secondary text-white px-6 md:px-20 py-16">
      {/* Horizontal line above the section */}
      <div className="border-t border-gray-700 my-8"></div>
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-primary-gradient"
      >
        Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
      >
        At <span className="text-green font-semibold">Dosth Construction</span>, 
        we provide end-to-end construction and design services in 
        <span className="text-green font-semibold"> Palakkad, Kerala</span> — 
        blending innovation, precision, and reliability in every project.
      </motion.p>

      {/* Staggered animation container for service cards */}
      <motion.div 
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px rgba(34, 197, 94, 0.3)",
              borderColor: "var(--primary-green)"
            }}
            className="relative card-primary rounded-2xl shadow-lg hover:shadow-green/30 transition-all duration-700 p-8 text-center w-full max-w-sm cursor-pointer border border-gray-700"
            onClick={() => openModal(service)}
          >
            <div className="flex justify-center">{service.icon}</div>
            <motion.h2 
              className="text-2xl font-semibold text-green mb-3 mt-2"
              whileHover={{ scale: 1.05 }}
            >
              {service.title}
            </motion.h2>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
            
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
      </motion.div>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
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
              
              {/* Service Header */}
              <div className="p-6 md:p-8 pt-16">
                <div className="flex justify-center mb-6">
                  {selectedService.icon}
                </div>
                <motion.h2 
                  className="text-3xl font-bold text-green mb-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedService.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-300 text-lg mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedService.description}
                </motion.p>
                
                {/* Detailed Description */}
                <motion.div 
                  className="bg-gray-800 rounded-xl p-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-blue mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Service Details
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedService.details}
                  </motion.p>
                  
                  {/* Benefits List */}
                  <motion.h3 
                    className="text-2xl font-semibold text-blue mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Key Benefits
                  </motion.h3>
                  <motion.ul 
                    className="text-gray-300 text-lg space-y-3 list-disc list-inside pl-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {selectedService.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                {/* Centered button container */}
                <motion.div
                  className="flex justify-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button 
                    onClick={() => window.location.href = "/contact"}
                    className="px-8 py-3 btn-primary rounded-lg font-semibold text-lg transition duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get This Service
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Custom fade animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;