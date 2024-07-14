// api.js
export const generateDietPlan = async ({
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
        "Content-Type": "application/json",
        "api-key": process.env.REACT_APP_OPENAI_API_KEY,
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from OpenAI API");
    }

    const data = await response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching diet plan:", error);
    return null;
  }
};
