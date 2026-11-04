import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Download, Send, Sparkles, Check, Copy } from "lucide-react";
import { staggerContainer, itemFadeUp, TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
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

  const copyEmail = () => {
    navigator.clipboard.writeText("haldersupriyo45@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={TRANSITION_APPLE}
        className="rounded-[32px] border border-white/10 bg-[#10100E] p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl group"
      >
        {/* Dynamic Cursor Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: isHovered
              ? `radial-gradient(800px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(225, 224, 204, 0.07), transparent 40%)`
              : "none",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              variants={itemFadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono self-start backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              Let's Connect
            </motion.div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
              Ready to collaborate on intelligent systems?
            </h2>

            <p className="text-base text-[#E1E0CC]/75 font-light leading-relaxed max-w-xl">
              I am actively seeking software engineering, machine learning, and AI internship opportunities.
              Whether you have an ambitious project, a full-time role, or just want to chat about AI research, my inbox is always open.
            </p>

            {/* Direct Contact links with copy button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <motion.a
                  href="mailto:haldersupriyo45@gmail.com"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TRANSITION_SPRING}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#E1E0CC] text-black font-semibold text-sm hover:bg-white transition-colors shadow-xl cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  haldersupriyo45@gmail.com
                </motion.a>

                {/* Quick Copy Button */}
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={TRANSITION_SPRING}
                  title="Copy email to clipboard"
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-[#E1E0CC] hover:bg-white/15 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>

              <motion.a
                href="/My_Resume.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={TRANSITION_SPRING}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/15 text-[#E1E0CC] font-medium text-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs font-mono text-emerald-300 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Email copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                title: "GitHub",
                handle: "github.com/Legendx143",
                url: "https://github.com/Legendx143",
                icon: <Github className="w-5 h-5 text-white" />,
                badge: "Repositories",
                hoverBorder: "hover:border-white/30",
              },
              {
                title: "LinkedIn",
                handle: "in/supriyo-halder-b591b7324",
                url: "https://linkedin.com/in/supriyo-halder-b591b7324",
                icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
                badge: "Network",
                hoverBorder: "hover:border-sky-500/30",
              },
              {
                title: "Live Portfolio",
                handle: "legendx143.github.io/PortFolio",
                url: "https://legendx143.github.io/PortFolio",
                icon: <Send className="w-5 h-5 text-emerald-400" />,
                badge: "Web App",
                hoverBorder: "hover:border-emerald-500/30",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={TRANSITION_SPRING}
                className={`p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 ${social.hoverBorder} hover:bg-white/[0.06] transition-all flex items-center justify-between group shadow-lg cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-semibold text-white tracking-tight">{social.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#E1E0CC]/60 border border-white/5">
                        {social.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#E1E0CC]/65 font-mono mt-0.5">{social.handle}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#E1E0CC]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E1E0CC]/50 font-mono relative z-20">
          <p>© {new Date().getFullYear()} Supriyo Halder. All rights reserved.</p>
          <p>Architected with React, TypeScript, Tailwind CSS, & Framer Motion</p>
        </div>
      </motion.div>
    </section>
  );
};
