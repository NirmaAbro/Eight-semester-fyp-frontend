import React, { useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleSuccess } from "./utils";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  // logout functionality
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(""); // Update state to reflect logged out state
    handleSuccess("User Logged Out");
    setTimeout(() => {
      navigate("/signin"); // Navigate to signin page after logout
    }, 1000);
  };

  return (
    <>
      <nav className="p-2 flex justify-between items-center bg-green-500 font-sans sticky top-0 z-40">
        <div className="flex items-center mt-2">
          <IoFastFoodSharp className="text-5xl p-2 bg-green-500 rounded-full" />
          <span className="text-xl font-semibold m-2 font-sans">
            SmartPlate
          </span>
        </div>

        {/* Nav menu */}
        <div className={`lg:flex gap-8 hidden ${isNavOpen ? "hidden" : ""}`}>
          <NavLink
            to="/"
            className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
          >
            Home
          </NavLink>

          <NavLink
            to="/aboutus"
            className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
          >
            About Us
          </NavLink>
          <div>
            <NavLink
              to="/getstarted"
              className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700 pr-4"
            >
              Get Start
            </NavLink>

            <NavLink
              to="/feedback"
              className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
            >
              Feedback
            </NavLink>
          </div>
        </div>

        <div className="m-3 lg:flex hidden">
          {/* Sign in */}
          <button className="bg-green-800 hover:border-b-2 hover:border-green-500 m-2 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full">
            <NavLink to="/signin">SignIn</NavLink>
          </button>
          {/* Sign up */}
          {loggedInUser ? (
            <button
              onClick={handleLogout}
              className="bg-green-800 hover:border-b-2 hover:border-green-500 m-2 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
            >
              Logout
            </button>
          ) : (
            <button
              onclick={console.log("signup clicked ")}
              className="bg-green-800 hover:bg-green-700 m-2 text-white font-bold py-1 px-2 rounded-full"
            >
              <NavLink to="/signup">SignUp</NavLink>
            </button>
          )}
          {/* <button
            onclick={console.log("signup clicked ")}
            className="bg-green-800 hover:bg-green-700 m-2 text-white font-bold py-1 px-2 rounded-full"
          >
            <NavLink to="/signup">SignUp</NavLink>
          </button> */}
        </div>

        {/* Menu button */}
        <div className="lg:hidden">
          <button className="p-2" onClick={handleMenu}>
            {isNavOpen ? (
              <IoMdCloseCircle className="text-green-500 text-3xl" />
            ) : (
              <TiThMenu className="text-green-400 text-3xl hover:border-green-500 mt-2" />
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
                <NavLink to="#" id="brand" className="flex items-center">
                  <IoFastFoodSharp className="text-green-500 text-4xl rounded-full" />
                  <span className="text-xl font-sans text-white hover:border-b-2 hover:border-green-500">
                    SmartPlate
                  </span>
                </NavLink>
                <button onClick={handleMenu}>
                  <IoMdCloseCircle className="text-white text-3xl hover:border-b-2 hover:border-green-500" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/getstarted"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Get Start
                </NavLink>
                <NavLink
                  to="/feedback"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Feedback
                </NavLink>
                <NavLink
                  to="/signin"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
