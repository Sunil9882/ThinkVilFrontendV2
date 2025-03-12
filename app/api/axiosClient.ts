import axios from "axios";
import { getToken } from "./auth";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080", // Base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization Token for Authenticated Requests
axiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
