import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import MiniProjects from "./components/MiniProjects/Mini";
import CarouselEffect  from "./components/Carousel/Carousel.jsx"
// import "bootstrap/dist/css/bootstrap.min.css";
import Testimony from "./components/Testimony/Testimony.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      
      <About />
      {/* <CarouselEffect  /> */}
      <Skills />
      <Projects />
      <MiniProjects />
      <Testimony />
      <Contact />
    </div>
  );
}

export default App;
