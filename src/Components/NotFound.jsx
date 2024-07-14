import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <NavLink
          to="/"
          className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300"
        >
          Go to Home Page
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
