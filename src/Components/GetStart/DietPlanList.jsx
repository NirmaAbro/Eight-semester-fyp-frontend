import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload, FaMicrophone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DietPlanList({ dietPlans, selectedPlan, setSelectedPlan }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      const newUtterance = new SpeechSynthesisUtterance(selectedPlan);
      newUtterance.onend = () => {
        setIsSpeaking(false);
      };
      setUtterance(newUtterance);
    } else {
      setUtterance(null); // Reset utterance when selectedPlan is null
    }
  }, [selectedPlan]);

  const toggleSpeech = () => {
    if (!utterance) {
      toast.error("No text selected for speech.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      toast.info("Speech stopped.");
    } else {
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      toast.success("Speech started.");
    }
  };

  const generatePDF = () => {
    if (!selectedPlan) {
      toast.error("No diet plan selected.");
      return;
    }

    const doc = new jsPDF();
    doc.setFont("Poppins", "bold");
    doc.setFontSize(16);
    doc.text("Selected Diet Plan", 20, 20);
    doc.setFont("Poppins", "normal");
    doc.setFontSize(12);
    doc.text(selectedPlan, 20, 30);
    doc.save("SelectedDietPlan.pdf");
    toast.success("PDF downloaded successfully!");
  };

  return (
    <div className="mt-6 space-y-6 w-full p-4 mb-[20px]">
      <h3 className="text-2xl font-bold text-primary">Generated Diet Plans</h3>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        {dietPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow-md cursor-pointer flex-1 ${selectedPlan === plan
              ? "border-primary bg-primary-light"
              : "border-gray-300 bg-white hover:border-primary"
              } transition duration-300`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h4 className="text-xl font-semibold mb-2 text-primary">Response {index + 1}</h4>
            <p className="text-gray-700 whitespace-pre-line truncate">{plan}</p>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="flex flex-col items-center mt-8 space-y-4">
          <button
            onClick={generatePDF}
            className="flex items-center bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark transition duration-300"
          >
            <FaDownload className="mr-2" />
            Download PDF
          </button>
          <button
            onClick={toggleSpeech}
            className="flex items-center bg-accent text-primary px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition duration-300"
            title={isSpeaking ? "Stop Voice" : "Start Voice"}
          >
            <FaMicrophone className="mr-2" />
            {isSpeaking ? "Stop Voice" : "Start Voice"}
          </button>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default DietPlanList;
