import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-screen  h-screen flex flex-col items-center justify-center  ">
      {/* subContainer */}
      <div>
        <div className="text-4xl ">
          <h1>Login Page</h1>
        </div>
        {/* name input box  */}
        <div className="bg-white flex border-2 border-black rounded m-3 p-1">
          <FaUserCircle className=" " />
          <input
            type="text"
            placeholder="Enter your Name"
            className="pl-2 focus:outline-none"
          />
        </div>
        {/* //email input box  */}
        <div className="bg-white flex border-2 border-black rounded  m-3 p-1 ">
          <MdAttachEmail />
          <input
            type="text"
            placeholder="Enter your Email"
            className="pl-2 focus:outline-none"
          />
        </div>
        {/* password  */}
        <div className="bg-white flex border-2 border-black rounded  m-3 p-1 ">
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="Enter your Password"
            className="pl-2 focus:outline-none "
          />
        </div>

        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-blue-600 px-8 py-3 rounded-lg text-white hover:bg-blue-500 m-3 "
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="bg-blue-600 px-8 py-3 rounded-lg text-white  hover:bg-blue-500 "
        >
          SignUp
        </button>
      </div>
      {/* subContainerEndsHere  */}
    </div>
  );
}

export default Login;
