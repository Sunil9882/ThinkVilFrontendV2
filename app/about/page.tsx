"use client";

import { useEffect, useRef } from "react";
import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import ExploreSection from "../components/ExploreSection";
import ProvideSection from "../components/ProvideSection";
import VisionSection from "../components/VisionSection";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="space-y-2 p-4 md:p-8 lg:p-12">
      
      <HomeSection /> 
      <ExploreSection />
      <ProvideSection />
      <VisionSection />

      <div ref={aboutRef}>
        <AboutSection />
      </div>

    </div>
  );
}
