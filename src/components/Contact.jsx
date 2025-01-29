import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-b-black">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact us</h2>
        <p className="text-gray-600 mb-6">Any Doubt's feel free to ask?</p>

        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          <div>
            <input type="text"id="name"name="name" value={formData.name}onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Name..."
            />
          </div>

          <div>
            <input type="email"id="email"name="email"value={formData.email}onChange={handleChange}className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Email..."
            />
          </div>

          <div>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Message"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition w-full"
          >
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
