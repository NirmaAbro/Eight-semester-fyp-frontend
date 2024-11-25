import React from "react";
import { useNavigate } from "react-router-dom";
import recipeIcon1 from "../../images/taste1.png";
import recipeIcon2 from "../../images/taste2.png";
import recipeIcon3 from "../../images/taste6.png";
import { FaArrowRight } from "react-icons/fa";

function Section3() {
  const navigate = useNavigate();

  const features = [
    {
      icon: recipeIcon1,
      title: "Discover Delicious Recipes",
      description: "Explore a variety of mouth-watering dishes tailored to your taste.",
    },
    {
      icon: recipeIcon2,
      title: "Nutrition Tailored to Your Goals",
      description: "Achieve your health goals with personalized nutrition plans and recipes.",
    },
    {
      icon: recipeIcon3,
      title: "Personalized Cooking Experience",
      description: "Enjoy a customized cooking journey with recipes tailored just for you.",
    },
  ];

  const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 m-4 transition-transform transform hover:scale-105 animate-fadeIn">
      <div className="w-24 h-24 mb-4 flex items-center justify-center bg-primary rounded-full">
        <img src={icon} alt={`${title} Icon`} className="w-16 h-16 object-contain" />
      </div>
      <h5 className="text-xl font-bold mb-2 text-primary">{title}</h5>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );

  return (
    <section className="py-20 bg-secondary">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary animate-fadeIn">
          Smart Recipes, Healthier You, Personalized
        </h1>
      </div>

      {/* Feature Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Section3;
