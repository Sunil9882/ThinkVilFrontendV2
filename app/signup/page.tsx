"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../api/auth"; // Import signup API function
import AuthPanel from "../components/AuthPanel";
import SocialAuth from "../components/SignupAuth";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password.length < 6) {
      setError("❌ Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password);
      router.push("/login"); // Redirect after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      setError("❌ Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 rounded-xl">
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <AuthPanel isSignup={true} toggleSignup={() => router.push("/login")} />

        {/* Right Panel */}
        <div className="w-full p-10 md:mt-6 sm:mt-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Create Account</h2>
          {/* Social Login */}
          <SocialAuth />
          <p className="text-center font-medium text-xl text-gray-700 mt-2">
            or use your email to registration:
          </p>
          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div>
              <label className="block text-gray-900 ml-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl animate-fadeIn space-y-4 border-2 border-gray-500"
              />
            </div>
            <div>
              <label className="block text-gray-900 ml-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-gray-900 ml-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl border-2 border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white hover:text-black hover:font-semibold font-medium py-2 rounded-xl transition-all text-xl"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}