import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import img1 from "../images/Alogobi.jpeg";
import img2 from "../images/PalakPaneer.jpeg";
import img3 from "../images/daltarka.jpeg";
import img4 from "../images/channamasla.jpeg";
import img5 from "../images/matarpanner.jpeg";
import img6 from "../images/vegepulao.jpeg";

const recipes = [
  {
    id: 1,
    image: img1,
    title: "Aloo Gobi",
    content:
      "Aloo Gobi features potatoes and cauliflower cooked with turmeric, cumin, and other spices, providing a comforting and nutritious dish rich in vitamins and antioxidants",
  },
  {
    id: 2,
    image: img2,
    title: "Palak Paneer",
    content:
      "Palak Paneer features creamy spinach cooked with paneer (Indian cottage cheese) and spices such as fenugreek and cumin, offering a rich source of calcium, vitamins, and iron",
  },
  {
    id: 3,
    image: img3,
    title: "Dal Tadka",
    content:
      "Dal Tadka consists of yellow lentils tempered with spices like mustard seeds and curry leaves, known for its high protein content, fiber, and heart-healthy benefits",
  },
  {
    id: 4,
    image: img4,
    title: "Chana Masala",
    content:
      "Chana Masala is a flavorful chickpea curry cooked in a tomato-based sauce with aromatic spices like coriander and garam masala, providing plant-based protein and beneficial antioxidants    ",
  },
  {
    id: 5,
    image: img5,
    title: "Matar Paneer",
    content:
      "Matar Paneer combines peas and paneer (Indian cottage cheese) in a creamy tomato-based sauce flavored with spices like turmeric and garam masala, offering a blend of protein and essential nutrients",
  },
  {
    id: 6,
    image: img6,
    title: "Vegetable Pulao",
    content:
      "Aromatic and wholesome, Vegetable Pulao combines basmati rice with colorful veggies, seasoned with spices like cumin and turmeric, offering a balanced meal rich in fiber and essential nutrients.",
  },
];

const RecipeList = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          content={recipe.content}
        />
      ))}
    </div>
  );
};

export default RecipeList;
