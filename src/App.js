// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import HeroSection from "./Components/HeroSection";
// import Section2 from "./Components/Section2";
// import Section3 from "./Components/Section3";
// import Sign from "./Components/Sign";
// import AboutHero from "./AboutPage/AboutHero";
// import Menues from "./Menues/Menues";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/home" element={<HeroSection />} />
//           <Route path="/Section2" element={<Section2 />} />
//           <Route path="/Section3" element={<Section3 />} />
//           <Route path="/signin" element={<Sign />} />
//           <Route path="/aboutus" element={<AboutHero />} />
//           <Route path="/menues" element={<Menues />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// gpt code

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Sign from "./Components/Sign";
import AboutHero from "./AboutPage/AboutHero";
import Menues from "./Components/Menues";
import Singup from "./Components/Singup";
import Premium from "./Components/Premium";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/Section2" element={<Section2 />} />
          <Route path="/Section3" element={<Section3 />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutHero />} />
          <Route path="/menues" element={<Menues />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
