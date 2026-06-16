import axios from "axios";

const API_URL = "https://customer-churn-platform.onrender.com";

export const predictChurn = async (customerData) => {
  const response = await axios.post(`${API_URL}/predict`, customerData);
  return response.data;
};