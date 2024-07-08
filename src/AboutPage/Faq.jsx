
import React, { useState } from "react";

const faqData = [
  {
    question: "Q1: How does the recipe recommendation engine work?",
    answer:
      "Our recipe recommendation engine uses your personal information, such as dietary preferences, health goals, and nutritional needs, to suggest recipes that best suit you.",
  },
  {
    question: "Q2: Can I customize my diet plan?",
    answer:
      "Yes, you can customize your diet plan by selecting your preferred ingredients, excluding allergens, and adjusting portion sizes to meet your specific dietary requirements.",
  },
  {
    question: "Q3: How do I get started with my diet plan?",
    answer:
      "To get started, simply sign up and fill out your profile with the necessary information. Our engine will then generate a personalized diet plan tailored to your needs.",
  },
  {
    question:
      "Q4: Are the recipes suitable for people with specific health conditions?",
    answer:
      "Absolutely. We take into account any health conditions you have mentioned in your profile, and our engine recommends recipes that are safe and beneficial for you.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-2xl lg:max-w-4xl mx-auto p-6 mt-20">
        <h2 className="text-center text-3xl font-bold mb-4">
          Frequently Asked <span className="text-green-700">Questions</span>
        </h2>
        <p className="text-center text-gray-500 mb-8">ASKED QUESTIONS</p>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-4 border rounded-md shadow-sm text-left bg-white"
            >
              <span>{faq.question}</span>
              <svg
                className={`h-6 w-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 border rounded-md bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
