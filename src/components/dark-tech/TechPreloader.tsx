import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Loader from "@/components/ui/loader";
import { soundEngine } from "@/utils/soundEffects";

interface TechPreloaderProps {
  onComplete: () => void;
  durationMs?: number;
}

export const TechPreloader: React.FC<TechPreloaderProps> = ({
  onComplete,
  durationMs = 5000,
}) => {
  const [isMuted, setIsMuted] = useState(soundEngine.getMuted());
  const hasFinishedRef = useRef(false);

  // Resume audio context on any user interaction
  const handleInteraction = () => {
    soundEngine.resume();
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Attempt audio unlock right away
    soundEngine.getContext();

    const startTime = performance.now();
    let animFrame: number;
    let playedTick1 = false;
    let playedTick2 = false;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / durationMs);

      // Subtle audio milestone blips during the 5s animation
      if (rawProgress >= 0.35 && !playedTick1) {
        playedTick1 = true;
        soundEngine.playBlip(620);
      }
      if (rawProgress >= 0.7 && !playedTick2) {
        playedTick2 = true;
        soundEngine.playBlip(780);
      }

      if (rawProgress < 1) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Finished 5-second duration
        if (!hasFinishedRef.current) {
          hasFinishedRef.current = true;
          soundEngine.playCompletionChime();

          setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            onComplete();
          }, 350);
        }
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [durationMs, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleInteraction}
      className="fixed inset-0 z-[99999] bg-[#070709] flex flex-col items-center justify-center p-4 sm:p-8 select-none overflow-hidden cursor-pointer"
    >
      {/* 1. Animated Radial Gradient Background with Breathing Effect */}
      <AnimatedGradientBackground
        startingGap={125}
        Breathing={true}
        animationSpeed={0.025}
        breathingRange={6}
        containerClassName="opacity-85"
      />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Top-Right Sound Toggle */}
      <div className="absolute top-6 right-6 z-20">
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

      {/* Center Cinematic DotLottie Animation with Elegant Rotating Loader Below */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 sm:gap-2">
        <div className="flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 drop-shadow-[0_0_45px_rgba(56,189,248,0.35)]">
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </div>

        {/* Elegant Conic Shimmer Loader Below the Cat */}
        <div className="-mt-3 sm:-mt-5">
          <Loader size="sm" className="p-0 gap-0" />
        </div>
      </div>
    </motion.div>
  );
};
