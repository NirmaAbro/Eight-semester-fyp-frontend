// // import React from "react";
// import bg from "../images/girl2.png";
// import img from "../images/cover.jpg";
// // import { Link } from "react-router-dom";
// import { useNavigate, NavLink } from "react-router-dom";
// // import Getstarted from "../GetStart/Getstarted";
// // import Button from "./Button";
// // new code
// import { useState } from "react";
// import { useEffect } from "react";
// import { handleSuccess } from "./utils";

// function HeroSection() {
//   const [loggedInUser, setLoggedInUser] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem("loggedInUser"));
//   }, []);

//   const handleLogout = (e) => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loggedInUser");
//     handleSuccess("User Loggedout");
//     setTimeout(() => {
//       navigate("/signin");
//     }, 1000);
//   };

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-8 overflow-hidden"
//       style={{ backgroundImage: `url(${img})` }} // Fix the template literal syntax here
//     >
//       {/* Gradient overlay for a subtle and visually appealing effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent"></div>

//       <div className="sm:max-w-md text-center justify-center items-start text-white p-3 m-2 order-2 lg:order-1 cursor-pointer">
//         <h1
//           className="font-sans font-bold text-xl leading-7 mt-9 text-start
//                sm:text-3xl sm:leading-10 sm:whitespace-nowrap
//                md:font-extrabold md:-tracking-tight md:text-2xl md:leading-10 md:mt-24 lg:text-4xl"
//         >
//           Smart Recipes, Healthier You, Personalized
//         </h1>
//         <h5 className="sm:text-base sm:leading-6 text-start sm:tracking-wider sm:m-2 text-xs md:text-xl  md:mt-7 md:tracking-wide font-semibold">
//           Discover meals tailored to your health goals with our intelligent
//           recipe recommendations. Achieve a healthier you with personalized
//           nutrition plans.
//         </h5>

//         <div className="justify-center items-center">
//           {loggedInUser ? (
//             <button onClick={handleLogout}  className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full mt-8 lg:px-5 lg:py-3 cursor-pointer">Logout</button>
//           ) : (
//             <button className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full mt-8 lg:px-5 lg:py-3 cursor-pointer">
//               get started
//             </button>
//           )}
//           {/* <h1 className=" text-black">Welcome {loggedInUser}</h1>  */}
//         </div>
//       </div>

//       {/* Improved image placement and styling for better focus */}
//       <img
//         src={bg}
//         alt="Person using app"
//         className="lg:absolute lg:inset-y-1/2 lg:right-0 lg:w-1/3 lg:h-auto lg:object-cover hidden lg:block rounded-lg shadow-lg sm:w-1/2 sm:h-1/2"
//       />
//     </div>
//   );
// }

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../images/girl2.png";
import img from "../images/cover.jpg";
import { handleSuccess } from "./utils";

function HeroSection() {
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
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Gradient overlay for a subtle and visually appealing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent"></div>

      <div className="sm:max-w-md text-center justify-center items-start text-white p-3 m-2 order-2 lg:order-1 cursor-pointer">
        <h1 className="font-sans font-bold text-xl leading-7 mt-9 text-start sm:text-3xl sm:leading-10 sm:whitespace-nowrap md:font-extrabold md:-tracking-tight md:text-2xl md:leading-10 md:mt-24 lg:text-4xl">
          Smart Recipes, Healthier You, Personalized
        </h1>
        <h5 className="sm:text-base sm:leading-6 text-start sm:tracking-wider sm:m-2 text-xs md:text-xl md:mt-7 md:tracking-wide font-semibold">
          Discover meals tailored to your health goals with our intelligent
          recipe recommendations. Achieve a healthier you with personalized
          nutrition plans.
        </h5>

        <div className="justify-center items-center mt-8">
          {loggedInUser ? (
            <button
              onClick={handleLogout}
              className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full lg:px-5 lg:py-3 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full lg:px-5 lg:py-3 cursor-pointer"
              onClick={() => navigate("/getstarted")}
            >
              Get Started
            </button>
          )}
        </div>
      </div>

      {/* Image placement and styling */}
      <img
        src={bg}
        alt="Person using app"
        className="lg:absolute lg:inset-y-1/2 lg:right-0 lg:w-1/3 lg:h-auto lg:object-cover hidden lg:block rounded-lg shadow-lg sm:w-1/2 sm:h-1/2"
      />
    </div>
  );
}

export default HeroSection;
