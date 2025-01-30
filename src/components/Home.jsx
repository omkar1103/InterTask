import React from "react";
import { motion } from "framer-motion";
import homeImage from "../assets/Home.jpg";

function Home() {
  return (
    <section id="home" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Text Section with Smooth Animation */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to our Website
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-lg">
            Look at our Services and Solutions We Provide
          </p>

          <div className="mt-6 flex space-x-5 justify-center md:justify-start">
            <motion.a 
              href="#services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="" 
            alt="Home Illustration" 
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

      </motion.div>
    </section>
  );
}

export default Home;
