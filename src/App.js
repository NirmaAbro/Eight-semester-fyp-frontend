import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Menues from "./Components/Menues";
import Singup from "./Components/Auth/SignUp/index";
import Premium from "./Components/Premium";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import SentiHome from "./Sentiment/SentiHome";
import MyDietPlan from "./pages/MyDietPlan";
import DietPlan from "./pages/DietPlan";
import Navbar from "./Components/Home/Navbar";
import AboutHome from "./Components/About/AboutHome";
import Login from "./Components/Auth/Login/index";
import UserProfile from "./Components/Auth/Profile";
import Getstarted from "./Components/GetStart/Getstarted";
import UserDietPlans from "./Components/DietPlan";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/signin" />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/my-diet-plans" element={<UserDietPlans />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/aboutus" element={<AboutHome />} />
          <Route path="/menues" element={<Menues />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/feedback" element={<SentiHome />} />
          <Route path="/mydietplane" element={<MyDietPlan />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/dietplan" element={<DietPlan />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
