import React from "react";
import { FaSearch } from "react-icons/fa";
import backgroundImage from '../images/bg6.jpeg'

function HeroSection() {
  return (
    <div className="flex justify-center items-center h-screen bg-black" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className=" opacity-70 p-9 ">
        <h1 className="text-2xl lg:text-5xl text-cyan-600 font-bold  md:justify-items-start ">
          Discover endless
          <span className="font-bold mt-8 text-white "> culinary , </span>{" "}
          <br />
          delights with RecipeRadar
        </h1>
        <br />
        <div className="flex bg-white p-2 rounded-full ">
          <input
            type="text"
            placeholder="Enter any recipie"
            className="w-full h-11 rounded-xl p-2"
          />
          <FaSearch className="bg-cyan-600 cursor-pointer text-4xl p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
