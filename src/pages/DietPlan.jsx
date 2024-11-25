import React, { useState, useEffect } from "react";
import axios from "axios";

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Get the token from localStorage
    const userId = localStorage.getItem("userId"); // Get the userId from localStorage

    if (!token || !userId) {
      setError("No user found, please login first.");
      setLoading(false);
      return;
    }

    const fetchDietPlan = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/dietplans/${userId}`, // Use userId in the URL
          {
            headers: { Authorization: `Bearer ${token}` }, // Attach token to request
          }
        );
        setDietPlan(response.data);
      } catch (err) {
        setError("Failed to fetch diet plan.");
      } finally {
        setLoading(false);
      }
    };

    fetchDietPlan();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!dietPlan || dietPlan.length === 0) return <p>No diet plan available.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">
        User Diet Plan
      </h2>
      {dietPlan.map((plan, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Name:</span>
            <span>{plan.name}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Age:</span>
            <span>{plan.age}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Gender:</span>
            <span>{plan.gender}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Weight:</span>
            <span>{plan.weight} kg</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Height:</span>
            <span>{plan.height} cm</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Activity Level:</span>
            <span>{plan.activityLevel}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">
              Dietary Preference:
            </span>
            <span>{plan.dietaryPreference}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Goal:</span>
            <span>{plan.goal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Illness:</span>
            <span>{plan.illness ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Response One:</span>
            <span>{plan.responseone}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-700">Response Two:</span>
            <span>{plan.responsetwo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DietPlan;
