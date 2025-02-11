import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8 bg-primary shadow-lg rounded-lg text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          Oops! Page Not Found
        </h1>
        <NavLink
          to="/"
          className="inline-block bg-white text-primary font-bold py-3 px-6 rounded transition duration-300"
        >
          Go to Home Page
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
