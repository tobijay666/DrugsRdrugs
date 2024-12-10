import axios from "axios";
import { API_BASE_URL } from "api"; // Adjust based on your backend's route

// Signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed";
  }
};

// Login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};
