"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../api/auth"; // Import signup API function
import AuthPanel from "../components/AuthPanel";
import SignupAuth from "../components/SignupAuth";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (err) {
      console.error("Signup error:", err);
      setError(err?.message || "❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <AuthPanel isSignup={true} toggleSignup={() => router.push("/login")} />

        {/* Right Panel */}
        <div className="w-full p-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">Create Account</h2>

          {/* Social Login */}
          <SignupAuth />
          <p className="text-center font-medium text-xl text-gray-700 mt-2">or use your email to register</p>

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
                disabled={loading}
                aria-label="Enter your name"
                className="w-full p-2 rounded-xl border-2 border-gray-700 disabled:bg-gray-200"
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
                disabled={loading}
                aria-label="Enter your email"
                className="w-full p-2 border-2 border-gray-700 rounded-xl disabled:bg-gray-200"
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
                disabled={loading}
                aria-label="Enter your password"
                className="w-full p-2 rounded-xl border-2 border-gray-700 disabled:bg-gray-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-xl transition-all text-xl disabled:bg-green-400"
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
