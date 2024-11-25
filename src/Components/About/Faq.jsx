import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Q1: How does the diet plan recommendation engine work?",
    answer:
      "Our diet plan recommendation engine uses your personal information, such as dietary preferences, health goals, and nutritional needs, to suggest diet plans that best suit you.",
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
      "Q4: Are the diet plans suitable for people with specific health conditions?",
    answer:
      "Absolutely. We take into account any health conditions you have mentioned in your input fields, and our engine recommends diet plans that are safe and beneficial for you.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaQuestionCircle className="text-primary text-4xl" />
          </div>
          <h2 className="text-4xl font-bold text-primary mb-2">
            Frequently Asked Questions?
          </h2>
          <p className="text-gray-600">Find answers to the most common questions</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center p-5 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary w-6 h-6" />
                ) : (
                  <FaChevronDown className="text-primary w-6 h-6" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-${index}`}
                  className="p-5 border-t border-gray-200 bg-gray-50 transition-all duration-300"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
