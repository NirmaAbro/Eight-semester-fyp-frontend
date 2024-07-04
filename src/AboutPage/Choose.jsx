import React from "react";

const Choose = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-center text-3xl font-bold mb-8">
        Why Choose <span className="text-green-500">Our Recipes</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-8.293a1 1 0 011.414-1.414l1.293 1.293V5a1 1 0 112 0v4.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 w-64">
            Enhanced Recipe Discovery
            </h3>
            <p className="text-center">
            Explore a curated selection of recipes designed to elevate your
              culinary experiences.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 10H4V6h12v8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
            Innovative Recipe Suggestions
            </h3>
            <p className="text-center">
            Discover new and innovative recipe ideas that go beyond
              traditional cooking methods.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm14 0H3v10h14V5zM5 8a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailored Nutrition Plans</h3>
            <p className="text-center">
            Personalized nutrition plans designed to inspire healthy eating
              habits and achieve your wellness goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
