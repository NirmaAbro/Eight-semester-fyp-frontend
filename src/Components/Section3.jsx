import React from "react";
import recipeIcon1 from "../images/taste1.png";
import recipeIcon2 from "../images/taste2.png";
import recipeIcon3 from "../images/taste6.png";
// import arrow from "../app/arroww.png";

function Section3() {
  return (
    <>
      {/* Centered text */}
      <div className="text-center lg:mt-20 justify-center m-32">
        <h1 className="text-2xl md:text-4xl font-bold mt-48  ">
          Smart Recipes, Healthier You, Personalized
        </h1>
      </div>

      {/* Container for recipe recommendation cards */}
      <div className="justify-center lg:flex m-7 items-center">
        {/* First recipe recommendation */}
        <div className="flex flex-col justify-center items-center mb-4 text-center z-10">
          <div className="h-16 flex lg:flex-row justify-center m-4 items-center rounded-full">
            <img
              src={recipeIcon1}
              alt="Recipe Icon 1"
              className="w-24 h-20 lg:w-44 lg:h-24  rounded-full"
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">Discover Delicious Recipes</h5>
          <p className="text-base">
            Explore a variety of mouth-watering dishes tailored to your taste.
          </p>
        </div>

        {/* Second recipe recommendation */}
        <div className="flex flex-col justify-center items-center mb-4 text-center z-10">
          <div className="h-16 w-16 flex justify-center m-4 items-center rounded-full">
            <img
              src={recipeIcon2}
              alt="Recipe Icon 2"
              className="w-24 h-20 lg:w-44 lg:h-24 rounded-full"
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">
            Nutrition Tailored to Your Goals
          </h5>
          <p className="text-base">
            Achieve your health goals with personalized nutrition plans and
            recipes.
          </p>
        </div>

        {/* Third recipe recommendation */}
        <div className="flex flex-col justify-center items-center mb-4 text-center z-10">
          <div className="h-16 w-16 flex justify-center m-4 items-center rounded-full">
            <img
              src={recipeIcon3}
              alt="Recipe Icon 3"
              className="w-24 h-20 lg:w-44 lg:h-24 rounded-full"
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">
            Personalized Cooking Experience
          </h5>
          <p className="text-base">
            Enjoy a customized cooking journey with recipes tailored just for
            you.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section3;
