"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const MassBlockMotion = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string>("nA2haRjOHUo");
  const [selectedButton, setSelectedButton] = useState<string>("video1");
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const startSimulation = useCallback((message: string, url: string) => {
    setLoading(true);
    setLoadingMessage(message);
    setTimeout(() => {
      router.replace(url);
    }, 1000);
  }, [router]);

  const handleVideoSelection = useCallback((videoId: string, buttonId: string) => {
    setSelectedVideo(videoId);
    setSelectedButton(buttonId);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-green-300 px-4 py-6 rounded-2xl mt-2">
      <header className="bg-blue-500 w-full text-white text-center py-4 sm:py-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-12 md:mt-12 rounded-xl shadow-lg">
        Mass Block Motion Simulation
      </header>

      {/* Video Selection */}
      <div className="w-full mt-4 md:mt-6 px-3 py-2 border border-gray-400 rounded-xl bg-slate-300 shadow-md flex justify-center">
        <div 
          ref={scrollContainerRef} 
          className="flex gap-6 md:gap-10 lg:gap-12 items-center overflow-x-auto scrolling-touch scroll-smooth whitespace-nowrap pb-2"
        >
          {[
            { id: "video1", label: "Simulation Tutorial", videoId: "nA2haRjOHUo" },
            { id: "video2", label: "Educational Videos", videoId: "mtIH0lh8NnU" },
          ].map(({ id, label, videoId }) => (
            <button
              key={id}
              onClick={() => handleVideoSelection(videoId, id)}
              className={`relative px-2 md:px-4 py-1 transition-all duration-300 text-base sm:text-lg md:text-xl ${
                selectedButton === id ? "text-blue-700 font-bold" : "text-gray-800 font-semibold hover:text-black hover:font-bold"
              }`}
            >
              {label}
              <span 
              className={`absolute left-0 bottom-0 h-1 bg-indigo-500 transition-all duration-300 ${selectedButton === id ? "w-full" : "w-0"}`} 
            />
            </button>
          ))}
          
          {/* Suggestion Form Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSezqoZSLECKaWn-MxZa_1hoAV8TNrRZgoX6vWV31fBz-Z_tqQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 text-sm sm:text-base md:text-lg text-gray-800 font-semibold hover:text-white hover:font-bold transition-all duration-300 bg-red-500 rounded-xl hover:bg-red-800 hover:shadow-lg"
          >
            Suggestion Form
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-4 md:mb-6 mt-3 md:mt-4">
        <iframe className="w-full aspect-video rounded-xl shadow-lg" 
          src={`https://www.youtube.com/embed/${selectedVideo}?controls=1&loop=1&playlist=${selectedVideo}`}
          title="Mass Block Motion Tutorial" 
          allowFullScreen>
        </iframe>
      </div>

      {/* Simulation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2 py-2">
        <button
          onClick={() => startSimulation(
            "ThinkViL Simulation is loading...", 
            "/All_Simulations/PhysicsSimulations/Mass_Block_Motion/Mass_Block_Motion_Sim/index.html"
          )}
          className="bg-sky-500 text-white text-base sm:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl shadow-md hover:bg-green-500 transition-all duration-300 font-bold"
        >
          Start Simulation
        </button>
        <button
          onClick={() => startSimulation(
            "ThinkViL Questions is loading...", 
            "/All_Simulations/PhysicsSimulations/Mass_Block_Motion/Mass_Block_Motion_Qns/index.html"
          )}
          className="bg-sky-500 text-white text-base sm:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl shadow-md hover:bg-green-500 transition-all duration-300 font-bold"
        >
          ThinkViL Questions
        </button>
      </div>

      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">ThinkViL</h1>
          <p className="text-sm sm:text-lg text-gray-600">{loadingMessage}</p>
          <div className="mt-4 animate-spin h-8 w-8 sm:h-10 sm:w-10 text-blue-600">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default MassBlockMotion;
