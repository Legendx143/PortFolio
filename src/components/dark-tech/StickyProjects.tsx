import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { ExternalLink, Github, Eye, X, ArrowUpRight } from "lucide-react";

interface ProjectData {
  number: string;
  category: string;
  name: string;
  tagline: string;
  liveUrl: string;
  githubUrl: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2Tall: string;
  };
  metrics: string[];
}

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    category: "Agronomy AI • Computer Vision",
    name: "PlantGuardian",
    tagline: "Autonomous crop disease detection & 7-stage cultivation guidance system with 98.2% diagnostic accuracy.",
    liveUrl: "https://legendx143.github.io/PortFolio",
    githubUrl: "https://github.com/Legendx143/PlantGuardian",
    images: {
      col1Top: "/images/PlantGuardian/Screenshot 2026-11-04 121013.png",
      col1Bottom: "/images/PlantGuardian/Screenshot 2026-11-04 121610.png",
      col2Tall: "/images/PlantGuardian/Screenshot 2026-11-04 121724.png",
    },
    metrics: ["98.2% Accuracy", "FastAPI Core", "ResNet50 Vision"],
  },
  {
    number: "02",
    category: "Multimodal Clinical Triage",
    name: "PetCare AI",
    tagline: "Synchronous acoustic respiratory analysis and dermatological classification for veterinary triage.",
    liveUrl: "https://legendx143.github.io/PortFolio",
    githubUrl: "https://github.com/Legendx143/PetCare",
    images: {
      col1Top: "/images/PetCare/a.png",
      col1Bottom: "/images/PetCare/Screenshot (884).png",
      col2Tall: "/images/PetCare/Screenshot (885).png",
    },
    metrics: ["Sound + Vision", "Differential Triage", "Real-Time Audio"],
  },
  {
    number: "03",
    category: "Behavioral Telemetry • Privacy",
    name: "HumanSignal",
    tagline: "Zero-keystroke temporal behavioral telemetry engine distinguishing organic interactions with zero PII retention.",
    liveUrl: "https://legendx143.github.io/PortFolio",
    githubUrl: "https://github.com/Legendx143/HumanSignal",
    images: {
      col1Top: "/images/HumanSignal/a.png",
      col1Bottom: "/images/HumanSignal/b.png",
      col2Tall: "/images/HumanSignal/c.png",
    },
    metrics: ["Zero PII Storage", "Temporal Micro-Dynamics", "Browser Agnostic"],
  },
];

interface StickyCardItemProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onOpenLightbox: (img: string, title: string) => void;
}

const StickyCardItem: React.FC<StickyCardItemProps> = ({
  project,
  index,
  totalCards,
  progress,
  onOpenLightbox,
}) => {
  // Target scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Staggered scale range as subsequent cards slide up
  // Card 0 scales when progress is 0.15 -> 0.5
  // Card 1 scales when progress is 0.5 -> 0.85
  // Card 2 remains at scale 1.0
  const rangeStart = (index + 0.3) / totalCards;
  const rangeEnd = Math.min(1, (index + 1.2) / totalCards);

  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, targetScale],
    { clamp: true }
  );

  const opacity = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, index === totalCards - 1 ? 1 : 0.92],
    { clamp: true }
  );

  return (
    <div
      className="sticky w-full"
      style={{
        top: `calc(4.5rem + ${index * 32}px)`,
        zIndex: 10 + index,
        marginBottom: index < totalCards - 1 ? "22vh" : "0px",
      }}
    >
      <motion.div
        style={{
          scale: index === totalCards - 1 ? 1 : scale,
          opacity: index === totalCards - 1 ? 1 : opacity,
          transformOrigin: "top center",
        }}
        className="w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden will-change-transform font-kanit"
      >
        {/* Subtle Ambient Backlight inside the card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        {/* Top row: Number, Category + Project Name, and Ghost Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 sm:pb-7 border-b border-[#D7E2EA]/20 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Huge Number */}
            <span className="text-[2.8rem] sm:text-[4.2rem] md:text-[6rem] lg:text-[7rem] font-black leading-none text-[#D7E2EA] tracking-tighter select-none font-kanit">
              {project.number}
            </span>

            {/* Category and Project Name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-mono">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-kanit">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Button: GitHub Code */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 font-medium text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer font-kanit shadow-md"
              data-cursor="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 md:gap-6 pt-5 sm:pt-6 items-stretch relative z-10">
          
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            {/* Top image */}
            <div
              onClick={() => onOpenLightbox(project.images.col1Top, `${project.name} - Diagnostic Scan`)}
              className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-white/10 group cursor-pointer bg-black/60 shadow-md"
              style={{ height: "clamp(120px, 14vw, 190px)" }}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} view 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono border border-white/20 backdrop-blur-md">
                  <Eye className="w-3.5 h-3.5" /> Enlarge
                </span>
              </div>
            </div>

            {/* Bottom image */}
            <div
              onClick={() => onOpenLightbox(project.images.col1Bottom, `${project.name} - Protocol Telemetry`)}
              className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-white/10 group cursor-pointer bg-black/60 shadow-md"
              style={{ height: "clamp(140px, 17vw, 240px)" }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} view 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono border border-white/20 backdrop-blur-md">
                  <Eye className="w-3.5 h-3.5" /> Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div
              onClick={() => onOpenLightbox(project.images.col2Tall, `${project.name} - Production System`)}
              className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer bg-black/60 shadow-lg h-full min-h-[220px] sm:min-h-[280px]"
            >
              <img
                src={project.images.col2Tall}
                alt={`${project.name} main view`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/80 text-white text-xs font-mono border border-white/20 backdrop-blur-md">
                  <Eye className="w-4 h-4" /> View Full Resolution
                </span>
              </div>

              {/* Bottom Tagline Overlay on Tall Image */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light max-w-lg leading-relaxed">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-mono text-[#E1E0CC]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export const StickyProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the full scroll progress of the sticky projects section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [lightbox, setLightbox] = useState<{ open: boolean; img: string; title: string }>({
    open: false,
    img: "",
    title: "",
  });

  const openLightbox = (img: string, title: string) => {
    setLightbox({ open: true, img, title });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, img: "", title: "" });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-6 sm:-mt-8 pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 font-kanit"
    >
      {/* Section Header with .hero-heading gradient */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D7E2EA] font-mono mb-4 backdrop-blur-md font-kanit">
          Production Systems • 02
        </div>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center font-kanit text-[3.2rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] select-none">
          Project
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#D7E2EA]/75 max-w-2xl font-light leading-relaxed font-kanit">
          Scroll down to experience the sticky-stacking architecture of production-grade computer vision, multimodal diagnostic models, and privacy-first behavioral telemetry.
        </p>
      </div>

      {/* 3 True Sticky-Stacking Project Cards */}
      <div className="relative flex flex-col">
        {PROJECTS.map((project, idx) => (
          <StickyCardItem
            key={project.name}
            project={project}
            index={idx}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
            onOpenLightbox={openLightbox}
          />
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 bg-[#0E0E0C] shadow-2xl flex flex-col"
            >
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/60">
                <span className="text-sm font-mono text-[#D7E2EA] font-kanit">{lightbox.title}</span>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-auto p-2 flex items-center justify-center">
                <img
                  src={lightbox.img}
                  alt={lightbox.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
