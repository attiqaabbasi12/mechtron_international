import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Bridge Construction", img: "https://images.unsplash.com/photo-1551761568-5541dc2c3e58" },
  { id: 2, title: "Solar Plant", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231" },
  { id: 3, title: "Smart Building", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e" },
];

const Projects = () => (
  <section id="projects" className="py-16 px-8 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Our <span className="text-red-700">Projects</span></h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p) => (
        <Link
          key={p.id}
          to={`/project/${p.id}`}
          className="block border rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
          <div className="p-4 font-semibold">{p.title}</div>
        </Link>
      ))}
    </div>
  </section>
);

export default Projects;
