import axios from "axios";
import { getToken } from "./auth";

console.log("url " + process.env.NEXT_PUBLIC_API_BASE_URL);
console.log("url " + process.env.NEXT_PUBLIC_API_GOOGLE_CLIENT_ID);
console.log("url " + process.env.NEXT_PUBLIC_API_REDIRECT_URI);

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Base URL
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
