import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMute } from "react-icons/io5";

function DietPlanList({ dietPlans, selectedPlan, setSelectedPlan }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      const speechUtterance = new SpeechSynthesisUtterance(selectedPlan);
      speechUtterance.onend = () => {
        setIsSpeaking(false);
      };
      setUtterance(speechUtterance);
    }
  }, [selectedPlan]);

  const toggleSpeech = () => {
    if (!utterance) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.speak(utterance);
    }
    setIsSpeaking(!isSpeaking);
  };

  const generatePDF = () => {
    if (!selectedPlan) return;

    const doc = new jsPDF();
    doc.text("Selected Diet Plan", 20, 20);
    doc.autoTable({
      startY: 30,
      body: [[selectedPlan]],
    });

    doc.save("SelectedDietPlan.pdf");
  };

  return (
    <div className="mt-6 space-y-4 w-full m-4">
      <h3 className="text-xl font-bold mb-2 block">Generated Diet Plans</h3>
      <div className="flex gap-4 flex-col md:flex-row md:space-x-4">
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
      {selectedPlan && (
        <div className=" justify-center items-center flex">
          <button
            onClick={generatePDF}
            className="mt-4  px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Download Selected Plan as PDF
          </button>
          <div className="flex items-center justify-center mt-2 mx-5">
            <button
              onClick={toggleSpeech}
              className=" text-black focus:outline-none"
              title={isSpeaking ? "Stop Voice" : "Start Voice"}
            >
              {isSpeaking ? (
                <VscUnmute className="text-xl" />
              ) : (
                <IoVolumeMute className="text-xl" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DietPlanList;
