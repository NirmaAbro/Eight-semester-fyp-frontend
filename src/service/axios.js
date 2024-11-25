// src/api/axios.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080', // Set your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // If token exists, attach it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // If unauthorized, log the user out
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
