import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-brand">About Us</h2>
        <p className="text-mutedFg mb-10 text-lg font-medium max-w-2xl mx-auto">
          We are a passionate team helping startups grow with innovative solutions. Our focus is on simplicity, efficiency, and user-friendly designs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/80 rounded-3xl shadow-soft flex flex-col items-center">
            <span className="text-4xl mb-2 text-accent animate-bounce">⚡</span>
            <span className="font-bold text-brand">Fast Delivery</span>
          </div>
          <div className="p-8 bg-white/80 rounded-3xl shadow-soft flex flex-col items-center">
            <span className="text-4xl mb-2 text-secondary animate-pulse">🎨</span>
            <span className="font-bold text-secondary">Creative Design</span>
          </div>
          <div className="p-8 bg-white/80 rounded-3xl shadow-soft flex flex-col items-center">
            <span className="text-4xl mb-2 text-brand animate-bounce">🤝</span>
            <span className="font-bold text-brand">Reliable Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
