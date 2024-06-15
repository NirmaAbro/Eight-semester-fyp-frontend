import React from "react";
import { IoFastFood } from "react-icons/io5";

const UpperNav = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="font-bold text-xl flex items-center ">
          <IoFastFood className="bg-green-500 text-3xl hover:text-white rounded-full p-1" />
          <span className="text-white p-2">SmartPalate</span>
          <span className="text-green-500">Market</span>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Buy now
        </button>
      </div>
    </nav>
  );
};

export default UpperNav;
