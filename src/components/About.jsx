import React, { useEffect, useState } from "react";
import home from "../assets/Home.jpg"; // Add `/` after `..`

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const element = document.getElementById("about");
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 pt-20 pb-16 flex flex-col items-center justify-center transition-all transform duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About Me</h1>

      {/* Container for text and image */}
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-8 md:space-y-0">

        {/* About text */}
        <div className="text-lg text-gray-700 max-w-4xl px-4 leading-relaxed text-center md:text-left">
          <p>
            Hi! I'm a passionate developer with a love for building web applications. I enjoy learning new technologies and taking on challenging projects that allow me to grow and expand my skillset. 
            When I'm not coding, you'll find me exploring new places, experiencing life, and pushing myself to new limits.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={home}
            alt="Profile"
            className="w-64 h-64 rounded-full shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
