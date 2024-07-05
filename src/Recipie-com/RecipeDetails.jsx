import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{recipe.title}</h2>
      <p>{recipe.content}</p>
    </div>
  );
};

export default RecipeDetails;
