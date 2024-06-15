import React from "react";
import bg from "../images/girl2.png";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center font-sans items-center m-auto">
      <div className="lg:w-1/2 w-full m-7 mt-4 flex flex-col justify-center items-center p-4 order-2 lg:order-1">
        <h1 className="text-2xl  p-2 lg:text-4xl font-sans mb-4 text-center lg:text-left">
          Smart Recipes, Healthier You, Personalized for You
        </h1>
        <h3 className="text-1xl lg:text-2xl font-sans text-center lg:text-left">
          Discover meals tailored to your health goals with our intelligent
          recipe recommendations,
          <span className="text-green-500 font-sans block lg:inline">
            Achieve a healthier you with personalized nutrition plans.
          </span>
        </h3>
      </div>
      <div className="lg:w-1/2 w-full mt-0 flex justify-center items-center order-1 lg:order-2">
        {/* Placeholder for the image */}
        <img src={bg} alt="Hero" className="w-full h-2/3 rounded-full" />
      </div>
    </div>
  );
}

export default HeroSection;
