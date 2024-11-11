import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sign from "./Components/Sign";
import AboutHome from "./AboutPage/AboutHome";
import Menues from "./Components/Menues";
import Singup from "./Components/Singup";
import Premium from "./Components/Premium";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import SentiHome from "./Sentiment/SentiHome";
import RefrshHandler from "./Components/RefrshHandler";
import Getstarted from "./GetStart/Getstarted";
import UpperNav from "./Components/UpperNav";
import { useState } from "react";
import MyDietPlan from "./pages/MyDietPlan";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/signin" />;
  };
  return (
    <div>
      <BrowserRouter>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <UpperNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />}></Route>   //mera code , after authenticating th eline is given below  */}
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/" element={<Navigate to="/signin" />}></Route>
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutHome />} />
          <Route path="/menues" element={<Menues />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/feedback" element={<SentiHome />} />
          <Route path="/mydietplane" element={<MyDietPlan />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
