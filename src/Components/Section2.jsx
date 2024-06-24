import React from "react";
import pic from "../images/ourteam.jpg";
import { TiTick } from "react-icons/ti";

function Section2() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-1/2 mt-20">
        <img
          className="justify-center items-center m-auto w-1/2 h-1/2"
          src={pic}
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-full mt-28">
          <h1 className="text-4xl font-sans text-left font-bold mb-4">
            Smart Recipes,{" "}
            <span className="text-blue-500 justify-start items-start">
              Healthier You
            </span>
          </h1>
          <h6 className="text-xl font-semibold mb-2">Personalized</h6>
          <h6 className="text-xl font-semibold mb-2">Nutrition Plans</h6>
          <h6 className="text-xl font-semibold mb-4">For Your Health Goals</h6>
        </div>

        <p className="text-base mb-2">
          Discover meals tailored to your health goals with our intelligent
          recipe recommendations.
        </p>
        <p className="text-base">
          Achieve a healthier you with personalized nutrition plans. Our
          recommendations ensure you get the right balance of nutrients to
          support your well-being.
        </p>
        <div className="flex w-full m-4">
          <TiTick className="bg-green-500 text-white m-2 text-xl rounded-full" />
          <p className="p-1">
            <span className="font-bold p-1">1,234</span>Healthy Recipes{" "}
          </p>
        </div>
        <div className="w-full">
          <button className="bg-blue-500 text-white font-bold justify-center items-center p-3 rounded-full">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
