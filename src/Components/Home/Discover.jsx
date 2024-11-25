import React from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import pic from "../../images/ourteam.jpg"; // Ensure the path is correct

function Discover() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            className="w-full h-auto rounded-xl shadow-lg"
            src={pic}
            alt="Our Team"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-12">
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary mb-4 animate-fadeIn">
            Smart Recipes, Healthier You
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 animate-fadeIn delay-200">
            Personalized Nutrition Plans
          </h3>

          <p className="text-gray-700 mb-6 animate-fadeIn delay-300">
            Discover meals tailored to your health goals with our intelligent Diet Plan Recommendation Engine. Achieve a healthier you with personalized nutrition plans. Our recommendations ensure you get the right balance of nutrients to support your well-being.
          </p>

          <ul className="mb-6">
            <li className="flex items-center mb-2 animate-fadeIn delay-400">
              <TiTick className="text-primary text-xl mr-2" />
              <span className="font-medium">1,234 Healthy Recipes</span>
            </li>
            <li className="flex items-center mb-2 animate-fadeIn delay-500">
              <TiTick className="text-primary text-xl mr-2" />
              <span className="font-medium">Expert Nutritionists</span>
            </li>
            <li className="flex items-center mb-2 animate-fadeIn delay-600">
              <TiTick className="text-primary text-xl mr-2" />
              <span className="font-medium">Customized Meal Plans</span>
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <button
            className="flex items-center bg-primary text-secondary font-bold py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 animate-bounceOnce"
            onClick={() => navigate("/discover-more")}
            aria-label="Discover More Recipes"
          >
            Discover More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Discover;
