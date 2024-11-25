import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHeartbeat,
  faLaptopCode,
  faHandsHelping,
  faSyncAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// FeatureCard Component
const FeatureCard = React.memo(({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 m-4 transform transition-transform hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="text-primary text-4xl" />
      </div>
      <h3 className="text-2xl font-semibold text-primary dark:text-accent mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-base">{description}</p>
    </div>
  );
});

const Approach = () => {
  // Cards Data with Icons
  const cards = [
    {
      icon: faUtensils,
      title: "Personalized Recommendations",
      description:
        "Our diet plan recommendation engine offers personalized meal suggestions based on your dietary preferences, health goals, and culinary interests. Whether you're looking for healthy options.",
    },
    {
      icon: faHeartbeat,
      title: "Nutritionally Balanced Plans",
      description:
        "We prioritize nutrition by providing balanced meal plans that ensure you receive essential nutrients while enjoying delicious recipes. Each plan is designed to support your well-being and help you maintain a healthy lifestyle.",
    },
    {
      icon: faLaptopCode,
      title: "User-Friendly Interface",
      description:
        "Our platform features a user-friendly interface that makes it easy to browse recipes, save favorites, and track your nutritional intake. We strive to enhance your cooking experience with intuitive tools and helpful tips.",
    },
    {
      icon: faHandsHelping,
      title: "Expert Guidance",
      description:
        "Our team of nutritionists and culinary experts ensure that every meal plan is crafted to meet the highest standards of taste and nutrition, helping you achieve your health goals effectively.",
    },
    {
      icon: faSyncAlt,
      title: "Seamless Integration",
      description:
        "Integrate your meal plans effortlessly with your daily routine using our app's seamless synchronization features, making it easier than ever to stay on track with your dietary objectives.",
    },
    {
      icon: faStar,
      title: "Continuous Support",
      description:
        "Receive ongoing support and updates from our dedicated team, ensuring that your meal planning journey remains smooth, enjoyable, and aligned with your evolving health needs.",
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">
            Our <span className="text-primary">Approach</span>
          </h2>
          <p className="text-lg font-medium text-gray-700 w-full max-w-3xl mx-auto">
            Our approach is centered around delivering a seamless and enjoyable experience for discovering and preparing meals that meet your specific preferences and dietary needs. Here's an overview of our approach:
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
