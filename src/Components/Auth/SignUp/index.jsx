import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";
import useAuth from "../../../hooks/useAuth";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password, age, gender, weight, height } = signupInfo;

    // Ensure all required fields are filled
    if (!name || !email || !password || !age || !gender || !weight || !height) {
      handleError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await signup({
        username: name,
        email,
        password,
        age,
        gender,
        weight,
        height,
      });
      if (response) {
        handleSuccess("Signup successful!");
        navigate("/login");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center pt-[90px] pb-[60px] bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold mb-6 text-primary">Create an Account</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-1 text-gray-700">
              Name
            </label>
            <input
              id="name"
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-1 text-gray-700">
              Email
            </label>
            <input
              id="email"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-1 text-gray-700">
              Password
            </label>
            <input
              id="password"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="age" className="text-lg mb-1 text-gray-700">
              Age
            </label>
            <input
              id="age"
              onChange={handleChange}
              type="number"
              name="age"
              placeholder="Enter your age..."
              value={signupInfo.age}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-lg mb-1 text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              onChange={handleChange}
              name="gender"
              value={signupInfo.gender}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Weight */}
          <div className="flex flex-col">
            <label htmlFor="weight" className="text-lg mb-1 text-gray-700">
              Weight (kg)
            </label>
            <input
              id="weight"
              onChange={handleChange}
              type="number"
              name="weight"
              placeholder="Enter your weight..."
              value={signupInfo.weight}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Height */}
          <div className="flex flex-col">
            <label htmlFor="height" className="text-lg mb-1 text-gray-700">
              Height (cm)
            </label>
            <input
              id="height"
              onChange={handleChange}
              type="number"
              name="height"
              placeholder="Enter your height..."
              value={signupInfo.height}
              className="w-full text-lg p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className={`bg-primary text-white text-lg py-3 rounded hover:bg-primary-dark transition-colors duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {/* Redirect to Login */}
          <span className="mt-4 text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-primary hover:underline ml-1">
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
