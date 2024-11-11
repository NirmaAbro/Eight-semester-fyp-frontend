import React from "react";
import pic from "../images/ourteam.jpg";
import { TiTick } from "react-icons/ti";

function Section2() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-1/2 mt-20">
        <img
          className="justify-center items-center m-auto md:w-1/2 md:h-1/2 w-36 h-36  rounded-xl"
          src={pic}
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <div className="w-full mt-28">
          <h1 className="md:text-4xl text-2xl font-sans text-left font-bold mb-4">
            Smart Recipes,{" "}
            <span className="text-green-500 justify-start items-start">
              Healthier You
            </span>
          </h1>
          <h6 className="md:text-xl font-semibold mb-2 text-sm ">
            Personalized
          </h6>
          <h6 className="md:text-xl font-semibold mb-2 text-sm">
            Nutrition Plans
          </h6>
          <h6 className="md:text-xl font-semibold mb-4 text-sm">
            For Your Health Goals
          </h6>
        </div>

        <p className="md:text-base text-xs  mb-2 tracking-wide">
          Discover meals tailored to your health goals with our intelligent
          Diet Plan recommendation Engine.
        </p>
        <p className="md:text-base text-xs  mb-2 tracking-wide">
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
          <button className="bg-green-500 text-white md:font-bold font-semibold p-1 justify-center items-center md:p-3 rounded-full">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
