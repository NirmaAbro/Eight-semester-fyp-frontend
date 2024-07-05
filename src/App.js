import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sign from "./Components/Sign";
import AboutHero from "./AboutPage/AboutHero";
import Menues from "./Components/Menues";
import Singup from "./Components/Singup";
import Premium from "./Components/Premium";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutHero />} />
          <Route path="/menues" element={<Menues />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
