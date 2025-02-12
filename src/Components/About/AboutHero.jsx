import React from "react";
import img from "../../images/cover.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function AboutHero() {

  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-4 animate-fade-in-down">
          About Us
        </h1>
        <p className="text-lg lg:text-2xl text-secondary mb-8 animate-fade-in-up">
          Discover personalized diet plans tailored to your needs with our advanced diet plan recommendation engine.
        </p>
        <Link
          to="/getstarted"
          className="inline-flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-accent-dark transition duration-300 animate-bounce"
        >
          Get Started
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default AboutHero;
