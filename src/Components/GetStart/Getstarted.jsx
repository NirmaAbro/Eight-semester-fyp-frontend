import React, { useState } from "react";
import { generateDietPlans } from "./api";
import DietPlanList from "./DietPlanList";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // Loader component
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../service/axios";

function Getstarted() {
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activityLevel: "",
    dietaryPreference: "",
    goal: "",
    illness: false,
  });

  const [dietPlans, setDietPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const navigate = useNavigate()

  const dietaryPreferences = [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Ketogenic",
    "Paleo",
    "Gluten-Free",
    "Dairy-Free",
    "Low Carb",
    "Low Fat",
    "Low Sodium",
    "Balanced",
    "Mediterranean",
    "Whole30",
    "Flexitarian",
    "Raw Food",
    "Traditional",
    "Other",
  ];

  const goals = [
    "Weight Loss",
    "Weight Gain",
    "Muscle Gain",
    "Maintenance",
    "Improved Athletic Performance",
    "Healthy Aging",
    "General Health",
    "Heart Health",
    "Digestive Health",
    "Immune Support",
    "Energy Boost",
    "Diabetes Management",
    "Eating Disorder Recovery",
    "Other",
  ];

  const activityLevels = [
    "Sedentary (little or no exercise)",
    "Lightly active (light exercise/sports 1-3 days/week)",
    "Moderately active (moderate exercise/sports 3-5 days/week)",
    "Very active (hard exercise/sports 6-7 days a week)",
    "Extra active (very hard exercise/sports & physical job or training twice a day)",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    if (!isAuthenticated) {
      toast.warn("Please log in before generating a diet plan.");
      navigate("/login");
      return;
    }

    e.preventDefault();

    // Reset previous selections
    setSelectedPlan(null);
    setDietPlans([]);
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token")
      const userData = await axiosInstance.get("/auth/user/", { headers: { Authorization: `Bearer ${token}` } })
      const user = userData.data

      const plans = await generateDietPlans({
        name: user.username,
        age: user.age,
        gender: user.gender,
        weight: user.weight,
        height: user.height,
        activityLevel: formData.activityLevel,
        dietaryPreference: formData.dietaryPreference,
        goal: formData.goal,
        illness: formData.illness,
      });

      console.log(plans);
      const requestBody = {
        user_id: user._id,
        name: user?.username,
        age: user.age,
        gender: user.gender,
        weight: user.weight,
        height: user.height,
        activityLevel: formData.activityLevel,
        dietaryPreference: formData.dietaryPreference,
        goal: formData.goal,
        illness: formData.illness,
        responseone: plans[0],
        responsetwo: plans[1],
      };

      const response = await fetch("http://localhost:8080/api/dietplans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log(response);
      setDietPlans(plans);
      toast.success("Diet plans generated successfully!");
    } catch (error) {
      console.error("Error generating diet plans:", error);
      toast.error("Failed to generate diet plans. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormComplete =
    formData.activityLevel &&
    formData.dietaryPreference &&
    formData.goal;

  return (
    <div className="flex flex-col items-center min-h-screen bg-secondary mb-6">
      <div className="max-w-lg w-full mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          {
            isAuthenticated
              ? "Get Started"
              : "Log in to proceed"
          }

        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Illness */}

          {/* Dietary Preference */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Dietary Preference</label>
            <select
              name="dietaryPreference"
              value={formData.dietaryPreference}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-primary-dark rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              required
            >
              <option value="">Select Dietary Preference</option>
              {dietaryPreferences.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* Goal */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-primary-dark rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              required
            >
              <option value="">Select Goal</option>
              {goals.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* Activity Level */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-primary-dark rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              required
            >
              <option value="">Select Activity Level</option>
              {activityLevels.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="illness"
              checked={formData.illness}
              onChange={handleChange}
              className="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary transition duration-300"
            />
            <label className="text-lg font-medium text-gray-700">Do you have any illnesses?</label>
          </div>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className={`w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center ${!isFormComplete ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleSubmit}
              disabled={!isFormComplete || isLoading}
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : !isAuthenticated ? (
                "Please log in to generate a diet plan"
              ) : (
                "Get Diet Plans"
              )}

            </button>
          </div>
          {/* <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
        </form>
      </div>
      {/* Diet Plans List */}
      <div className="max-w-4xl w-full mx-auto mt-10 p-8 bg-white shadow-md rounded-lg mb-[90px]">
        <DietPlanList
          dietPlans={dietPlans}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
      </div>
    </div>
  );
}

export default Getstarted;
