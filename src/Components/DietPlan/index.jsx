import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { FaTrash, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../service/axios";

function UserDietPlans() {
    const { user, isAuthenticated } = useAuth();
    const [dietPlans, setDietPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch diet plans by user_id
    const fetchDietPlans = async () => {
        if (!user || !isAuthenticated) {
            setError("User is not authenticated.");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(`/api/dietplans/user/${user?._id}`);
            setDietPlans(response.data.map(plan => ({ ...plan, showFullResponseOne: false, showFullResponseTwo: false })));
        } catch (err) {
            console.error("Error fetching diet plans:", err);
            setError(err.response?.data?.message || "Failed to fetch diet plans. Please try again.");
            toast.error(err.response?.data?.message || "Failed to fetch diet plans. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Function to toggle visibility of responses
    const toggleResponse = (planId, responseKey) => {
        setDietPlans(dietPlans.map(plan =>
            plan._id === planId ? { ...plan, [responseKey]: !plan[responseKey] } : plan
        ));
    };

    // Function to delete a specific diet plan by ID
    const deleteDietPlan = async (id) => {
        if (!window.confirm("Are you sure you want to delete this diet plan?")) {
            return;
        }

        try {
            await axiosInstance.delete(`/api/dietplans/${id}`);
            setDietPlans(dietPlans.filter((plan) => plan._id !== id));
            toast.success("Diet plan deleted successfully!");
        } catch (err) {
            console.error("Error deleting diet plan:", err);
            toast.error("Failed to delete diet plan. Please try again.");
        }
    };

    // Function to generate PDF for a diet plan
    const generatePDF = (plan) => {
        const doc = new jsPDF();

        // Setting font and adding title
        doc.setFont("Poppins", "bold");
        doc.setFontSize(18);
        doc.text("Diet Plan", 14, 22);

        // Adding user details
        doc.setFont("Poppins", "normal");
        doc.setFontSize(12);
        doc.text(`Name: ${plan.name}`, 14, 32);
        doc.text(`Age: ${plan.age}`, 14, 40);
        doc.text(`Gender: ${plan.gender}`, 14, 48);
        doc.text(`Weight: ${plan.weight} kg`, 14, 56);
        doc.text(`Height: ${plan.height} cm`, 14, 64);
        doc.text(`Activity Level: ${plan.activityLevel}`, 14, 72);
        doc.text(`Dietary Preference: ${plan.dietaryPreference}`, 14, 80);
        doc.text(`Goal: ${plan.goal}`, 14, 88);
        doc.text(`Illness: ${plan.illness ? "Yes" : "No"}`, 14, 96);

        // Adding diet plan responses
        doc.setFont("Poppins", "bold");
        doc.text("Response One:", 14, 110);
        doc.setFont("Poppins", "normal");
        doc.text(plan.responseone, 14, 120);

        doc.setFont("Poppins", "bold");
        doc.text("Response Two:", 14, 150);
        doc.setFont("Poppins", "normal");
        doc.text(plan.responsetwo, 14, 160);

        // Saving the PDF
        doc.save(`DietPlan_${plan._id}.pdf`);
    };

    // Fetch diet plans when the component mounts or user changes
    useEffect(() => {
        fetchDietPlans();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    // Loader Component
    const Loader = () => (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        </div>
    );

    // Error Component
    const ErrorMessage = ({ message }) => (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-red-500 text-lg">{message}</p>
            <button
                onClick={fetchDietPlans}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
                Retry
            </button>
        </div>
    );

    // Main Render
    return (
        <div className="max-w-6xl mx-auto p-6 bg-secondary rounded-lg shadow-lg mt-10 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Your Diet Plans</h2>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : dietPlans.length === 0 ? (
                <p className="text-center text-gray-700">You have no diet plans yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dietPlans.map((plan) => (
                        <div
                            key={plan._id}
                            className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-2">{plan.name}'s Plan</h3>
                            <p className="text-gray-700 mb-2"><strong>Goal:</strong> {plan.goal}</p>
                            <p className="text-gray-700 mb-4"><strong>Activity Level:</strong> {plan.activityLevel}</p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800">Response One:</p>
                                <p className="text-gray-700">
                                    {plan.showFullResponseOne
                                        ? plan.responseone
                                        : `${plan.responseone.slice(0, 100)}...`}
                                </p>
                                <button
                                    onClick={() => toggleResponse(plan._id, "showFullResponseOne")}
                                    className="text-blue-500 hover:underline"
                                >
                                    {plan.showFullResponseOne ? "See Less" : "See More"}
                                </button>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800">Response Two:</p>
                                <p className="text-gray-700">
                                    {plan.showFullResponseTwo
                                        ? plan.responsetwo
                                        : `${plan.responsetwo.slice(0, 100)}...`}
                                </p>
                                <button
                                    onClick={() => toggleResponse(plan._id, "showFullResponseTwo")}
                                    className="text-blue-500 hover:underline"
                                >
                                    {plan.showFullResponseTwo ? "See Less" : "See More"}
                                </button>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => generatePDF(plan)}
                                    className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
                                >
                                    <FaDownload className="mr-2" />
                                    Download PDF
                                </button>
                                <button
                                    onClick={() => deleteDietPlan(plan._id)}
                                    className="flex items-center px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                                >
                                    <FaTrash className="mr-2" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
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
}

export default UserDietPlans;
