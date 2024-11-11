import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MessagesPage } from "openai/resources/beta/threads/messages.mjs";
import { message } from "antd";

function Sign() {
  const { login } = useContext(AuthContext);  
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    const { email, password } = loginInfo;
    try {
      e.preventDefault();
      const response = await login(loginInfo);
      // await login(loginInfo);
      console.log(response, "login wala console");
      if (response) {
        navigate("/");
      message.success("login successfulyy");
      }else if (response == undefined ){
        message.error(" response undefine");
      }
    } catch (error) {
      console.log(error, "error occur");
      message.error(" bad condition");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-5">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
              className="text-lg p-2 border-b border-black outline-none"
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
              value={loginInfo.password}
              className="text-lg p-2 border-b border-black outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white text-lg rounded-md py-2 mt-3"
          >
            Login
          </button>
          <span className="text-center mt-2">
            Doesn't have an account?
            <Link to="/signup" className="text-blue-500 ml-1">
              Signup
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Sign;
