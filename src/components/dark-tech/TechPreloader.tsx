import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const hasFinishedRef = useRef(false);

  // Resume audio context on any user interaction
  const handleInteraction = () => {
    soundEngine.resume();
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

      {/* Center Cinematic DotLottie Animation with Elegant Rotating Loader Below */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Animated Cat */}
        <div className="flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 drop-shadow-[0_0_45px_rgba(56,189,248,0.35)]">
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </div>

        {/* Text Below the Cat */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-mono tracking-widest uppercase text-white font-semibold mt-1 mb-5 sm:mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          Loading PortFolio
        </motion.p>

        {/* Spiral Loading Animation Dragged Down with comfortable spacing */}
        <div className="mt-1 sm:mt-2">
          <Loader size="sm" className="p-0 gap-0" />
        </div>
      </div>
    </motion.div>
  );
};
