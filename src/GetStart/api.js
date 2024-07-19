// // api.js
// export const generateDietPlan = async ({
//   name,
//   age,
//   gender,
//   weight,
//   height,
//   activityLevel,
//   dietaryPreference,
//   goal,
//   illness,
// }) => {
//   const prompt = `
//       Generate a detailed diet plan based on the following input parameters:
//       - Name: ${name}
//       - Age: ${age}
//       - Gender: ${gender}
//       - Weight: ${weight} kg
//       - Height: ${height} cm
//       - Activity Level: ${activityLevel}
//       - Dietary Preference: ${dietaryPreference}
//       - Goal: ${goal}
//       - Illness: ${illness ? "Yes" : "No"}
//       Note: The diet plan should include a total calorie count for the day and have a good balance of macronutrients (carbs, protein, and fat) and micronutrients (vitamins and minerals) based on the input.
//     `;

//   const url = `${process.env.REACT_APP_OPENAI_API_BASE}/openai/deployments/${process.env.REACT_APP_OPENAI_ENGINE}/completions?api-version=${process.env.REACT_APP_OPENAI_API_VERSION}`;

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         // "Content-Type": "application/json", //just ya uncomment krna jab API use kro to ya jabhi comment ki taky koe api use na krsky
//         //  "api-key": process.env.REACT_APP_OPENAI_API_KEY,  // just ya uncomment krna jab API use kro to ya jabhi comment ki taky koe api use na krsky
//       },
//       body: JSON.stringify({
//         prompt: prompt,
//         temperature: 0.5,
//         max_tokens: 150,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data from OpenAI API");
//     }

//     const data = await response.json();
//     return data.choices[0].text.trim();
//   } catch (error) {
//     console.error("Error fetching diet plan:", error);
//     return null;
//   }
// };

// new code

// api.js
export const generateDietPlans = async ({
  name,
  age,
  gender,
  weight,
  height,
  activityLevel,
  dietaryPreference,
  goal,
  illness,
}) => {
  const prompt = `
      Generate a detailed diet plan based on the following input parameters:
      - Name: ${name}
      - Age: ${age}
      - Gender: ${gender}
      - Weight: ${weight} kg
      - Height: ${height} cm
      - Activity Level: ${activityLevel}
      - Dietary Preference: ${dietaryPreference}
      - Goal: ${goal}
      - Illness: ${illness ? "Yes" : "No"}
      Note: The diet plan should include a total calorie count for the day and have a good balance of macronutrients (carbs, protein, and fat) and micronutrients (vitamins and minerals) based on the input.
    `;

  const url = `${process.env.REACT_APP_OPENAI_API_BASE}/openai/deployments/${process.env.REACT_APP_OPENAI_ENGINE}/completions?api-version=${process.env.REACT_APP_OPENAI_API_VERSION}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //just ya uncomment krna jab API use kro to ya jabhi comment ki taky koe api use na krsky
        "api-key": process.env.REACT_APP_OPENAI_API_KEY,
        //  just ya uncomment krna jab API use kro to ya jabhi comment ki taky koe api use na krsky
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 0.5,
        // max_tokens: 300, // Increased max_tokens to get more detailed responses for two plans
        max_tokens: 8, 
        n: 2, // Generate two completions
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from OpenAI API");
    }

    const data = await response.json();
    return data.choices.map((choice) => choice.text.trim());
  } catch (error) {
    console.error("Error fetching diet plans:", error);
    return null;
  }
};
