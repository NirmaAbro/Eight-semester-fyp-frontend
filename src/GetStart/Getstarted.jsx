import React, { useState } from "react";
import { generateDietPlans } from "./api";
import DietPlanList from "./DietPlanList";

function Getstarted() {
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
    e.preventDefault();
    try {
      const plans = await generateDietPlans(formData);

      console.log(plans);

      console.log(formData);
      const requestBody = {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        weight: formData.weight,
        height: formData.height,
        activityLevel: formData.activityLevel,
        dietaryPreference: formData.dietaryPreference,
        goal: formData.goal,
        illness: formData.illness,
        // planDetails:  plans[0],
        responseone:plans[0],
        responsetwo: plans[1],
      };

      // console.log(plans);

      const response = await fetch("http://localhost:8080/api/diet-plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log(response);

      setDietPlans(plans);
      console.log(plans);
    } catch (error) {
      console.error("Error generating diet plans:", error);
    }
  };
  const consolecheck = () => {
    console.log("click button");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 mb-6">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-lg">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Illness</label>
            <input
              type="checkbox"
              name="illness"
              checked={formData.illness}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-lg">Yes</span>
          </div>
          <div>
            <label className="block text-lg">Dietary Preference</label>
            <select
              name="dietaryPreference"
              value={formData.dietaryPreference}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
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
          <div>
            <label className="block text-lg">Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
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
          <div>
            <label className="block text-lg">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={consolecheck}
          >
            Get Diet Plans
            
          </button>
        </form>
      </div>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg w-full">
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


