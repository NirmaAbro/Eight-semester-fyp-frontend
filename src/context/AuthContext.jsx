import { createContext, useCallback, useEffect, useState } from "react";
import axiosInstance from "../service/axios";
import { toast } from "react-toastify";
import { handleErrorApI } from "../Components/utils";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  const logout = useCallback(async () => {
    try {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
    } catch (err) {
      toast.error("logout issue")
    }
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      try {
        if (token) {
          const response = await axiosInstance.get("/auth/user/", { headers: { Authorization: `Bearer ${token}` } })
          setUser(response.data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        handleErrorApI(error)
      }
    }
    fetchUser()
  }, [])

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem("token")
    try {
      if (token) {
        const response = await axiosInstance.get("/auth/user/", { headers: { Authorization: `Bearer ${token}` } })
        setUser(response.data);
        setIsAuthenticated(true);
      }
    } catch (err) {
      handleErrorApI(err)
    }
  }, [])

  const login = useCallback(async (data) => {
    try {
      const { email, password } = data
      const response = await axiosInstance.post('/auth/login', { email, password })
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      await loadUser();
      return response.data
    } catch (err) {
      throw err
    }
  }, [loadUser])



  const signup = useCallback(async (data) => {
    const {
      username,
      email,
      password,
      age,
      gender,
      weight,
      height
    } = data
    try {
      const response = await axiosInstance.post('/auth/signup', {
        email,
        password,
        username,
        age,
        gender,
        weight,
        height
      })
      return response.data;
    } catch (err) {
      logout()
      throw err
    }
  }, [logout])


  const requestOtp = useCallback(async (email) => {
    try {
      const response = await axiosInstance.post('/auth/request-otp', { email });
      return response.data;
    } catch (err) {
      logout()
    }
  }, [logout])

  const verifyOtp = useCallback(async (data) => {
    const { email, otp } = data
    try {
      const response = await axiosInstance.post("/auth/verify-otp", { email, otp })
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data}`)
    }
  }, [])

  const updatepassword = useCallback(async (data) => {
    const { email, newPassword } = data
    try {
      const response = await axiosInstance.post("/auth/update-password", { email, newPassword })
      return response.data
    } catch (error) {
      toast.error(`${error.response.data}`)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ login, isAuthenticated, user, signup, logout, requestOtp, verifyOtp, updatepassword }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;