// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from "../service/axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch user data if there's a token on initial load
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
     
      if (token) {
        try {
          const response = await axiosInstance.get('/auth/user');
          setUser(response.data.user);
          setIsAuthenticated(true);
          console.log(response.data,"response wala console");
        } catch (error) {
          console.error(error);
          signOut();
        }
      }
    };
    fetchUser();
  }, []);

  // Login function
  const login = async (loginInfo) => {
    try {
        
      const response = await axiosInstance.post('/auth/login', loginInfo);
      localStorage.setItem('token', response.data.jwtToken);
      console.log(response.data);
      setUser(response.data);
      setIsAuthenticated(true);
      return response.data;
    
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Signup function
  const signup = async (email, password) => {
    try {
      const response = await axiosInstance.post('/auth/signup', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  // Sign out function
  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
