import React from "react";
import { GlobalNavbar } from "@/components/ui/GlobalNavbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { NeuralCanvas } from "@/components/dark-tech/NeuralCanvas";
import { TechAbout } from "@/components/dark-tech/TechAbout";
import { StickyProjects } from "@/components/dark-tech/StickyProjects";
import { TechSkills } from "@/components/dark-tech/TechSkills";
import { TechExperience } from "@/components/dark-tech/TechExperience";
import { TechContact } from "@/components/dark-tech/TechContact";
import { TechFooter } from "@/components/dark-tech/TechFooter";
import { CustomCursor } from "@/components/dark-tech/CustomCursor";

export default function App() {
  React.useEffect(() => {
    // 1. Disable browser's automatic scroll restoration on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Strip hash from URL so the browser doesn't automatically jump to #projects on refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 3. Immediately scroll to the top (Home section)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // Backup timer in case the browser attempts late scroll anchoring
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 40);

    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#E1E0CC] selection:bg-[#E1E0CC] selection:text-black overflow-x-clip font-sans">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Global Top Middle Navbar - Stuck to top middle & visible throughout the whole page */}
      <GlobalNavbar />

      {/* 1. Hero Section with Cinematic Zoom Portal Transition */}
      <PrismaHero
        titleLines={["Welcome", "To My PortFolio"]}
        showAsterisk={false}
        badge={null}
        description="Third-year Computer Science student at Hooghly Engineering and Technology College. Crafting production-grade applied AI systems, multimodal intelligence pipelines, and responsive web experiences."
        buttonText="Explore Work"
        buttonHref="#about"
      />

      {/* Modern Silicon Valley Dark-Tech Architecture */}
      <div className="relative">
        {/* Interactive Neural Particles Network */}
        <NeuralCanvas />

        {/* 2. Engineering Profile / About Me */}
        <TechAbout />

        {/* 3. Sticky-Stacking Project Cards (PlantGuardian, PetCare AI, HumanSignal) */}
        <StickyProjects />

        {/* 4. Technical Skill Matrix */}
        <TechSkills />

        {/* 5. Milestones, Internships & IIT Certifications */}
        <TechExperience />

        {/* 6. Communication Console / Contact */}
        <TechContact />

        {/* 7. Comprehensive Silicon Valley Tech Footer */}
        <TechFooter />
      </div>
    </div>
  );
}
