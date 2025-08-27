import React from "react";

const projects = [
  { id: 1, title: "Project One", img: "images/project1.jpg" },
  { id: 2, title: "Project Two", img: "images/project2.jpg" },
  { id: 3, title: "Project Three", img: "images/project1.jpg" },
  { id: 4, title: "Project Four", img: "images/project2.jpg" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-subtle-gradient">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-secondary">Our Work</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map(p => (
            <div key={p.id} className="relative flex flex-col w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg  hover:shadow-glow transition-all ">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-brand antialiased">
                  {p.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-mutedFg antialiased">
                  Modern online store with payment integration and inventory management
                </p>
              </div>
              <div className="p-6 pt-0">
                <button type="button" className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
