import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ExternalLink, GraduationCap, Award, Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import { staggerContainer, itemFadeUp, itemScaleUp, TRANSITION_APPLE } from "@/lib/animations";

export const AboutSection: React.FC = () => {
  // 3D Tilt calculation for portrait card
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center text-center mb-20"
      >
        <motion.div
          variants={itemFadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          About Me
        </motion.div>

        <motion.h2
          variants={itemFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E1E0CC]"
        >
          Engineer. Creator. Problem Solver.
        </motion.h2>

        <motion.p variants={itemFadeUp} className="text-[#E1E0CC]/60 text-sm sm:text-base mt-3 max-w-lg">
          Transforming mathematical theory and neural representations into high-throughput software.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Interactive 3D Physics Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={TRANSITION_APPLE}
          className="lg:col-span-5 flex justify-center perspective-[1000px]"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(225,224,204,0.15)] cursor-pointer"
          >
            {/* Dynamic Glare Overlay */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none z-20 opacity-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.35 : 0,
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8), transparent 60%)`,
              }}
            />

            <div className="relative rounded-[22px] overflow-hidden bg-neutral-950 border border-white/10">
              <motion.img
                src="/images/Myself1.png"
                alt="Supriyo Halder"
                className="w-full h-auto object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Supriyo Halder</h3>
                  <p className="text-xs text-[#E1E0CC]/70 font-mono mt-0.5">B.Tech Computer Science & Eng.</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono uppercase tracking-wider backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Staggered Content Details */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <motion.div variants={itemFadeUp} className="space-y-4">
            <p className="text-base sm:text-lg text-[#E1E0CC]/90 font-light leading-relaxed">
              I am a third-year Computer Science and Engineering student at{" "}
              <span className="text-[#E1E0CC] font-medium underline decoration-white/20 underline-offset-4">
                Hooghly Engineering and Technology College
              </span>
              . I architect production-ready applications combining deep learning algorithms, computer vision, and reactive full-stack web platforms.
            </p>

            <p className="text-sm sm:text-base text-[#E1E0CC]/70 leading-relaxed font-light">
              My engineering philosophy revolves around solving real problems: developing multimodal diagnostic triage for veterinary medicine, agronomy disease identification for farmers, and non-invasive behavioral cognitive telemetry.
            </p>
          </motion.div>

          {/* Interactive Stat Cards Grid with spring hover */}
          <motion.div variants={itemFadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {[
              {
                icon: <GraduationCap className="w-5 h-5 text-sky-300" />,
                value: "3rd Year",
                label: "B.Tech CSE Student",
                highlight: "from-sky-500/10 to-transparent",
              },
              {
                icon: <Award className="w-5 h-5 text-amber-300" />,
                value: "4x NPTEL",
                label: "AI & Cloud Certified",
                highlight: "from-amber-500/10 to-transparent",
              },
              {
                icon: <Terminal className="w-5 h-5 text-emerald-300" />,
                value: "3+ Systems",
                label: "Full-Stack ML Deployed",
                highlight: "from-emerald-500/10 to-transparent",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all flex flex-col gap-1.5 relative overflow-hidden group shadow-lg`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.highlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="p-2 rounded-xl bg-white/5 w-fit border border-white/10 relative z-10 mb-1">
                  {stat.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-white relative z-10">{stat.value}</span>
                <span className="text-xs text-[#E1E0CC]/60 relative z-10 font-mono">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Links with modern spring hover */}
          <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a
              href="/My_Resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E1E0CC] text-black font-semibold text-sm hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(225,224,204,0.4)] group cursor-pointer"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume (PDF)
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/supriyo-halder-b591b7324"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-[#E1E0CC] font-medium text-sm hover:bg-white/10 hover:border-white/30 transition-all shadow-md group cursor-pointer"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
