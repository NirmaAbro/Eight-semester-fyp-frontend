// Getstarted.js
import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { generateDietPlans } from "./api";

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
    console.log("Form Data:", formData);
    try {
      const plans = await generateDietPlans(formData);
      console.log("Generated Diet Plans:", plans);
      setDietPlans(plans);
    } catch (error) {
      console.error("Error generating diet plans:", error);
    }
  };

  const generatePDF = () => {
    if (!selectedPlan) return;

    const doc = new jsPDF();
    doc.text("User Information", 20, 20);
    doc.autoTable({
      startY: 30,
      head: [["Field", "Value"]],
      body: [
        ["Name", formData.name],
        ["Age", formData.age],
        ["Gender", formData.gender],
        ["Weight", formData.weight],
        ["Height", formData.height],
        ["Activity Level", formData.activityLevel],
        ["Dietary Preference", formData.dietaryPreference],
        ["Goal", formData.goal],
        ["Illness", formData.illness ? "Yes" : "No"],
      ],
    });

    if (selectedPlan) {
      doc.text("Selected Diet Plan", 20, doc.autoTable.previous.finalY + 20);
      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 30,
        body: [[selectedPlan]],
      });
    }

    doc.save("UserInformation.pdf");
  };

  return (
    <>
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
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Generate Diet Plan
            </button>
          </div>
        </form>
        </div>

        {/* {dietPlans.length > 0 && (
        <div className="mt-6 space-y-4 w-full m-4">
          <h3 className="text-xl font-bold mb-2 block">Generated Diet Plans</h3>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            {dietPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-4 border rounded-md cursor-pointer ${
                  selectedPlan === plan ? "border-blue-600" : "border-gray-300"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h1 className="text-xl p-2">Response {index + 1}</h1>
                <p className="whitespace-pre-line">{plan}</p>
              </div>
            ))}
          </div> */}
        {dietPlans.length > 0 && (
          <div className="mt-6 space-y-4 w-full m-4">
            <h3 className="text-xl font-bold mb-2 block">
              Generated Diet Plans
            </h3>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              {dietPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-md cursor-pointer w-full lg:w-1/2 ${
                    selectedPlan === plan
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <h1 className="text-xl p-2">Response {index + 1}</h1>
                  <p className="whitespace-pre-line">{plan}</p>
                </div>
              ))}
            </div>
            {selectedPlan && (
              <button
                onClick={generatePDF}
                className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Download Selected Plan as PDF
              </button>
            )}
          </div>
        )}
      {/* </div> */}
    </>
  );
}

export default Getstarted;
