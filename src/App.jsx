import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Home/>

      <main className="flex-grow pb-16">
      
        <hr />
        <section
          id="about"
          className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Welcome to the About Us Page</h1>
        </section>
        <hr />
        <section
          id="services"
          className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Welcome to Our Services</h1>
        </section>
        <hr />
        <section
          id="contact"
          className="min-h-screen bg-gray-100 pt-20 flex flex-col items-center justify-center"
        >
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
