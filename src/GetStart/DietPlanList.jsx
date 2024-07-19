// DietPlanList.js
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function DietPlanList({ dietPlans, selectedPlan, setSelectedPlan, formData }) {
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
    <div className="mt-6 space-y-4 w-full m-4">
      <h3 className="text-xl font-bold mb-2 block">Generated Diet Plans</h3>
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {dietPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-4 border rounded-md cursor-pointer w-full lg:w-1/2 ${
              selectedPlan === plan ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h1 className="text-xl p-2">Response {index + 1}</h1>
            <p className="whitespace-pre-line">{plan}</p>
          </div>
        ))}
      </div>
      <div className=" justify-center items-center flex">
      {selectedPlan && (
        <button
          onClick={generatePDF}
          className="mt-4  px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Download Selected Plan as PDF
        </button>
      )}
      </div>
      
    </div>
  );
}

export default DietPlanList;

