import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md shadow-soft z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-5 px-8 rounded-b-3xl">
        {/* Company name and logo group */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-primary shadow-soft" />
          <span className="text-lg md:text-xl font-semibold text-mutedFg">Inxcode</span>
          <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
            Startup
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex gap-6 bg-muted rounded-full px-6 py-2 shadow-soft border border-mutedFg/20">
          <li>
            <a href="#hero" className="hover:text-primary font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:bg-primary/10">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:bg-primary/10">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:bg-primary/10">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-primary font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:bg-primary/10">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:bg-primary/10">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
