import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://task4-backend-api.onrender.com",
  withCredentials: true,
});

export default apiRequest;
