import React from "react"; // Ensure React is imported

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center fixed w-full bottom-0 z-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-2">
          <a
            href="#home"
            className="text-sm sm:text-base hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm sm:text-base hover:text-gray-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-sm sm:text-base hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm sm:text-base hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
