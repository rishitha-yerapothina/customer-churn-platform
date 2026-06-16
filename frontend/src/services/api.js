import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api";

export const predictChurn = async (customerData) => {
  const response = await axios.post(`${API_URL}/predict`, customerData);
  return response.data;
};