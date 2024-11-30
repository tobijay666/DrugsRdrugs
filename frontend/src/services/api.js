import axios from "axios";

// needs to be changed if the backend is hosted in local env.
const API_BASE_URL = "http://localhost:82/api"; // Backend base URL

export const fetchHelloMessage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hello`);
    return response.data.message; // Extract "Hello World!"
  } catch (error) {
    console.error("Error fetching Hello World message:", error);
    return "Error fetching message!";
  }
};
