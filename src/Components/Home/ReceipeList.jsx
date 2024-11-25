import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from "../../images/Alogobi.jpeg";
import img2 from "../../images/PalakPaneer.jpeg";
import img3 from "../../images/daltarka.jpeg";
import img4 from "../../images/channamasla.jpeg";
import img5 from "../../images/matarpanner.jpeg";
import img6 from "../../images/vegepulao.jpeg";

const recipes = [
    {
        id: 1,
        image: img1,
        title: "Aloo Gobi",
        content:
            "Aloo Gobi features potatoes and cauliflower cooked with turmeric, cumin, and other spices, providing a comforting and nutritious dish rich in vitamins and antioxidants.",
    },
    {
        id: 2,
        image: img2,
        title: "Palak Paneer",
        content:
            "Palak Paneer features creamy spinach cooked with paneer (Indian cottage cheese) and spices such as fenugreek and cumin, offering a rich source of calcium, vitamins, and iron.",
    },
    {
        id: 3,
        image: img3,
        title: "Dal Tadka",
        content:
            "Dal Tadka consists of yellow lentils tempered with spices like mustard seeds and curry leaves, known for its high protein content, fiber, and heart-healthy benefits.",
    },
    {
        id: 4,
        image: img4,
        title: "Chana Masala",
        content:
            "Chana Masala is a flavorful chickpea curry cooked in a tomato-based sauce with aromatic spices like coriander and garam masala, providing plant-based protein and beneficial antioxidants.",
    },
    {
        id: 5,
        image: img5,
        title: "Matar Paneer",
        content:
            "Matar Paneer combines peas and paneer (Indian cottage cheese) in a creamy tomato-based sauce flavored with spices like turmeric and garam masala, offering a blend of protein and essential nutrients.",
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
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpansion = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <div className="flex flex-wrap items-center justify-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-black font-sans font-bold lg:m-[100px] whitespace-nowrap w-full text-center mb-[40px]">
                Learn About Healthier Food
            </h1>

            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 max-w-sm mx-4 my-6"
                >
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-60 object-cover object-center"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                        {/* Show More Button */}
                        <div className="absolute bottom-4 right-4">
                            <button
                                onClick={() => toggleExpansion(recipe.id)}
                                className="flex items-center bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark transition duration-300"
                                aria-label={
                                    expandedCard === recipe.id ? "Show Less" : "Show More"
                                }
                            >
                                {expandedCard === recipe.id ? "Show Less" : "Show More"}
                                {expandedCard === recipe.id ? (
                                    <FaChevronUp className="ml-2" />
                                ) : (
                                    <FaChevronDown className="ml-2" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-primary mb-2">
                            {recipe.title}
                        </h2>
                        <p
                            className={`text-gray-700 text-sm transition-all duration-500 ease-in-out ${expandedCard === recipe.id ? "max-h-full" : "max-h-20 overflow-hidden"
                                }`}
                        >
                            {recipe.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
