"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaGithub } from "react-icons/fa"; // GitHub icon

export default function SignupAuth() {
  const handleLogin = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    }
  };

  return (
    <div className="flex flex-col space-y-4 mt-4">
      {/* Google Sign Up */}
      <button
        onClick={() => handleLogin("google")}
        className="flex items-center justify-center border hover:border-2 border-gray-500 hover:border-gray-900 rounded-xl p-2 hover:bg-gray-200 transition-all"
      >
        <FcGoogle size={24} />
        <span className="ml-2 font-medium">Sign up with Google</span>
      </button>

      {/* GitHub Sign Up */}
      <button
        onClick={() => handleLogin("github")}
        className="flex items-center justify-center border hover:border-2 border-gray-500 hover:border-gray-900 rounded-xl p-2 hover:bg-gray-200 transition-all"
      >
        <FaGithub size={24} />
        <span className="ml-2 font-medium">Sign up with GitHub</span>
      </button>
    </div>
  );
}
