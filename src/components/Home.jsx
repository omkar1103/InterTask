import React, { useState } from "react";
import Contact from "./Contact";
import homeImage from "../assets/Home.jpg";

function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          
          <div className="md:w-1/2 text-center md:text-left p-4">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to our Website
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-lg">
              Look at our Services and Solutions We Provide
            </p>
            
            <div className="mt-6 flex space-x-5 justify-center md:justify-start">
              <a href="#services" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                Services
              </a>
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                 Contact Us
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src={homeImage} alt="Home Illustration" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
