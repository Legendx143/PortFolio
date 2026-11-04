import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import React, { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
export interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- Hero ---------------- */
export interface PrismaHeroProps {
  title?: string;
  titleLines?: string[];
  showAsterisk?: boolean;
  navItems?: { label: string; href: string }[];
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  videoSrc?: string;
  badge?: string | null;
}

const defaultNavItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PrismaHero: React.FC<PrismaHeroProps> = ({
  title,
  titleLines = ["Welcome", "To My PortFolio"],
  showAsterisk = false,
  navItems = defaultNavItems,
  description = "Third-year Computer Science student at Hooghly Engineering and Technology College. Crafting production-grade applied AI systems, multimodal intelligence pipelines, and responsive web experiences.",
  buttonText = "Explore Work",
  buttonHref = "#about",
  videoSrc = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  badge = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the hero runway (175vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for silky fluid response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001,
  });

  // 1. Background Video Zoom Transforms (Zoom from 1.0 to 2.4 into the cosmic vortex)
  const videoScale = useTransform(smoothProgress, [0, 0.75], [1, 2.38]);
  const videoDarken = useTransform(smoothProgress, [0.35, 0.85], [0.3, 0.85]);

  // 2. Cosmic 3D Portal Ring (Expanding aperture)
  const portalScale = useTransform(smoothProgress, [0.05, 0.65], [0.4, 3.4]);
  const portalOpacity = useTransform(smoothProgress, [0.05, 0.32, 0.68], [0, 0.95, 0]);
  const portalRotate = useTransform(smoothProgress, [0.05, 0.65], [0, 45]);

  // 3. Hero Foreground Elements (Text, Title, Description, Button)
  const heroOpacity = useTransform(smoothProgress, [0, 0.38], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.42], [1, 1.16]);
  const heroY = useTransform(smoothProgress, [0, 0.38], [0, -38]);
  const heroBlur = useTransform(smoothProgress, [0, 0.38], ["blur(0px)", "blur(16px)"]);

  // 4. Scroll cue
  const cueOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);

  // Smooth scroll handler to launch the zoom transition on click
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative w-full min-h-[130vh]">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none">
        
        {/* Background Video with Zoom-In Physics */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 h-full w-full origin-center will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src={videoSrc}
          />
        </motion.div>

        {/* Dynamic Darkening & Vignette Overlay */}
        <motion.div
          style={{ opacity: videoDarken }}
          className="pointer-events-none absolute inset-0 bg-black"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Atmospheric Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#080808]" />

        {/* Cosmic Dimensional Portal Ring (Zoom Aperture) */}
        <motion.div
          style={{
            scale: portalScale,
            opacity: portalOpacity,
            rotate: portalRotate,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-72 sm:w-80 sm:h-96 rounded-[90px] border border-emerald-400/60 shadow-[0_0_120px_rgba(52,211,153,0.35)] flex items-center justify-center backdrop-blur-[2px] will-change-transform"
        >
          <div className="w-full h-full rounded-[90px] bg-gradient-to-tr from-emerald-500/25 via-sky-500/15 to-purple-500/25 animate-pulse" />
          <div className="absolute inset-4 rounded-[75px] border border-white/20" />
        </motion.div>


        {/* Main Hero Foreground Content */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            filter: heroBlur,
          }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-10 sm:pb-8 md:px-14 lg:pb-12 max-w-[1920px] mx-auto pointer-events-auto will-change-transform"
        >
          <div className="grid grid-cols-12 items-end gap-6 lg:gap-10">
            {/* Left Title: "Welcome" (large) & "To My PortFolio" (with vertical space, no asterisk) */}
            <div className="col-span-12 lg:col-span-8 mb-4 sm:mb-6 md:mb-10 lg:mb-12">
              {badge && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-widest uppercase text-[#E1E0CC]/80 font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {badge}
                </motion.div>
              )}
              <h1 className="select-none flex flex-col">
                {titleLines && titleLines.length > 0 ? (
                  <>
                    <span className="block font-medium leading-[0.88] tracking-[-0.05em] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.8vw] text-[#E1E0CC]">
                      <WordsPullUp text={titleLines[0]} showAsterisk={false} />
                    </span>
                    {titleLines[1] && (
                      <span className="block font-light leading-tight tracking-[-0.02em] text-[5.5vw] sm:text-[4.6vw] md:text-[3.6vw] lg:text-[2.9vw] text-[#E1E0CC]/90 mt-3 sm:mt-5 md:mt-6 lg:mt-8">
                        <WordsPullUp text={titleLines[1]} showAsterisk={false} />
                      </span>
                    )}
                  </>
                ) : (
                  <span className="block font-medium leading-[0.88] tracking-[-0.05em] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.8vw] text-[#E1E0CC]">
                    <WordsPullUp text={title || "Welcome"} showAsterisk={false} />
                  </span>
                )}
              </h1>
            </div>

            {/* Right: Pure bright white description & "Explore Work" CTA button */}
            <div className="col-span-12 flex flex-col gap-5 pb-4 lg:col-span-4 lg:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base text-white font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                style={{ lineHeight: 1.4 }}
              >
                {description}
              </motion.p>

              <motion.a
                href={buttonHref}
                onClick={handleScrollToAbout}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-[#E1E0CC] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base hover:bg-white cursor-pointer shadow-xl"
                data-cursor="Enter Portal"
              >
                {buttonText}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Subtle Floating Scroll-Down Cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          onClick={handleScrollToAbout}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer text-[#E1E0CC]/70 hover:text-white transition-colors"
          data-cursor="Dive In"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#E1E0CC]/60 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Scroll to Enter Portal
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-400/80" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
