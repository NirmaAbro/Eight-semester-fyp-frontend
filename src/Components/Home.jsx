import React from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import RecipeList from "../Recipie-com/RecipeList";
import { useNavigate } from "react-router-dom";
// import { handleError, handleSuccess } from "../utils";   coz i dont have use product so , ther eis no need of handleError thats why i have commented on
import { handleSuccess } from "./utils"; //i just need this function thats why i use this here only
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  return (
    <>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <HeroSection />
      <Section2 />
      <Section3 />
      <RecipeList />
      <ToastContainer />
    </>
  );
}

export default Home;
