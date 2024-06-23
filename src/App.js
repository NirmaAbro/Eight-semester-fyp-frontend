import React from "react";
import {
  BrowserRouter as Router, // Alias BrowserRouter to Router for clarity
  Routes,
  Route,
} from "react-router-dom";
import { Navbar, HeroSection, About } from "./routes/pages"; // Assuming Footer is imported correctly

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
