import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { handleErrorApI, handleSuccess } from "../../utils";
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        try {
            const response = await login({ email, password });
            if (response) {
                handleSuccess("Login Successfully");
                navigate('/');
            }
        } catch (error) {
            handleErrorApI(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">Welcome Back</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={loginInfo.email}
                                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <FaLock className="text-gray-500 mr-3" />
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={loginInfo.password}
                                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-md py-3 mt-5 transition duration-300"
                    >
                        Login
                    </button>
                    <span className="text-center mt-4 text-gray-600">
                        Don't have an account?
                        <Link to="/signup" className="text-indigo-500 ml-1 hover:underline">
                            Sign up
                        </Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;
