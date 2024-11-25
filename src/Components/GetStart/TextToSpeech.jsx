// src/components/TextToSpeech.js
import React, { useState, useEffect } from "react";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaStop } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    if (text) {
      const speechUtterance = new SpeechSynthesisUtterance(text);
      speechUtterance.onend = () => {
        setIsSpeaking(false);
        toast.info("Voice playback ended.");
      };
      setUtterance(speechUtterance);
    } else {
      setUtterance(null); // Ensure utterance is reset when text is null or undefined
    }
  }, [text]);

  const toggleSpeech = () => {
    if (!utterance) {
      toast.error("No text available to speak.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      toast.info("Voice stopped.");
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.speak(utterance);
      toast.success("Voice started.");
      setIsSpeaking(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <button
        onClick={toggleSpeech}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition duration-300 ${isSpeaking
            ? "bg-red-600 text-white"
            : "bg-primary text-white hover:bg-primary-dark"
          }`}
        title={isSpeaking ? "Stop Voice" : "Start Voice"}
      >
        {isSpeaking ? (
          <FaStop className="w-6 h-6" />
        ) : (
          <HiOutlineMicrophone className="w-6 h-6" />
        )}
      </button>
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
};

export default TextToSpeech;
