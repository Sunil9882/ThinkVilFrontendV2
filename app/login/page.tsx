"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthPanel from "../components/AuthPanel";
import LoginAuth from "../components/LoginAuth";
import { login, getToken, logout } from "../api/auth";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is logged in and listen for storage changes
  useEffect(() => {
    const checkAuth = () => setToken(getToken());
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(formData.email, formData.password);

      if (response?.token) {
        localStorage.setItem("token", response.token);
        setToken(response.token);
        router.replace("/");
      } else {
        setError("❌ Login failed. Please try again.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "❌ Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    setToken(null);
    router.replace("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 rounded-xl">
      <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        <AuthPanel isSignup={false} toggleSignup={() => router.push("/signup")} />
        <div className="w-full p-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            {token ? "Welcome Back!" : "Sign In"}
          </h2>

          {!token && <LoginAuth />}
          {!token && <p className="text-center text-xl font-medium text-gray-700 mt-2">or use your email</p>}

          {error && <p className="text-red-600 text-center text-lg">{error}</p>}

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
                  className="w-full p-2 border-2 rounded-xl border-gray-700"
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
                  className="w-full p-2 border-2 border-gray-700 rounded-xl"
                />
              </div>
              <div className="text-right">
                <Link href="/forgot-password" className="text-blue-700 hover:underline text-lg font-medium">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-all text-xl" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          ) : (
            <div className="mt-6 text-center">
              <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl transition-all text-xl">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
