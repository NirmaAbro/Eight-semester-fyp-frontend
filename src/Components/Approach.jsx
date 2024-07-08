import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Approach = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev`}
        style={{ ...style, display: "block", left: "-50px" }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4"
        />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-next`}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4"
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Personalized Recommendations",
      description:
        "Our recipe recommendation engine offers personalized meal suggestions based on your dietary preferences, health goals, and culinary interests. Whether you're looking for healthy options.",
    },
    {
      title: "Nutritionally Balanced Plans",
      description:
        "We prioritize nutrition by providing balanced meal plans that ensure you receive essential nutrients while enjoying delicious recipes. Each plan is designed to support your well-being and help you maintain a healthy lifestyle.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Our platform features a user-friendly interface that makes it easy to browse recipes, save favorites, and track your nutritional intake. We strive to enhance your cooking experience with intuitive tools and helpful tips.",
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      {/* Add 'overflow-hidden' class to prevent scrollbar */}
      <h2 className="text-5xl font-bold mb-4 text-start">
        Our <span className="text-green-700">Approach</span>
      </h2>
      <p className="text-start mb-8 text-xl font-semibold">
        Our approach is centered around delivering a seamless and enjoyable
        experience for discovering and preparing meals that meet your specific
        preferences and dietary needs. Here's an overview of our approach:
      </p>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-1">
            <div className="bg-green-600 text-white p-6 rounded-md shadow-md flex flex-col">
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <p className="text-base font-light">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Approach;
