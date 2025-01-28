import React from "react"; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-start">
        <div className="mb-6 w-full sm:w-1/3">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-sm hover:text-gray-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:text-gray-400 transition"> About Us</a>
            </li>
            <li>
              <a href="#services" className="text-sm hover:text-gray-400 transition"> Services</a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-gray-400 transition"> Contact</a>
            </li>
          </ul>
        </div>
        <div className="mb-6 w-full sm:w-1/3">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-sm">Email: omkar@sahane.com</li>
            <li className="text-sm">Phone: +91 90717234578</li>
            <li className="text-sm">Address: 123 Sweet Villa, Pune</li>
          </ul>
        </div>

        <div className="mb-6 w-full sm:w-1/3">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} www.omkar.sahane.com. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
