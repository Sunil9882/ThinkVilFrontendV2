"use client"; // Marks this as a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router

const UnitDimension = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();

  // Function to handle button click
  const startSimulation = (message: string, url: string) => {
    setLoading(true);
    setLoadingMessage(message);

    setTimeout(() => {
      router.replace(url); // Prevents going back to the loading screen
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-blue-200 animate-bg px-4 py-6 rounded-2xl">
      {/* Header */}
      <header className="bg-teal-600 w-full text-white text-center py-4 text-3xl font-semibold mt-12 rounded-2xl shadow-lg">
        Unit & Dimension Simulation
      </header>

      {/* Title */}
      <h2 className="text-center text-xl md:text-2xl font-bold mt-4 mb-6">
        How to Use Unit & Dimension - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/OGoetWCRVyM"
          title="Unit & Dimension Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 py-2">
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Simulation is loading...",
              "/All_Simulations/PhysicsSimulations/Unit_Dimension/Unit_Dimension_Sim/index.html"
            )
          }
          className="bg-sky-700 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-sky-500 active:bg-sky-800 transition-all duration-300 hover:scale-95 font-bold"
        >
          Start Simulation
        </button>
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Questions is loading...",
              "/All_Simulations/PhysicsSimulations/Unit_Dimension/Unit_Dimension_Qns/index.html" // Fixed incorrect URL
            )
          }
          className="bg-sky-700 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-sky-500 active:bg-sky-800 transition-all duration-300 hover:scale-95 font-bold"
        >
          ThinkViL Questions
        </button>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center">
          {/* ThinkViL Logo */}
          <h1 className="text-4xl font-bold text-black">ThinkViL</h1>
          <p className="text-lg text-gray-600">{loadingMessage}</p>

          {/* Spinner Animation */}
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

export default UnitDimension;
