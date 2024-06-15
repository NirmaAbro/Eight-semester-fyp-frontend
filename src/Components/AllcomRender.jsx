import React from "react";
import Navbar from "./Navbar";
import HeroSec from "./HeroSection";
import UpperNav from "./UpperNav";
// import Footer from "./Footer";

function AllcomRender() {
  return (
    <div>
      <UpperNav />
      <Navbar />
      <HeroSec />
      {/* <Footer /> */}
    </div>
  );
}

export default AllcomRender;
