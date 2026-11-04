import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Eye,
  X,
  Activity,
  Cpu,
  Brain,
  ShieldCheck,
  Stethoscope,
  Leaf,
  ChevronRight,
} from "lucide-react";
import { TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";
import { assetUrl } from "@/utils/assetUrl";

export const TechProjects: React.FC = () => {
  const [plantImgIdx, setPlantImgIdx] = useState(0);
  const [petImgIdx, setPetImgIdx] = useState(0);
  const [humanImgIdx, setHumanImgIdx] = useState(0);

  const [lightbox, setLightbox] = useState<{ open: boolean; img: string; title: string }>({
    open: false,
    img: "",
    title: "",
  });

  const plantImages = [
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121013.png"),
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121610.png"),
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121724.png"),
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121810.png"),
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121844.png"),
    assetUrl("/images/PlantGuardian/Screenshot 2026-11-04 121922.png"),
  ];

  const petImages = [
    assetUrl("/images/PetCare/a.png"),
    assetUrl("/images/PetCare/Screenshot (884).png"),
    assetUrl("/images/PetCare/Screenshot (885).png"),
    assetUrl("/images/PetCare/Screenshot (886).png"),
    assetUrl("/images/PetCare/Screenshot (887).png"),
  ];

  const humanImages = [
    assetUrl("/images/HumanSignal/a.png"),
    assetUrl("/images/HumanSignal/b.png"),
    assetUrl("/images/HumanSignal/c.png"),
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          Production Engineering • 02
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans">
          Selected AI Systems
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#E1E0CC]/70 max-w-2xl font-light">
          Real-world applications combining computer vision algorithms, multimodal triage engines, and low-latency APIs.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ============================================================== */}
        {/* CARD 1: PLANTGUARDIAN (Primary Flagship Bento - 12 cols)       */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={TRANSITION_APPLE}
          className="lg:col-span-12 rounded-3xl border border-white/10 bg-[#0E0E0C] p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Leaf className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#E1E0CC]/80">
                  Agronomy AI • Computer Vision
                </span>
                <span className="ml-auto text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  98.2% Accuracy
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  PlantGuardian
                </h3>
                <p className="text-sm font-medium text-emerald-300 mt-1">
                  AI Plant-Care & Agronomy Cultivation Assistant
                </p>
              </div>

              <p className="text-sm text-[#E1E0CC]/75 leading-relaxed font-light">
                Full-stack autonomous crop and plant assistant combining image recognition and voice prompts for instant disease classification, interactive AI agronomy chat, and personalized 7-stage cultivation calendars driven by soil and geographic location.
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
                {[
                  "Dual Image/Voice disease diagnostic pipeline",
                  "Personalized 7-stage crop cultivation plans",
                  "Real-time Agronomy LLM consulting agent",
                  "OpenStreetMap geolocation & micro-climate analysis",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#E1E0CC]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["React", "TypeScript", "FastAPI", "Computer Vision", "LLM Integration", "OpenStreetMap", "Tailwind CSS"].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[#E1E0CC]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-3">
                <a
                  href="https://github.com/Legendx143/PlantGuardian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E1E0CC] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-colors shadow-lg cursor-pointer"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </div>

            {/* Right Media Display */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div
                onClick={() =>
                  setLightbox({
                    open: true,
                    img: plantImages[plantImgIdx],
                    title: `PlantGuardian — Slide ${plantImgIdx + 1}`,
                  })
                }
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video shadow-2xl cursor-zoom-in group/img"
              >
                <img
                  src={plantImages[plantImgIdx]}
                  alt="PlantGuardian Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Simulated HUD Indicator */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-emerald-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  MODEL_INFERENCE: READY
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs font-mono text-white/80">
                  <span className="bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
                    Slide {plantImgIdx + 1} of {plantImages.length}
                  </span>
                  <span className="bg-black/60 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Full Res
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {plantImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPlantImgIdx(idx)}
                    className={`relative rounded-xl overflow-hidden border shrink-0 transition-all ${
                      plantImgIdx === idx ? "border-[#E1E0CC] scale-105 shadow-md" : "border-white/10 opacity-55 hover:opacity-100"
                    }`}
                    style={{ width: "80px", height: "50px" }}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* CARD 2: PETCARE AI (Bento Column - 6 cols)                    */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={TRANSITION_APPLE}
          className="lg:col-span-6 rounded-3xl border border-white/10 bg-[#0E0E0C] p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-sky-500/40 transition-colors group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Stethoscope className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E1E0CC]/80">
                Multimodal AI Triage
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PetCare AI</h3>
            <p className="text-xs sm:text-sm font-medium text-sky-300 mt-1 mb-3">
              Multimodal Pet-Health Decision Support
            </p>

            <p className="text-sm text-[#E1E0CC]/75 leading-relaxed font-light mb-4">
              Combines text, audio vocalizations, and symptom photos to compute ranked diagnostic differentials, explainable triage urgency, and one-click vet-ready clinical summaries.
            </p>

            {/* Interactive Preview Container */}
            <div
              onClick={() =>
                setLightbox({
                  open: true,
                  img: petImages[petImgIdx],
                  title: `PetCare AI Preview ${petImgIdx + 1}`,
                })
              }
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video shadow-xl cursor-zoom-in group/img mb-3"
            >
              <img
                src={petImages[petImgIdx]}
                alt="PetCare Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-1 border border-white/10">
                <Eye className="w-3 h-3" /> Expand
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none mb-4">
              {petImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setPetImgIdx(idx)}
                  className={`relative rounded-lg overflow-hidden border shrink-0 transition-all ${
                    petImgIdx === idx ? "border-[#E1E0CC] scale-105" : "border-white/10 opacity-55 hover:opacity-100"
                  }`}
                  style={{ width: "70px", height: "44px" }}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {["React", "FastAPI", "Scikit-Learn", "Supabase", "Audio AI"].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#E1E0CC]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-white/10">
            <a
              href="https://github.com/Legendx143/Pet_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-sky-300 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub Repository <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* CARD 3: HUMANSIGNAL (Bento Column - 6 cols)                   */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={TRANSITION_APPLE}
          className="lg:col-span-6 rounded-3xl border border-white/10 bg-[#0E0E0C] p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-purple-500/40 transition-colors group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Brain className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E1E0CC]/80">
                Behavioral ML & HCI
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">HumanSignal</h3>
            <p className="text-xs sm:text-sm font-medium text-purple-300 mt-1 mb-3">
              Privacy-Conscious Behavioral State Estimation
            </p>

            <p className="text-sm text-[#E1E0CC]/75 leading-relaxed font-light mb-4">
              Quantifies mental focus, fatigue levels, and cognitive overload patterns purely from non-invasive human-computer interaction timing metrics with zero keystroke capture.
            </p>

            {/* Interactive Preview Container */}
            <div
              onClick={() =>
                setLightbox({
                  open: true,
                  img: humanImages[humanImgIdx],
                  title: `HumanSignal Preview ${humanImgIdx + 1}`,
                })
              }
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video shadow-xl cursor-zoom-in group/img mb-3"
            >
              <img
                src={humanImages[humanImgIdx]}
                alt="HumanSignal Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-1 border border-white/10">
                <Eye className="w-3 h-3" /> Expand
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none mb-4">
              {humanImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setHumanImgIdx(idx)}
                  className={`relative rounded-lg overflow-hidden border shrink-0 transition-all ${
                    humanImgIdx === idx ? "border-[#E1E0CC] scale-105" : "border-white/10 opacity-55 hover:opacity-100"
                  }`}
                  style={{ width: "70px", height: "44px" }}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {["Python", "FastAPI", "Random Forest", "Temporal Analysis", "React"].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#E1E0CC]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-white/10">
            <a
              href="https://github.com/Legendx143/HumanSignal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-purple-300 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub Repository <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ open: false, img: "", title: "" })}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightbox({ open: false, img: "", title: "" })}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="max-h-[82vh] w-auto rounded-2xl border border-white/20 shadow-2xl"
              />
              <p className="mt-3 text-xs font-mono text-white/70">{lightbox.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

