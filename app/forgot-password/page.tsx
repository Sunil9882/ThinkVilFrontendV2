"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ A password reset link has been sent to your email.");
      } else {
        setMessage(`❌ ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-green-200">
      {/* Background Animation */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-3xl top-10 left-20 animate-float"></div>
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full blur-3xl bottom-10 right-20 animate-float-reverse"></div>
      </div> */}

      <div className="relative z-10 w-full max-w-md bg-blue-300 p-8 rounded-xl shadow-lg transition-all duration-500 transform">
        <h2 className="text-3xl font-bold text-center text-black">Forgot Password?</h2>
        <p className="text-center text-gray-800 mt-3 font-medium">
          No worries! Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-gray-900 font-medium ml-2 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-xl hover:border-gray-700 text-gray-900 font-medium"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:text-black font-medium py-2 rounded-xl transition-all flex items-center justify-center border-2 border-gray-400 hover:border-gray-800"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="text-center mt-4">
          <a href="/login" className="text-blue-600 hover:underline text-sm font-medium">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
