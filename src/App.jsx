import React from "react";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <section id="home" className="h-screen bg-gray-100  pt-20 flex items-center justify-center ">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </section>
      <hr />
      <section id="about" className="h-screen bg-gray-100  pt-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold"> Welcome to the About Us Page</h1>
      </section>
      <hr />
      <section id="services" className="h-screen bg-gray-100  pt-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to the Our Services</h1>
      </section>
      <hr />
      <section id="contact" className="h-screen bg-gray-100  pt-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold"> Welcome to theContact Us</h1>
      </section>
    </div>
  );
}

export default App;
