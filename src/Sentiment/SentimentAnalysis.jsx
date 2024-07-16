import React, { useState } from "react";
import Sentiment from "sentiment";
import StarRatings from "react-stars";
import { MdSend } from "react-icons/md";

const sentimentScores = {
  'Marvelous': 5,
  'Excellent': 4,
  'Very Good': 3,
  'Good': 2,
  'Bad': 1,
  'Negative': 0,
};

const SentimentAnalysis = () => {
  const [feedback, setFeedback] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);
  const [sentimentLabel, setSentimentLabel] = useState("");
  const [rating, setRating] = useState(0);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(feedback);

    setSentimentScore(result.score);

    let label = "Neutral";
    if (result.score > 3) {
      label = "Marvelous";
    } else if (result.score > 1) {
      label = "Excellent";
    } else if (result.score > 0) {
      label = "Very Good";
    } else if (result.score === 0) {
      label = "Good";
    } else if (result.score < -1) {
      label = "Bad";
    } else {
      label = "Negative";
    }

    setSentimentLabel(label);
    setRating(sentimentScores[label]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Feedback Sentiment Analysis
        </h2>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          rows="4"
        />
        <button
          onClick={analyzeSentiment}
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <MdSend className="mr-2" /> Analyze
        </button>
        {sentimentScore !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">
              Sentiment Score:{" "}
              <span className="text-blue-600">{sentimentScore}</span>
            </h3>
            <h3 className="text-xl font-semibold">
              Sentiment Label:{" "}
              <span className="text-blue-600">{sentimentLabel}</span>
            </h3>
            <StarRatings
              count={5}
              value={rating}
              size={24}
              edit={false}
              color2={'#ffd700'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
