import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sign from "./Components/Sign";
import AboutHero from "./AboutPage/AboutHero";
import Menues from "./Components/Menues";
import Singup from "./Components/Singup";
import Premium from "./Components/Premium";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import RefrshHandler from "./Components/RefrshHandler";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/signin" />;
  };
  return (
    <div>
      <BrowserRouter>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />}></Route>   //mera code , after authenticating th eline is given below  */}
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          {/* <Route path="/" element={<Navigate to="/signin" />}></Route> */}
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutHero />} />
          <Route path="/menues" element={<Menues />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
