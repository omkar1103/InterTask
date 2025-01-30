import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({
      behavior: 'smooth', // Smooth scroll behavior
      block: 'start',     // Align the section at the top of the viewport
    });
  };

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Nav scrollToAbout={scrollToAbout} />
      <Home />

      <main className="flex-grow pb-16">
        <hr />
        <About />
        <hr />
        <section id="services" className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to Our Services</h1>
        </section>
        <hr />
        <section id="contact" className="min-h-screen bg-gray-100 pt-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to Contact Us</h1>
          <div className="mt-4 w-full max-w-lg">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
