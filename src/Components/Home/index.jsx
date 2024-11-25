import React from "react";
import HeroSection from "./HeroSection";
import { ToastContainer } from "react-toastify";
import Discover from "./Discover";
import Section3 from "./Section3";
import RecipeList from "./ReceipeList";
import Approach from "./Approach";

function Home() {

  return (
    <>
      <HeroSection />
      <Discover />
      <Section3 />
      <RecipeList />
      <Approach />
      <ToastContainer />
    </>
  );
}

export default Home;
