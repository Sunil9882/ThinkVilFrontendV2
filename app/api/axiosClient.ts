import axios from "axios";
import { getToken } from "./auth";

const axiosClient = axios.create({
  baseURL: "jarvis-production-1e68.up.railway.app", // Base URL
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
