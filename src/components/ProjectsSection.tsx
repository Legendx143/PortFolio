import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Layers, CheckCircle2, Eye, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { staggerContainer, itemFadeUp, TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  github: string;
  live?: string;
  tags: string[];
  features: string[];
  images: string[];
}

const PROJECTS: Project[] = [
  {
    id: "plantguardian",
    title: "PlantGuardian",
    tagline: "AI Plant-Care & Agronomy Cultivation Assistant",
    category: "Computer Vision & Full-Stack AI",
    description:
      "A comprehensive intelligent plant diagnosis system that combines image and voice recognition for real-time disease detection, localized agronomy AI chat, and personalized seven-stage cultivation schedules using soil, rainfall, and crop parameters.",
    github: "https://github.com/Legendx143/PlantGuardian",
    tags: ["React", "TypeScript", "FastAPI", "Computer Vision", "LLM Integration", "OpenStreetMap", "Tailwind CSS"],
    features: [
      "Image and voice-based disease identification with high accuracy",
      "Interactive AI agronomy chat assistant for farmers & growers",
      "Dynamic 7-stage cultivation plan customized to soil & weather conditions",
      "Geographic location mapping and local climatological recommendations",
    ],
    images: [
      "/images/PlantGuardian/Screenshot 2026-11-04 121013.png",
      "/images/PlantGuardian/Screenshot 2026-11-04 121610.png",
      "/images/PlantGuardian/Screenshot 2026-11-04 121724.png",
      "/images/PlantGuardian/Screenshot 2026-11-04 121810.png",
      "/images/PlantGuardian/Screenshot 2026-11-04 121844.png",
      "/images/PlantGuardian/Screenshot 2026-11-04 121922.png",
    ],
  },
  {
    id: "petcare",
    title: "PetCare AI",
    tagline: "Multimodal Pet-Health Triage System",
    category: "Multimodal AI & Clinical Decision Support",
    description:
      "A clinical decision-support web application for pet owners and veterinary clinics. Ingests text descriptions, audio sounds, and visual symptoms across dynamic timelines to compute ranked diagnostic possibilities, provide explainable triage recommendations, and export vet-ready clinical summaries.",
    github: "https://github.com/Legendx143/Pet_Project",
    tags: ["React", "TypeScript", "FastAPI", "Applied ML", "Supabase", "Audio & Vision AI", "Tailwind CSS"],
    features: [
      "Multimodal input ingestion across text, pet vocal sounds, and symptom photos",
      "Ranked differential triage assessment with explainable confidence indicators",
      "Chronological symptom timeline tracking to monitor pet recovery progression",
      "One-click Vet-Ready Summary PDF export for immediate clinical handoff",
    ],
    images: [
      "/images/PetCare/a.png",
      "/images/PetCare/Screenshot (884).png",
      "/images/PetCare/Screenshot (885).png",
      "/images/PetCare/Screenshot (886).png",
      "/images/PetCare/Screenshot (887).png",
    ],
  },
  {
    id: "humansignal",
    title: "HumanSignal",
    tagline: "Privacy-Conscious Behavioral State Estimation",
    category: "Machine Learning & Human-Computer Interaction",
    description:
      "A privacy-first behavioral ML system that quantifies cognitive overload, sustained focus, and fatigue purely from non-invasive human-computer interaction timing metrics without capturing screen recordings or raw keystrokes.",
    github: "https://github.com/Legendx143/HumanSignal",
    tags: ["Python", "FastAPI", "Random Forest", "Scikit-learn", "Temporal Analysis", "React", "Tailwind CSS"],
    features: [
      "Zero-keystroke-logging privacy architecture for behavioral state monitoring",
      "Trained Random Forest classifier extracting high-dimensional temporal patterns",
      "Live cognitive-fatigue scoreboards and break recommendations",
      "RESTful FastAPI streaming backend with responsive dashboard telemetry",
    ],
    images: [
      "/images/HumanSignal/a.png",
      "/images/HumanSignal/b.png",
      "/images/HumanSignal/c.png",
    ],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenLightbox: (images: string[], initialIdx: number, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenLightbox }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...TRANSITION_APPLE, delay: index * 0.1 }}
      className="relative rounded-3xl border border-white/10 bg-[#10100E] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden group"
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(225, 224, 204, 0.08), transparent 45%)`
            : "none",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-20">
        {/* Text Details Column */}
        <div className={`lg:col-span-5 flex flex-col gap-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1E0CC]/80">
              {project.category}
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#E1E0CC]/80 mt-1.5">{project.tagline}</p>
          </div>

          <p className="text-sm text-[#E1E0CC]/70 leading-relaxed font-light">{project.description}</p>

          {/* Highlights */}
          <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#E1E0CC]/50">
              Core Architecture Highlights
            </span>
            {project.features.map((feat, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E1E0CC]/85 cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={TRANSITION_SPRING}
                className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 text-[#E1E0CC]/90 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={TRANSITION_SPRING}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E1E0CC] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-colors shadow-lg cursor-pointer"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </motion.a>
          </div>
        </div>

        {/* Gallery Column */}
        <div className={`lg:col-span-7 flex flex-col gap-3.5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          {/* Main Visual Display */}
          <div
            onClick={() => onOpenLightbox(project.images, activeIdx, project.title)}
            className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video shadow-2xl group/img cursor-zoom-in"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={project.images[activeIdx]}
                alt={`${project.title} slide ${activeIdx + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom info pill inside preview */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs text-white/90 font-mono z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                {project.title} • {activeIdx + 1} / {project.images.length}
              </span>
              <span className="bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all">
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Click to Expand</span>
              </span>
            </div>
          </div>

          {/* Interactive Thumbnails Carousel */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none items-center">
            {project.images.map((img, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={TRANSITION_SPRING}
                className={`relative rounded-xl overflow-hidden border shrink-0 transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "border-[#E1E0CC] shadow-[0_0_15px_rgba(225,224,204,0.3)] ring-1 ring-[#E1E0CC]"
                    : "border-white/10 opacity-55 hover:opacity-100"
                }`}
                style={{ width: "88px", height: "54px" }}
              >
                <img src={img} alt={`${project.title} thumb ${idx}`} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  // Lightbox modal state
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    images: string[];
    index: number;
    title: string;
  }>({
    open: false,
    images: [],
    index: 0,
    title: "",
  });

  const openLightbox = (images: string[], initialIdx: number, title: string) => {
    setLightbox({ open: true, images, index: initialIdx, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, open: false }));
  };

  const nextLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  const prevLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <section id="projects" className="py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center text-center mb-20"
      >
        <motion.div
          variants={itemFadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md"
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          Featured Work
        </motion.div>

        <motion.h2
          variants={itemFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E1E0CC]"
        >
          Selected Projects
        </motion.h2>

        <motion.p variants={itemFadeUp} className="mt-3 text-[#E1E0CC]/60 max-w-xl text-sm sm:text-base font-light">
          Production systems integrating computer vision architectures, multimodal diagnostics, and non-invasive machine learning telemetry.
        </motion.p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpenLightbox={openLightbox} />
        ))}
      </div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={TRANSITION_APPLE}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-950 max-h-[80vh] flex items-center justify-center">
                <img
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.title} view`}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right Nav Buttons */}
                {lightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={prevLightbox}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextLightbox}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between w-full text-xs font-mono text-white/70 px-2">
                <span>{lightbox.title}</span>
                <span>
                  Slide {lightbox.index + 1} of {lightbox.images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
