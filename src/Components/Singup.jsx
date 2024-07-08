import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true during submission

    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      handleError("Name, email, and password are required");
      setLoading(false); // Reset loading state on error
      return;
    }

    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/signin"); 
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false); // Reset loading state after completion
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Signup</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full text-lg p-2 border-b border-gray-800 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="w-full text-lg p-2 border-b border-gray-800 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="w-full text-lg p-2 border-b border-gray-800 outline-none"
            />
          </div>
          <button
            type="submit"
            className={`bg-green-600 text-white text-lg py-2 rounded mt-2 cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          <span className="mt-2">
            Already have an account?
            <Link to="/login" className="text-blue-600 ml-1">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
