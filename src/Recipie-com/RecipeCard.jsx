import React, { useState } from "react";

const RecipeCard = ({ id, image, title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
 
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 max-w-xs mb-4 m-8">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover object-center rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity hover:bg-opacity-30">
          <div className="flex justify-center items-center h-full">
            <button
              onClick={toggleExpansion}
              className="text-white text-sm font-semibold px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full focus:outline-none transition duration-300"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className={`text-gray-700 ${expanded ? "" : "truncate"}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
