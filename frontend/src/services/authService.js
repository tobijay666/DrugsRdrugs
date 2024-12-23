import axios from "axios";
import { API_BASE_URL } from "./api"; // Adjust based on your backend's route

// Signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    // Include detailed validation error messages if present
    const errorMessage = error.response?.data?.message || "Signup failed";
    throw errorMessage;
  }
};

// Login
export const login = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials
    );

    // // Save the token and role to localStorage
    // localStorage.setItem("token", response.token);
    // localStorage.setItem("role", response.role);

    return response.data; // Pass data back for optional use in the component
  } catch (error) {
    // Include detailed validation error messages if present
    const errorMessage = error.response?.data?.message || "Login failed";
    throw errorMessage;
  }
};
