import axios from "axios";
import { getToken } from "./auth";

console.log("url " + process.env.NEXT_PUBLIC_API_URL);

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL
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
