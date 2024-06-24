import React from "react";
import bg from "../images/girl2.png";
import img from "../images/cover.jpg";

function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{ backgroundImage: `url(${img})` }} // Fix the template literal syntax here
    >
      {/* Gradient overlay for a subtle and visually appealing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent"></div>

      <div className="sm:max-w-md text-center justify-center items-start text-white p-3 m-2 order-2 lg:order-1">
        {/* <h1 className="lg:text-4xl sm:text-3xl sm:leading-8 font-sans font-bold text-xl leading-7 mt-9 text-center"></h1>
        <h3 className="lg:text-xl sm:text-base sm:mt-4 sm:leading-relaxed"></h3> */}
        <h1
          className="font-sans font-bold text-xl leading-7 mt-9 text-start  
               sm:text-3xl sm:leading-10 sm:whitespace-nowrap 
               md:font-extrabold md:-tracking-tight md:text-2xl md:leading-10 md:mt-24 lg:text-4xl"
        >
          Smart Recipes, Healthier You, Personalized
        </h1>
        <h5 className="sm:text-base sm:leading-6 text-start sm:tracking-wider sm:m-2 text-xs md:text-xl  md:mt-7 md:tracking-wide font-semibold">
          Discover meals tailored to your health goals with our intelligent
          recipe recommendations. Achieve a healthier you with personalized
          nutrition plans.
        </h5>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold md:py-2 md:px-4 p-2 rounded mt-8">
          Get Started
        </button>
      </div>

      {/* Improved image placement and styling for better focus */}
      <img
        src={bg}
        alt="Person using app"
        className="lg:absolute lg:inset-y-1/2 lg:right-0 lg:w-1/3 lg:h-auto lg:object-cover hidden lg:block rounded-lg shadow-lg sm:w-1/2 sm:h-1/2"
      />
    </div>
  );
}

export default HeroSection;
