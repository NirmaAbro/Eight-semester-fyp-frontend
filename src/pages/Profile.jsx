import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Profile({ userId }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileExists, setProfileExists] = useState(true); // Track if profile exists


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/user-profile/${userId}`
        );
        if (response.status === 404) {
          // If profile not found, show message
          setProfileExists(false);
          setLoading(false);
          return;
        }
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setProfileExists(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userId]);

  const ProfileStatus = ({ profileExists }) => {
    // Show toast when profile is created
    useEffect(() => {
      if (!profileExists) {
        toast.success("Profile created successfully!");
      }
    }, [profileExists]);

    if (!profileExists)
      return (
        <div className="text-center text-3xl justify-center items-center m-32 p-8 rounded-lg  bg-gradient-to-r from-black to-green-600 text-white  shadow-lg">
          <h1>Profile not created yet 🙂</h1>
          <button >
            <NavLink
              to="/getstarted"
              className="mt-4 inline-block text-2xl hover:text-blue-300 text-white  px-2 rounded-md"
            >
              Create Profile
            </NavLink>
          </button>

         
        </div>
      );

    return null; // If profile exists, return null (nothing to show)
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div>
      <ProfileStatus profileExists={profileExists} />

      {profileExists && (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            {userData.name}'s Profile
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Age:</strong> {userData.age}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Gender:</strong> {userData.gender}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Weight:</strong> {userData.weight} kg
              </p>
              <p className="text-lg text-gray-700">
                <strong>Height:</strong> {userData.height} cm
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Activity Level:</strong> {userData.activityLevel}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Dietary Preference:</strong>{" "}
                {userData.dietaryPreference}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Goal:</strong> {userData.goal}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Illness:</strong> {userData.illness ? "Yes" : "No"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Diet Plan Details:
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-600">
              {JSON.stringify(userData.planDetails, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
