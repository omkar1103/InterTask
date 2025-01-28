import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Nav />
    {/* Main content with padding to avoid footer overlap */}
    <main className="flex-grow pb-16">
      <section
        id="home"
        className="h-screen bg-gray-100 pt-20 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </section>
      <hr />
      <section
        id="about"
        className="h-screen bg-gray-100 pt-20 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Welcome to the About Us Page</h1>
      </section>
      <hr />
      <section
        id="services"
        className="h-screen bg-gray-100 pt-20 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Welcome to Our Services</h1>
      </section>
      <hr />
      <section
        id="contact"
        className="h-screen bg-gray-100 pt-20 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Welcome to the Contact Us</h1>
      </section>
    </main>
    {/* Fixed footer */}
    <Footer />
  </div>
);
}



export default App;
