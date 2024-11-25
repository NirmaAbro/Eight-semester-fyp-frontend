import React from "react";
import mission from "../../images/taste1.png";
import vision from "../../images/taste2.png";
import { FaBullseye, FaEye } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={mission}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-primary text-3xl mr-3" />
              <h2 className="text-4xl font-bold text-primary">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals to achieve their health goals through intelligent, data-driven diet recommendations. By leveraging artificial intelligence, we aim to offer personalized meal plans that cater to unique dietary preferences, health conditions, and nutritional requirements, ensuring a seamless, user-friendly experience on our platform, SmartPlate Market.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={vision}
              alt="Our Vision"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-4">
              <FaEye className="text-primary text-3xl mr-3" />
              <h2 className="text-4xl font-bold text-primary">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize personalized nutrition by providing easy-to-get, AI-driven diet plans that promote healthy living and long-term wellness for people of all lifestyles and dietary needs.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Mission;
