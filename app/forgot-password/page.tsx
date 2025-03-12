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
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-3xl top-10 left-20 animate-float"></div>
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full blur-3xl bottom-10 right-20 animate-float-reverse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-900">Forgot Password?</h2>
        <p className="text-center text-gray-600 mt-3">
          No worries! Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-gray-700 font-medium ml-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 focus:ring focus:ring-blue-300 transition rounded-xl"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-all flex items-center justify-center"
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

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-reverse {
          animation: float-reverse 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
