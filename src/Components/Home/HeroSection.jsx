import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAppleAlt, FaHeartbeat, FaLeaf, FaPlay } from "react-icons/fa";
import img from "../../images/cover.jpg"; // Ensure the path is correct

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white p-4">
        {/* Heading */}
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 animate-fadeIn">
          Smart Diet Plan, Healthier You
        </h1>

        {/* Description */}
        <p className="font-medium text-lg sm:text-xl md:text-2xl mb-8 text-left lg:text-center animate-fadeIn delay-200">
          Discover meals tailored to your health goals with our intelligent Diet Plan Recommendation Engine. Achieve a healthier you with personalized nutrition plans.
        </p>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <div className="flex flex-col items-center">
            <FaAppleAlt className="text-3xl mb-2" />
            <span className="text-sm">Balanced Meals</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-3xl mb-2" />
            <span className="text-sm">Heart Health</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLeaf className="text-3xl mb-2" />
            <span className="text-sm">Organic Ingredients</span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          {/* Get Started Button */}
          <button
            className="bg-primary text-secondary justify-center items-center text-center font-bold py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 animate-bounceOnce"
            onClick={() => navigate("/getstarted")}
            aria-label="Get Started with Smart Diet Plan"
          >
            Get Started
          </button>

          {/* Watch Video Button */}
          {/* <button
            className="flex items-center bg-primary text-secondary font-bold py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 animate-bounceOnce"
            onClick={() => navigate("/watch-video")}
            aria-label="Watch Introduction Video"
          >
            <span>Watch Video</span>
            <FaPlay className="ml-2" />
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
