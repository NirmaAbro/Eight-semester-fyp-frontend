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

      <div className="sm:max-w-md text-center text-white p-3 m-2 order-2 lg:order-1">
        {" "}
        <h1 className="lg:text-4xl sm:text-3xl font-bold sm:leading-tight">
          Smart Recipes, Healthier You, Personalized
        </h1>
        <h3 className="lg:text-xl sm:text-base sm:mt-4 sm:leading-relaxed">
          Discover meals tailored to your health goals with our intelligent
          recipe recommendations. Achieve a healthier you with personalized
          nutrition plans.
        </h3>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
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
