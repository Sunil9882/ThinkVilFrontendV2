"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const QuadraticEquation = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();

  // Function to handle button click
  const startSimulation = (message: string, url: string) => {
    setLoading(true);
    setLoadingMessage(message);

    setTimeout(() => {
      router.replace(url); // Prevents users from going back to the loading screen
    }, 1000); // Simulated delay for a smoother transition
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-green-300 animate-bg px-4 py-6 rounded-2xl">
      {/* Header */}
      <header className="bg-blue-500 w-full text-white text-center py-6 text-2xl font-semibold mt-12 rounded-xl shadow-lg">
        Quadratic Equation Simulation
      </header>

      {/* Title */}
      <h2 className="text-center text-xl md:text-2xl font-bold mt-2 mb-6 rounded-xl">
        How to Use Quadratic Equation - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/68k1a0ISGBI"
          title="Quadratic Equation Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 py-2">
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Simulation is loading...",
              "/All_Simulations/MathematicsSimulations/Quadratic_Equation/Quadratic_Equation_Sim/index.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition-all duration-300 hover:scale-95 font-bold"
          aria-label="Start Quadratic Equation Simulation"
        >
          Start Simulation
        </button>
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Questions is loading...",
              "/All_Simulations/MathematicsSimulations/Quadratic_Equation/Quadratic_Equation_Qns/index.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition-all duration-300 hover:scale-95 font-bold"
          aria-label="ThinkViL Quadratic Equation Questions"
        >
          ThinkViL Questions
        </button>
      </div>

      {/* ThinkViL Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center">
          {/* ThinkViL Logo */}
          <h1 className="text-4xl font-bold text-black">ThinkViL</h1>
          <p className="text-lg text-gray-600">{loadingMessage}</p>

          {/* Loading Spinner */}
          <div className="mt-4">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes bgAnimation {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-bg {
            background-size: 300% 300%;
            animation: bgAnimation 10s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default QuadraticEquation;
