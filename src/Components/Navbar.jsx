"use client";
import React, { useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-green-500 font-sans sticky top-0 z-40 ">
        <div className="flex items-center mt-2">
          <IoFastFoodSharp className="text-5xl p-2 bg-green-500 rounded-full " />
          <span className="text-xl font-semibold m-2  font-sans">
            SmartPalate
          </span>
        </div>

        {/* Nav menu */}
        <div className={`lg:flex gap-8 hidden ${isNavOpen ? "hidden" : ""}`}>
          <Link className="text-lg font-medium text-black hover:border-b-2 hover:border-green-500">
            Home
          </Link>

          <a
            href="#"
            className="text-lg font-medium text-black hover:border-b-2 hover:border-green-500"
          >
            About Us
          </a>
          <div
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
            className="relative "
          >
            <a
              href="#"
              className="text-lg font-medium text-black  hover:border-b-2 hover:border-black"
            >
              Menus
            </a>
            {isAboutHovered && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-black text-white shadow-lg rounded">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-black  hover:border-b-2 hover:border-black"
                >
                  Menu 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-black  hover:border-b-2 hover:border-black"
                >
                  Menu 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-black  hover:border-b-2 hover:border-black"
                >
                  Menu 3
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-lg font-medium text-black  hover:border-b-2 hover:border-black"
          >
            Premium
          </a>
        </div>

        <div className="m-3 lg:flex hidden ">
          {/* Sign in */}
          <button className="bg-black  hover:border-b-2 hover:border-green-500 m-2 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
            Login
          </button>
          {/* Sign up */}
          <button className="bg-black hover:border-b-2 hover:border-green-500 hover:bg-green-700 m-2 text-white font-bold py-1 px-2 rounded">
            Sign Up
          </button>
        </div>

        {/* Menu button */}
        <div className="lg:hidden">
          <button className="p-2" onClick={handleMenu}>
            {isNavOpen ? (
              <IoMdCloseCircle className="text-gray-400 text-3xl" />
            ) : (
              <TiThMenu className="text-gray-400 text-3xl hover:border-green-500 mt-2" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-end">
          <div className="w-2/3 bg-black h-full overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <a href="#" id="brand" className="flex items-center">
                  <IoFastFoodSharp className="text-green-500 text-4xl rounded-full " />
                  <span className="text-xl font-sans text-white hover:border-b-2 hover:border-green-500">
                    RecipeRadar
                  </span>
                </a>
                <button onClick={handleMenu}>
                  <IoMdCloseCircle className="text-white text-3xl hover:border-b-2 hover:border-green-500 " />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  All Recipes
                </a>
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Premium
                </a>
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
