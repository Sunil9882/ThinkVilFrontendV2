"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthPanel from "../components/AuthPanel";
import SocialAuth from "../components/LoginAuth";
import { login, getToken, logout } from "../api/auth"; // Include logout function

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    setToken(getToken());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      setToken(getToken()); // Update token after login
      router.replace("/");
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "❌ Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout(); // Call logout function
    setToken(null); // Clear token state
    router.replace("/login"); // Redirect to login page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 rounded-xl">
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Panel */}
        <AuthPanel isSignup={false} toggleSignup={() => router.push("/signup")} />

        {/* Right Panel */}
        <div className="w-full p-10 md:mt-6 sm:mt-6">
          <h2 className="text-4xl font-bold text-center text-green-700">
            {token ? "Welcome Back!" : "Sign in to ThinkViL"}
          </h2>

          {/* Social Login */}
          {!token && <SocialAuth />}

          {!token && (
            <p className="text-center text-xl font-medium text-gray-700 mt-2">
              or use your email account:
            </p>
          )}

          {/* Error Message */}
          {error && <p className="text-red-600 text-center text-lg">{error}</p>}

          {/* Login Form (Only Show When Logged Out) */}
          {!token ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-900 ml-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email"
                  className="w-full p-2 border-2 rounded-xl border-gray-500"
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
                  aria-label="Password"
                  className="w-full p-2 border-2 border-gray-500 rounded-xl"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link href="/forgot-password" className="text-blue-700 hover:underline text-lg font-medium">
                  Forgot Password?
                </Link>
              </div>

              {/* Thank You Page*/}
              <div className="text-right">
                <Link href="/thankyou" className="text-blue-700 hover:underline text-lg font-medium">
                  Thank You Page
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-all text-xl hover:text-black hover:font-semibold"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          ) : (
            <div className="mt-6 text-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl transition-all text-xl"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}