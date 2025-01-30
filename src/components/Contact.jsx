import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isVisible, setIsVisible] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );
    
    const contactElement = document.getElementById("contact");
    observer.observe(contactElement);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-b-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">Any doubts? Feel free to ask!</p>

        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          <motion.div 
           whileHover={{ scale: 1.1 , borderColor: "blue" }}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ease-in-out "
              placeholder="Enter Your Name..."
            />
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.1 , borderColor: "blue" }}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter Your Email..."
            />
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.1 , borderColor: "blue" }}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter Your Message"
              rows="4"
            />
          </motion.div>

          <motion.button
          whileHover={{ scale: 1.1 , borderColor: "blue" }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition w-full"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
