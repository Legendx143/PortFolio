import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowUpRight,
  Sparkles,
  Github,
  FileText,
} from "lucide-react";
import { TRANSITION_SPRING } from "@/lib/animations";

interface CommandLog {
  id: string;
  command?: string;
  output: React.ReactNode;
}

export const TechAbout: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal when new output is added
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="flex flex-col gap-1 text-[#a78bfa] pl-2 py-1">
            <p className="text-white/90">Available commands:</p>
            <p><span className="text-[#818cf8] font-bold">neofetch</span> - display developer & system profile</p>
            <p><span className="text-[#818cf8] font-bold">about</span>    - engineering background & vision</p>
            <p><span className="text-[#818cf8] font-bold">skills</span>   - technical stack & competencies</p>
            <p><span className="text-[#818cf8] font-bold">projects</span> - production AI architectures</p>
            <p><span className="text-[#818cf8] font-bold">certs</span>    - IIT / NPTEL certifications</p>
            <p><span className="text-[#818cf8] font-bold">contact</span>  - get in touch</p>
            <p><span className="text-[#818cf8] font-bold">clear</span>    - clear terminal screen</p>
          </div>
        );
        break;

      case "neofetch":
        outputNode = (
          <div className="flex flex-col gap-1 pt-1">
            <div className="text-[#a78bfa] font-bold">supriyo@portfolio</div>
            <div className="text-[#6c44fc] text-xs">-----------------</div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[90px_1fr] gap-x-2 gap-y-0.5 text-xs sm:text-sm">
              <span className="text-[#818cf8]">OS:</span>
              <span className="text-white/90">Portfolio v2.0</span>

              <span className="text-[#818cf8]">Host:</span>
              <span className="text-white/90">supriyo.dev</span>

              <span className="text-[#818cf8]">Shell:</span>
              <span className="text-white/90">bash 5.1</span>

              <span className="text-[#818cf8]">Stack:</span>
              <span className="text-white/90">PyTorch / YOLOv8 / FastAPI / React / TS</span>

              <span className="text-[#818cf8]">Theme:</span>
              <span className="text-white/90">Electric Purple [#6c44fc]</span>

              <span className="text-[#818cf8]">Font:</span>
              <span className="text-white/90">JetBrains Mono</span>

              <span className="text-[#818cf8]">Uptime:</span>
              <span className="text-white/90">always online</span>
            </div>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <p className="text-[#E1E0CC]/85 pl-2 py-1 leading-relaxed">
            3rd-year Computer Science undergrad at Hooghly Engineering and Technology College.
            Focused on bridging deep neural representations, computer vision pipelines, and reactive full-stack web platforms.
          </p>
        );
        break;

      case "skills":
        outputNode = (
          <div className="flex flex-col gap-1 pl-2 py-1 text-xs sm:text-sm">
            <p><span className="text-[#818cf8]">AI / ML:</span> <span className="text-white/90">PyTorch, YOLOv8, OpenCV, Hugging Face, Scikit-Learn</span></p>
            <p><span className="text-[#818cf8]">Full-Stack:</span> <span className="text-white/90">FastAPI, Python, React, TypeScript, Tailwind CSS, PostgreSQL</span></p>
            <p><span className="text-[#818cf8]">Tools:</span> <span className="text-white/90">Docker, Git/GitHub, Linux, RESTful APIs, Vite</span></p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="flex flex-col gap-1.5 pl-2 py-1 text-xs sm:text-sm">
            <p>1. <span className="text-[#818cf8] font-bold">PlantGuardian</span>: Real-time Multimodal Crop Pathology Detection (97.4% accuracy)</p>
            <p>2. <span className="text-[#818cf8] font-bold">PetCare AI</span>: Computer Vision Veterinary Diagnostics & Clinical Triage</p>
            <p>3. <span className="text-[#818cf8] font-bold">HumanSignal</span>: Real-time Sensor Telemetry & Edge Behavioral Inference</p>
          </div>
        );
        break;

      case "certs":
        outputNode = (
          <div className="flex flex-col gap-1 pl-2 py-1 text-xs sm:text-sm text-white/90">
            <p>• <span className="text-[#818cf8]">Generative AI for Computer Vision</span> — NPTEL / IIT</p>
            <p>• <span className="text-[#818cf8]">Cloud Computing</span> — NPTEL / IIT</p>
            <p>• <span className="text-[#818cf8]">Python for Data Science</span> — NPTEL / IIT</p>
            <p>• <span className="text-[#818cf8]">The Joy of Computing using Python</span> — NPTEL / IIT</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="flex flex-col gap-1 pl-2 py-1 text-xs sm:text-sm">
            <p>Email: <a href="mailto:haldersupriyo014@gmail.com" className="text-[#818cf8] underline">haldersupriyo014@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/supriyo-halder-b591b7324" target="_blank" rel="noreferrer" className="text-[#818cf8] underline">linkedin.com/in/supriyo-halder-b591b7324</a></p>
            <p>GitHub: <a href="https://github.com/Legendx143" target="_blank" rel="noreferrer" className="text-[#818cf8] underline">github.com/Legendx143</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputNode = (
          <p className="text-rose-400 pl-2 py-0.5">
            command not found: {cmd}. Type <span className="text-[#818cf8] font-bold">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmd,
        output: outputNode,
      },
    ]);
    setInputVal("");
  };

  return (
    <section id="about" className="pt-6 pb-12 sm:pb-16 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Ambient Cosmic Portal Backlight */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] max-w-full h-[320px] bg-gradient-to-b from-purple-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 80, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-10 sm:gap-12 will-change-transform"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            Engineering Profile • 01
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans"
          >
            Architecting Intelligent Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-[#E1E0CC]/70 max-w-2xl font-light leading-relaxed"
          >
            Computer Science undergrad bridging deep neural representations, real-time computer vision, and high-concurrency web systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: 3D Photo Display (Without Open to Hire) */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center perspective-[1000px]"
          >
            <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_0_50px_rgba(108,68,252,0.12)] group">
              {/* Ambient backlight glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-sky-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-[22px] overflow-hidden bg-[#0D0D0B] border border-white/10">
                {/* Telemetry top bar */}
                <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-[#E1E0CC]/70 bg-black/60 backdrop-blur-md">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SYS.ONLINE
                  </span>
                  <span>ID: SUPRIYO-CSE</span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/Myself1.png"
                    alt="Supriyo Halder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  {/* Clean Bottom Overlay without Open to Hire */}
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 z-10 space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                      Supriyo Halder
                    </h3>
                    <p className="text-sm sm:text-base text-[#a78bfa] font-mono font-medium">
                      B.Tech CSE • 3rd Year
                    </p>
                    <p className="text-xs sm:text-sm text-[#E1E0CC]/75 font-light leading-snug">
                      Hooghly Engineering and Technology College
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Interactive Terminal matching 002014.xyz */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Terminal Window Frame */}
            <div
              onClick={handleTerminalClick}
              className="rounded-2xl border border-[#6c44fc]/25 bg-[#0A0A0F]/95 backdrop-blur-xl shadow-[0_12px_45px_rgba(108,68,252,0.14)] overflow-hidden cursor-text transition-all duration-300 hover:border-[#6c44fc]/40"
            >
              {/* Terminal Titlebar with Mac dots and center title */}
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/60 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs font-mono text-[#8a8a9e]">
                  terminal - supriyo@portfolio
                </div>
                <div className="w-12" /> {/* spacer for center alignment */}
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed space-y-2.5 max-h-[380px] overflow-y-auto selection:bg-[#6c44fc]/40">
                {/* Intro Line 1 */}
                <div className="text-[#7c5cfc]">
                  &gt; supriyo@portfolio - interactive terminal v2.0
                </div>

                {/* Intro Line 2 */}
                <div className="text-[#a78bfa]/80 text-xs">
                  type &quot;help&quot; for commands.
                </div>

                {/* Line 3: Neofetch command */}
                <div className="flex items-center gap-2 text-white pt-1">
                  <span className="text-[#a78bfa] font-bold">$</span>
                  <span className="font-medium">neofetch</span>
                </div>

                {/* Neofetch Output Block */}
                <div className="flex flex-col gap-0.5 pt-0.5 pl-0.5">
                  <div className="text-[#a78bfa] font-bold text-xs sm:text-sm">
                    supriyo@portfolio
                  </div>
                  <div className="text-[#6c44fc] text-xs">
                    -----------------
                  </div>

                  {/* Neofetch Spec Table */}
                  <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[85px_1fr] gap-x-3 gap-y-1 text-xs sm:text-sm pt-1">
                    <span className="text-[#818cf8]">OS:</span>
                    <span className="text-white/90">Portfolio v2.0</span>

                    <span className="text-[#818cf8]">Host:</span>
                    <span className="text-white/90">https://github.com/Legendx143</span>

                    <span className="text-[#818cf8]">Shell:</span>
                    <span className="text-white/90">bash 5.1</span>

                    <span className="text-[#818cf8]">Stack:</span>
                    <span className="text-white/90">PyTorch / YOLOv8 / FastAPI / React / TS</span>

                    <span className="text-[#818cf8]">Theme:</span>
                    <span className="text-white/90">Electric Purple [#6c44fc]</span>

                    <span className="text-[#818cf8]">Font:</span>
                    <span className="text-white/90">JetBrains Mono</span>

                    <span className="text-[#818cf8]">Uptime:</span>
                    <span className="text-white/90">always online</span>
                  </div>
                </div>

                {/* Dynamic User Command History */}
                {history.map((item) => (
                  <div key={item.id} className="pt-2 space-y-1 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[#a78bfa] font-bold">$</span>
                      <span>{item.command}</span>
                    </div>
                    {item.output}
                  </div>
                ))}

                {/* Active Interactive Command Prompt Line */}
                <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                  <span className="text-[#a78bfa] font-bold">$</span>
                  <div className="relative flex-1 flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 m-0 caret-[#7c5cfc]"
                      spellCheck={false}
                      autoComplete="off"
                    />
                    {inputVal.length === 0 && (
                      <span className="inline-block w-2 h-4 bg-[#a78bfa] animate-pulse align-middle" />
                    )}
                  </div>
                </form>

                <div ref={terminalEndRef} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
              <motion.a
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={TRANSITION_SPRING}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#E1E0CC] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-colors shadow-lg cursor-pointer"
                data-cursor="View Resume"
              >
                <FileText className="w-4 h-4" /> View Resume
              </motion.a>

              <motion.a
                href="https://github.com/Legendx143"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={TRANSITION_SPRING}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
                data-cursor="GitHub"
              >
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/supriyo-halder-b591b7324"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={TRANSITION_SPRING}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
                data-cursor="Connect"
              >
                LinkedIn Profile <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
