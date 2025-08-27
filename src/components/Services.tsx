import React from "react";

const services = [
  { id: 1, title: "Web Development", desc: "Modern and responsive websites.", icon: "💻" },
  { id: 2, title: "Mobile Apps", desc: "Cross-platform mobile solutions.", icon: "📱" },
  { id: 3, title: "UI/UX Design", desc: "User-friendly & engaging designs.", icon: "🎨" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-brand">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="p-8 rounded-3xl shadow-medium bg-white/80 hover:shadow-glow transition-shadow">
              <div className="text-6xl mb-4 text-secondary animate-pulse">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-secondary">{service.title}</h3>
              <p className="text-mutedFg text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
