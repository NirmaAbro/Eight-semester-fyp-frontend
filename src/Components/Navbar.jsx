
import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { TiThMenu } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-gray-800">
        <div className="flex items-center">
          <a href="#" id="brand" className="flex items-center">
            <img
              src={logo}
              alt=""
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <span className="text-xl font-semibold text-cyan-600">
            RecipeRadar
            </span>
          </a>
        </div>

        {/* Nav menu */}
        <div className={`md:flex gap-8 hidden ${isNavOpen ? 'hidden' : ''}`}>
          <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
            Home
          </a>
          <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
            About Us
          </a>
          <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
            All Recipes
          </a>
          <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
            Premium
          </a>
          {/* Sign in */}
          <button>
            <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
              <FiLogIn className="bg-cyan-600 text-white p-1 rounded-lg" />
            </a>
          </button>
          {/* Sign up */}
          <button>
            <a href="#" className="text-lg font-medium text-gray-200 hover:text-cyan-600">
              <SiGnuprivacyguard className="bg-cyan-600 text-white p-1 rounded-lg" />
            </a>
          </button>
        </div>

        {/* Menu button */}
        <div className="md:hidden">
          <button className="p-2" onClick={handleMenu}>
            {isNavOpen ? (
              <IoMdCloseCircle className="text-gray-200 text-3xl" />
            ) : (
              <TiThMenu className="text-gray-200 text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-end">
          <div className="w-2/3 bg-cyan-600 h-full overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <a href="#" id="brand" className="flex items-center">
                  <img
                    src={logo}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover mr-2"
                  />
                  <span className="text-xl font-semibold text-white">RecipeRadar</span>
                </a>
                <button onClick={handleMenu}>
                  <IoMdCloseCircle className="text-gray-200 text-3xl" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-lg font-medium text-gray-200 hover:text-white">
                  Home
                </a>
                <a href="#" className="text-lg font-medium text-gray-200 hover:text-white">
                  About Us
                </a>
                <a href="#" className="text-lg font-medium text-gray-200 hover:text-white">
                  All Recipes
                </a>
                <a href="#" className="text-lg font-medium text-gray-200 hover:text-white">
                  Premium
                </a>
                <button>
                  <a href="#" className="text-lg font-medium text-cyan-600 hover:bg-white hover:text-cyan-600 py-1 px-2 rounded-lg">
                    Sign In
                  </a>
                </button>
                <button>
                  <a href="#" className="text-lg font-medium text-cyan-600 hover:bg-white hover:text-cyan-600 py-1 px-2 rounded-lg">
                    Sign Up
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
