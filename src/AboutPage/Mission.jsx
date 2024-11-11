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
              Our mission is to empower individuals to achieve their health
              goals through intelligent, data-driven diet recommendations. By
              leveraging artificial intelligence, we aim to offer personalized
              meal plans that cater to unique dietary preferences, health
              conditions, and nutritional requirements, ensuring a seamless,
              user-friendly experience on our platform, SmartPlate Market.
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
              To revolutionize personalized nutrition by providing easy to get
              diet plane, AI-driven diet plans that promote healthy living and
              long-term wellness for people of all lifestyles and dietary needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
