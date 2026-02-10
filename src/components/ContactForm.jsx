import React, { useState } from "react";
import { motion } from "framer-motion"; // Added framer-motion import
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`Form field ${e.target.name} updated to:`, e.target.value);
  };

  // ---------- SEND WHATSAPP ----------
  const sendWhatsApp = () => {
    const phone = "919605019918"; // Dosth Construction WhatsApp Number
    const text = `New Contact Message:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    console.log("Redirecting to WhatsApp with URL:", url);
    // Add a small delay to ensure form reset happens first
    setTimeout(() => {
      // Open WhatsApp in a new tab
      window.open(url, "_blank");
    }, 500);
  };

  // ---------- SEND EMAIL ----------
  const sendEmail = () => {
    // Email functionality removed as per user request
    // Only WhatsApp redirect is needed
    return Promise.resolve();
  };

  // ---------- FINAL SUBMIT ----------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Immediately redirect to WhatsApp with pre-filled message
    sendWhatsApp();
    // Reset form after a delay to allow WhatsApp redirect
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-400 mb-2 font-medium">
          Full Name
        </label>
        <motion.input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-green outline-none transition"
          required
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-2 font-medium">
          Email
        </label>
        <motion.input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-green outline-none transition"
          required
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-2 font-medium">
          Message
        </label>
        <motion.textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-green outline-none transition resize-none"
          required
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 btn-primary rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isSubmitting ? "Opening WhatsApp..." : "Open WhatsApp"}
      </motion.button>
    </form>
  );
}

export default ContactForm;