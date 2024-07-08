import React from "react";
import mission from "../images/taste1.png";
import vision from "../images/taste2.png";

const Mission = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40">
          <div className="flex justify-center lg:block">
            <img
              src={mission}
              alt=""
              className="sm:w-52 sm:h-40 md:w-52 md:h-40 lg:w-full lg:h-full justify-center"
            />
          </div>
          <div className="flex flex-col ml-0 lg:ml-8">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-700">Mission</span>
            </h2>
            <p className="mb-4 max-w-[100]">
              Welcome to our recipe recommendation engine! Our mission is to
              provide you with personalized and nutritious meal options that
              cater to your dietary preferences and health goals. We aim to make
              cooking enjoyable and health-conscious by offering recipes that
              are easy to prepare and delicious to taste.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 mt-8">
          <div className="flex justify-center lg:block">
            <img
              src={vision}
              alt=""
              className="sm:w-48 sm:h-36 md:w-52 md:h-56 lg:w-full lg:h-full justify-center "
            />
          </div>
          <div className="flex flex-col ml-0 lg:ml-8 lg:order-first">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-700">Vision</span>
            </h2>
            <p className="mb-4 max-w-[100]">
              Our vision is to become your go-to platform for discovering new
              recipes, learning about nutrition, and embracing a healthy
              lifestyle through our curated selection of meal plans and cooking
              tips. We aspire to empower individuals to make informed food
              choices and achieve their wellness goals effortlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
