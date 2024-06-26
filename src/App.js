import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <HeroSection />
        <Section2 />
        <Section3/>

        <Routes>
          {/* <Route index path="/" element={<HeroSection />} /> */}
          <Route path="/home" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/whoweare" element={<Section2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
