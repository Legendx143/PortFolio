import React, { useEffect } from "react";
import { JackHeroSection } from "./JackHeroSection";
import { JackMarqueeSection } from "./JackMarqueeSection";
import { JackAboutSection } from "./JackAboutSection";
import { JackServicesSection } from "./JackServicesSection";
import { JackProjectsSection } from "./JackProjectsSection";

export const JackPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Jack -- 3D Creator";
  }, []);

  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen overflow-x-clip font-kanit selection:bg-[#D7E2EA] selection:text-black">
      {/* 1. Hero Section */}
      <JackHeroSection />

      {/* 2. Marquee Section */}
      <JackMarqueeSection />

      {/* 3. About Section */}
      <JackAboutSection />

      {/* 4. Services Section */}
      <JackServicesSection />

      {/* 5. Projects Section with Sticky Stacking Cards */}
      <JackProjectsSection />
    </div>
  );
};

