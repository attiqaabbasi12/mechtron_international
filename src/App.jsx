import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Reviews />
              <Footer />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
