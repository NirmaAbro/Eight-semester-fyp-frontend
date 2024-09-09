import React, { useState } from "react";

function DietPlanForm({ selectedPlan }) {
  // State variables for dynamic user input
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("Moderate");
  const [dietaryPreference, setDietaryPreference] = useState("Vegetarian");
  const [goal, setGoal] = useState("Weight Loss");
  const [illness, setIllness] = useState(false);

  const handleSavePlan = () => {
    if (selectedPlan) {
      saveDietPlanToDatabase(selectedPlan);
    }
  };

  // The dynamic save function now uses these state variables
  const saveDietPlanToDatabase = async (plan) => {
    const requestBody = {
      name,
      age,
      gender,
      weight,
      height,
      activityLevel,
      dietaryPreference,
      goal,
      illness,
      planDetails: plan,
    };

    // try {
    //   const response = await fetch("http://localhost:8080/api/diet-plans", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(requestBody),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to save diet plan to the database");
    //   }

    //   const data = await response.json();
    //   console.log("Diet plan saved:", data);
    // } catch (error) {
    //   console.error("Error saving diet plan:", error);
    // }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="Sedentary">Sedentary</option>
            <option value="Moderate">Moderate</option>
            <option value="Active">Active</option>
          </select>
        </div>
        <div>
          <label>Dietary Preference:</label>
          <select
            value={dietaryPreference}
            onChange={(e) => setDietaryPreference(e.target.value)}
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintain">Maintain</option>
          </select>
        </div>
        <div>
          <label>Illness:</label>
          <input
            type="checkbox"
            checked={illness}
            onChange={(e) => setIllness(e.target.checked)}
          />
        </div>
        <button type="button" onClick={handleSavePlan}>
          Save Diet Plan
        </button>
      </form>
    </div>
  );
}

export default DietPlanForm;
