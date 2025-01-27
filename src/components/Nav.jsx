import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto px-19 flex items-center h-16">
        <div className="text-2xl font-bold ml-4"> 
          <a href="#">Brand</a>
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-18"> 
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
