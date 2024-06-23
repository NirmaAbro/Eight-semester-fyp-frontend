import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 text-4xl>hi from sign up</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-blue-600 px-8 py-3 rounded text-white hover:bg-blue-500  "
      >
        Go Back
      </button>
    </div>
  );
}

export default Signup;
