import React from "react";
import img from "../images/cover.jpg";

function AboutHero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
          About us
        </h1>
        <h6 className="text-white text-lg lg:text-2xl font-semibold">
          Discover personalized diet plans tailored to your needs with our
          advanced recipe recommendation engine.
        </h6>
      </div>
    </div>
  );
}

export default AboutHero;
