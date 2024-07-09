// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function Getstarted() {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     weight: "",
//     illness: false,
//   });

//   const dietPlans = [
//     {
//       illness: false,
//       plans: [
//         { diet: "Balanced Diet", recipe: "Grilled Chicken Salad" },
//         { diet: "High Protein Diet", recipe: "Protein Smoothie" },
//       ],
//     },
//     {
//       illness: true,
//       plans: [
//         { diet: "Low Sodium Diet", recipe: "Steamed Vegetables" },
//         { diet: "Low Sugar Diet", recipe: "Fruit Salad" },
//       ],
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     generatePDF();
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const userPlans = dietPlans.find(
//       (plan) => plan.illness === formData.illness
//     ).plans;

//     doc.text("User Information", 20, 20);
//     doc.autoTable({
//       startY: 30,
//       head: [["Field", "Value"]],
//       body: [
//         ["Name", formData.name],
//         ["Age", formData.age],
//         ["Gender", formData.gender],
//         ["Weight", formData.weight],
//         ["Illness", formData.illness ? "Yes" : "No"],
//       ],
//     });

//     doc.text(
//       "Recommended Diet Plans and Recipes",
//       20,
//       doc.autoTable.previous.finalY + 20
//     );
//     doc.autoTable({
//       startY: doc.autoTable.previous.finalY + 30,
//       head: [["Diet Plan", "Recipe"]],
//       body: userPlans.map((plan) => [plan.diet, plan.recipe]),
//     });

//     doc.save("UserInformation.pdf");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-lg">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-lg">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-lg">Gender</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             {/* <option value="Other">Other</option> */}
//           </select>
//         </div>
//         <div>
//           <label className="block text-lg">Weight (kg)</label>
//           <input
//             type="number"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-lg">Any Illness</label>
//           <input
//             type="checkbox"
//             name="illness"
//             checked={formData.illness}
//             onChange={handleChange}
//             className="ml-2"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-green-600 text-white rounded-md"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Getstarted;

import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Getstarted() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    illness: false,
    selectedDiet: "",
  });

  const dietPlans = [
    {
      diet: "Balanced Diet",
      recipes: ["Grilled Chicken Salad", "Vegetable Stir-Fry"],
    },
    {
      diet: "High Protein Diet",
      recipes: ["Protein Smoothie", "Grilled Salmon"],
    },
    {
      diet: "Low Sodium Diet",
      recipes: ["Steamed Vegetables", "Quinoa Salad"],
    },
    {
      diet: "Low Sugar Diet",
      recipes: ["Fruit Salad", "Greek Yogurt with Berries"],
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const userDiet = dietPlans.find(
      (plan) => plan.diet === formData.selectedDiet
    );
    const userRecipes = userDiet ? userDiet.recipes : [];

    doc.text("User Information", 20, 20);
    doc.autoTable({
      startY: 30,
      head: [["Field", "Value"]],
      body: [
        ["Name", formData.name],
        ["Age", formData.age],
        ["Gender", formData.gender],
        ["Weight", formData.weight],
        ["Illness", formData.illness ? "Yes" : "No"],
        ["Selected Diet", formData.selectedDiet],
      ],
    });

    if (userRecipes.length > 0) {
      doc.text("Recommended Recipes", 20, doc.autoTable.previous.finalY + 20);
      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 30,
        head: [["Recipe"]],
        body: userRecipes.map((recipe) => [recipe]),
      });
    }

    doc.save("UserInformation.pdf");
  };

  return (
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
          <label className="block text-lg">Any Illness?</label>
          <input
            type="checkbox"
            name="illness"
            checked={formData.illness}
            onChange={handleChange}
            className="ml-2"
          />
        </div>
        {formData.illness && (
          <div>
            <label className="block text-lg">Select Diet Plan</label>
            <select
              name="selectedDiet"
              value={formData.selectedDiet}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Diet Plan</option>
              {dietPlans.map((plan, index) => (
                <option key={index} value={plan.diet}>
                  {plan.diet}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  );
}

export default Getstarted;
