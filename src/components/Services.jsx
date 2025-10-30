import React, { useEffect } from "react";
import {
  Wrench,
  Layers,
  Package,
  RefreshCcw,
  Activity,
  Thermometer,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: (
      <Wrench className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "Sheet Metal & Weldment Design",
    description:
      "From intricate assemblies to precision sheet metal fabrication, we craft designs that combine strength, efficiency, and manufacturability.",
  },
  {
    icon: (
      <Package className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "3D & 2D Modeling",
    description:
      "Detailed CAD modeling and drafting solutions that bring your concepts to life with engineering precision and visual clarity.",
  },
  {
    icon: (
      <RefreshCcw className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "Reverse Engineering",
    description:
      "We digitize and enhance existing designs, allowing you to improve, reproduce, or analyze components with cutting-edge accuracy.",
  },
  {
    icon: (
      <Layers className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "Structural & Surface Design",
    description:
      "Elegant and functional structures with optimized surfaces — balancing mechanical performance with modern aesthetics.",
  },
  {
    icon: (
      <Activity className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "FEA & Structural Analysis",
    description:
      "Comprehensive Finite Element Analysis for stress, load, and thermal behavior to ensure reliability before manufacturing.",
  },
  {
    icon: (
      <Thermometer className="w-10 h-10 text-red-700 mb-4 transition-transform duration-300 group-hover:-translate-y-2" />
    ),
    title: "Heat Sink & Thermal Design",
    description:
      "Innovative thermal management and heat sink design solutions that enhance energy efficiency and system longevity.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Engineering Expertise <span className="text-red-700">That Delivers</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          We specialize in transforming technical ideas into manufacturable
          designs with precision, innovation, and proven engineering methods.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-left border border-transparent hover:border-red-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-red-600 to-purple-600 transition-opacity duration-500"></div>
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-8 py-4 text-lg bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
