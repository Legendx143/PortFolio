import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Cpu, Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { soundEngine } from "@/utils/soundEffects";

interface TechPreloaderProps {
  onComplete: () => void;
  durationMs?: number;
}

const TELEMETRY_STEPS = [
  { threshold: 0, text: "Initializing Deep Learning Core & Neural Weights..." },
  { threshold: 25, text: "Calibrating Multimodal Computer Vision & Diagnostic Models..." },
  { threshold: 52, text: "Compiling Reactive Interface & Hardware Composited Layers..." },
  { threshold: 82, text: "System Verification Complete. Access Granted." },
];

export const TechPreloader: React.FC<TechPreloaderProps> = ({
  onComplete,
  durationMs = 5000,
}) => {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(soundEngine.getMuted());
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioUnlockedRef = useRef(false);
  const lastSoundStep = useRef<number>(-1);
  const hasFinishedRef = useRef(false);

  // Resume audio context on user interaction
  const handleInteraction = () => {
    soundEngine.resume();
    if (!audioUnlockedRef.current) {
      audioUnlockedRef.current = true;
      setHasInteracted(true);
      soundEngine.playTick(1.2);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    setHasInteracted(true);
  };

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Attempt audio unlock right away
    soundEngine.getContext();

    const startTime = performance.now();
    let animFrame: number;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / durationMs);

      // Smooth custom ease-out curve for natural high-tech feel over 5 seconds
      const easedProgress = Math.min(
        100,
        Math.floor(
          rawProgress < 0.7
            ? Math.pow(rawProgress / 0.7, 1.1) * 78
            : 78 + Math.pow((rawProgress - 0.7) / 0.3, 0.9) * 22
        )
      );

      setProgress((prev) => {
        const next = Math.max(prev, easedProgress);

        // Sound trigger logic at milestones
        const currentMilestone = Math.floor(next / 10);
        if (currentMilestone > lastSoundStep.current && next < 100) {
          lastSoundStep.current = currentMilestone;
          if (next === 25 || next === 52 || next === 82) {
            soundEngine.playBlip(540 + next * 3);
          } else {
            soundEngine.playTick(0.8 + (next / 100) * 0.6);
          }
        }

        return next;
      });

      if (rawProgress < 1) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Finished 5-second protocol
        if (!hasFinishedRef.current) {
          hasFinishedRef.current = true;
          setProgress(100);
          soundEngine.playCompletionChime();

          // Brief moment to register 100% before smooth reveal
          setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            onComplete();
          }, 450);
        }
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [durationMs, onComplete]);

  // Determine current active telemetry text
  const currentStep =
    [...TELEMETRY_STEPS].reverse().find((s) => progress >= s.threshold) || TELEMETRY_STEPS[0];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleInteraction}
      className="fixed inset-0 z-[99999] bg-[#070709] text-[#E1E0CC] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden cursor-pointer"
    >
      {/* 1. Animated Radial Gradient Background with Breathing Effect */}
      <AnimatedGradientBackground
        startingGap={120}
        Breathing={true}
        animationSpeed={0.025}
        breathingRange={6}
        containerClassName="opacity-80"
      />

      {/* Subtle Grid Overlay for tech texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#E1E0CC]/75">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wider">INITIALIZATION PROTOCOL // PORTFOLIO v2.0</span>
        </div>

        {/* Audio Status & Toggle Button */}
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 hover:border-white/35 text-[#E1E0CC]/80 hover:text-white transition-all text-xs font-mono cursor-pointer backdrop-blur-md"
          title="Toggle audio"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-rose-400" />
              <span>SOUND: MUTED</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>SOUND: ACTIVE</span>
            </>
          )}
        </button>
      </div>

      {/* Center Cinematic Lottie Animation & Identity */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        {/* Animated DotLottie Visual */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center mb-2 drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </div>

        {/* Title & Identity */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans mb-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Supriyo Halder
        </h1>
        <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-widest uppercase mb-6 drop-shadow-md">
          Applied AI Engineer & Full-Stack Developer
        </p>

        {/* Dynamic Telemetry Log */}
        <div className="h-8 flex items-center justify-center px-4 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
          <motion.p
            key={currentStep.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs sm:text-sm font-mono text-[#E1E0CC]/90 flex items-center gap-2"
          >
            <span className="text-emerald-400">&gt;</span>
            <span>{currentStep.text}</span>
          </motion.p>
        </div>
      </div>

      {/* Bottom Progress Bar & Percentage Telemetry */}
      <div className="relative z-10 max-w-md w-full mx-auto space-y-4">
        {/* Numeric Counter & Status */}
        <div className="flex items-center justify-between text-xs font-mono text-[#E1E0CC]/80">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>CALIBRATING PORTFOLIO</span>
          </span>
          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>

        {/* High-Precision Progress Bar */}
        <div className="h-2.5 w-full rounded-full bg-black/50 p-[1px] border border-white/20 overflow-hidden backdrop-blur-md">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Micro-hint */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#E1E0CC]/50 pt-1">
          <span>HOOGHLY ENG. & TECH. COLLEGE</span>
          <span>
            {hasInteracted ? "AUDIO SYNCHRONIZED" : "TAP TO ENABLE AUDIO"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
