import axiosClient from "./axiosClient";

export const signup = async (username: string, email: string, password: string) => {
  return axiosClient.post("/auth/signup", { username, email, password });
};

export const login = async (email: string, password: string) => {
  const response = await axiosClient.post("/auth/signin", { email, password });
  if (response.data && response.data.jwt) {
    localStorage.setItem("token", response.data.jwt);
  }
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
    localStorage.removeItem("token");
  };



/**
 * Creates a payment order
 * @param {string} amount - Payment amount
 * @returns {Promise<object>} - API response
 */
export const createPaymentOrder = async (amount: string): Promise<object> => {
  try {
    const response = await axiosClient.post("/api/payment/create-order", { amount });
    return response; // Return the API response
  } catch (error) {
    console.error("createPaymentOrder Error:", error);
    throw error; // Rethrow error for handling in the calling function
  }
};

/**
 * Verifies payment after successful transaction
 * @param {object} paymentData - Payment response from Razorpay
 * @param {string} token - JWT token for authentication
 * @returns {Promise<boolean>} - Verification success/failure
 */
export const verifyPayment = async (paymentData: Object): Promise<boolean> => {
  try {
    const response = await axiosClient.post("/api/payment/verify-payment", {paymentData});
    return response.data;
  } catch (error) {
    console.error("varify Payment Error:", error);
    throw error; // Rethrow error for handling in the calling function
  }
};

/**
 * Saves donation details after successful payment
 * @param {object} donationData - User & donation details
 * @param {string} token - JWT token for authentication
 * @returns {Promise<boolean>} - Whether donation was saved successfully
 */
export const saveDonation = async (donationData: Object): Promise<boolean> => {
  try {
    const response = await axiosClient.post("/api/donation/save", donationData);
    return response.data;
  } catch (error) {
    console.error("save Payment Error:", error);
    throw error; // Rethrow error for handling in the calling function
  }
};
