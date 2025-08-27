import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent ✅\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-secondary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-2xl border border-muted bg-white/80 shadow-soft focus:border-brand focus:ring-2 focus:ring-brand outline-none text-lg  hover:shadow-glow"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-2xl border border-muted bg-white/80 shadow-soft focus:border-secondary focus:ring-2 focus:ring-secondary outline-none text-lg  hover:shadow-glow"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-4 rounded-2xl border border-muted bg-white/80 shadow-soft focus:border-accent focus:ring-2 focus:ring-accent outline-none text-lg  hover:shadow-glow"
            rows={4}
            required
          ></textarea>
          <button className="bg-primary-gradient text-white py-4 rounded-full font-bold shadow-glow hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
