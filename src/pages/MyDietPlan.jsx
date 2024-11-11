import React from 'react'

function MyDietPlan() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
          {/* Header */}
          <header className="w-full max-w-4xl flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">My Diet Plan</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Today's Date</span>
              <img
                src="profile-pic.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </div>
          </header>
    
          {/* Nutrition Summary */}
          <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Nutrition Summary</h2>
            <div className="flex justify-between text-gray-600">
              <div>
                <p>Calories</p>
                <p className="font-semibold text-lg">1800 kcal</p>
              </div>
              <div>
                <p>Protein</p>
                <p className="font-semibold text-lg">120 g</p>
              </div>
              <div>
                <p>Fats</p>
                <p className="font-semibold text-lg">70 g</p>
              </div>
              <div>
                <p>Carbs</p>
                <p className="font-semibold text-lg">200 g</p>
              </div>
            </div>
          </section>
    
          {/* Meals */}
          <section className="w-full max-w-4xl">
            {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((meal) => (
              <div key={meal} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">{meal}</h3>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>Food Item 1</li>
                  <li>Food Item 2</li>
                  <li>Food Item 3</li>
                </ul>
              </div>
            ))}
          </section>
    
          {/* Goals Section */}
          <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Diet Goals</h2>
            <p className="text-gray-600">Your goal is to maintain a balanced intake of nutrients and stay within 1800 kcal daily.</p>
          </section>
        </div>
      );
}

export default MyDietPlan

