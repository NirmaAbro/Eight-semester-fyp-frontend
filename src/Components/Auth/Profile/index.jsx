import React from "react";
import { FaEnvelope, FaUser, FaCalendarAlt, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import useAuth from "../../../hooks/useAuth";

function UserProfile() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl dark:bg-gray-800 rounded-2xl  flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Profile Image and Basic Info */}
                <div className="w-full md:w-1/3 p-8 bg-primary-dark flex flex-col items-center justify-center">
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.username)}&background=random&size=256`}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-primary-dark shadow-lg transform hover:scale-105 transition duration-300"
                    />
                    <h2 className="text-2xl font-semibold text-white mt-4">{user?.username}</h2>
                    <p className="text-accent mt-2">{user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}</p>
                    <Link
                        // to="/edit-profile"
                        className="mt-6 inline-flex items-center bg-accent text-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition duration-300"
                    >
                     welcome
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>

                {/* Detailed Information */}
                <div className="w-full md:w-2/3 p-8 bg-secondary dark:bg-gray-900">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Account Details</h3>
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-start">
                            <FaEnvelope className="text-primary w-6 h-6 mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                            </div>
                        </div>
                        {/* Username */}
                        <div className="flex items-start">
                            <FaUser className="text-primary w-6 h-6 mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Username</h4>
                                <p className="text-gray-600 dark:text-gray-400">{user?.username}</p>
                            </div>
                        </div>
                        {/* Role */}
                        <div className="flex items-start">
                            <FaUserShield className="text-primary w-6 h-6 mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Role</h4>
                                <p className="text-gray-600 dark:text-gray-400">{user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}</p>
                            </div>
                        </div>
                        {/* Account Created At */}
                        <div className="flex items-start">
                            <FaCalendarAlt className="text-primary w-6 h-6 mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Joined</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {dayjs(user?.createdAt).format("MMMM DD, YYYY")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
