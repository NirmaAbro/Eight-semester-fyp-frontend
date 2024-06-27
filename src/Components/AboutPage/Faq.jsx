"use client";
import React, { useState } from "react";
const faqData = [
  {
    question: "Q1: What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Q2: Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Q3: Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    question: "Q4: What is the origin of Lorem Ipsum?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
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
          General <span className="text-blue-600">Questions</span>
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
