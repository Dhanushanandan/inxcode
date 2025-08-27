import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-hero-gradient">
      <section className="text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Vision Into Reality
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Professional startup development services. We help innovative startups build exceptional digital products with cutting-edge technology and stunning design.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* Optional: Background illustration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-indigo-800 to-transparent"></div>
    </section>
    </section>
  );
};

export default Hero;
