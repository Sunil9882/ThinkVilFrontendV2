
import HomeSection from "./components/HomeSection";
import VisionSection from "@/app/components/VisionSection";
import AboutSection from "@/app/components/AboutSection";
import ExploreSection from "@/app/components/ExploreSection";
import ProvideSection from "./components/ProvideSection";

export default function Home() {
  return (    
    <div className="space-y-2 pt-20">
      <HomeSection /> 
      <ExploreSection />
      <ProvideSection />
      <VisionSection />
      <AboutSection />
    </div>
  );
}
