import React, { useState, useEffect } from "react";
import { HiOutlineMicrophone } from "react-icons/hi";

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    if (text) {
        
      const speechUtterance = new SpeechSynthesisUtterance(text);
      speechUtterance.onend = () => {
        setIsSpeaking(false);
      };
      setUtterance(speechUtterance);
    }
  }, [text]);

const toggleSpeech = () => {
  console.log("toggleSpeech called");
  if (!utterance) {
    console.log("No utterance available");
    return;
  }

  if (isSpeaking) {
    console.log("Stopping speech");
    window.speechSynthesis.cancel();
  } else {
    console.log("Starting speech");
    window.speechSynthesis.speak(utterance);
  }
  setIsSpeaking(!isSpeaking);
  console.log("isSpeaking state toggled");
};

  return (
    <div className="flex items-center justify-center mt-2">
      <button
        onClick={toggleSpeech}
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
        title={isSpeaking ? "Stop Voice" : "Start Voice"}
      >
        <HiOutlineMicrophone className="text-xl" />
      </button>
    </div>
  );
};

export default TextToSpeech;

