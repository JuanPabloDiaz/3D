import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Certifications,
  Hero,
  Navbar,
  Tech,
  Footer,
  Works,
  StarsCanvas,
} from "./components"; // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from "./components/Feedbacks";
// import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certifications />
        <Education />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="div relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
