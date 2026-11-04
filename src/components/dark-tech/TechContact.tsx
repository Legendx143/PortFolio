import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Sparkles, Check, Copy, ArrowUpRight } from "lucide-react";
import { TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";
import { assetUrl } from "@/utils/assetUrl";

export const TechContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("haldersupriyo45@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-14 sm:py-18 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={TRANSITION_APPLE}
        className="rounded-[36px] border border-indigo-500/30 bg-gradient-to-br from-[#12102b]/95 via-[#090b18]/95 to-[#04050d] p-8 sm:p-14 md:p-18 relative overflow-hidden shadow-[0_20px_60px_rgba(99,102,241,0.18)] group hover:border-indigo-400/50 transition-all duration-300"
      >
        {/* Dual ambient aurora lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left Side: Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs uppercase tracking-widest text-indigo-300 font-mono self-start shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              Communication Console • 05
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
              Let&apos;s Build Something Impactful.
            </h2>

            <p className="text-sm sm:text-base text-[#E1E0CC]/80 font-light leading-relaxed max-w-xl">
              I am actively seeking software engineering, machine learning, and AI internship opportunities. Whether you have an open role, an ambitious project, or an engineering question, let&apos;s connect.
            </p>

            {/* Direct Email with 1-Click Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2">
                <motion.a
                  href="mailto:haldersupriyo45@gmail.com"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={TRANSITION_SPRING}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-black font-bold text-sm shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.65)] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" /> haldersupriyo45@gmail.com
                </motion.a>

                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={TRANSITION_SPRING}
                  title="Copy email to clipboard"
                  className="p-3.5 rounded-full bg-[#1b1238] border border-purple-500/35 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:bg-purple-500/25 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>

              <motion.a
                href={assetUrl("/My_Resume.pdf")}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={TRANSITION_SPRING}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#1c183d] to-[#0f0d24] border border-purple-500/35 text-white font-medium text-sm shadow-[0_4px_16px_rgba(168,85,247,0.2)] hover:border-purple-400/70 hover:shadow-[0_6px_22px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-300" /> Download Resume (PDF)
              </motion.a>
            </div>

            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-xs font-mono text-emerald-300 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Vibrant Social Link Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {[
              {
                title: "GitHub",
                handle: "github.com/Legendx143",
                url: "https://github.com/Legendx143",
                icon: <Github className="w-5 h-5 text-white" />,
                badge: "Repositories",
                cardBg: "bg-gradient-to-r from-[#1e2330]/90 via-[#131720]/95 to-[#0a0d14]",
                borderColor: "border-slate-500/30 hover:border-slate-300/80",
                shadow: "shadow-[0_8px_25px_rgba(148,163,184,0.12)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]",
                iconBg: "bg-white/10 text-white border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]",
                badgeBg: "bg-white/10 text-slate-200 border-white/15",
              },
              {
                title: "LinkedIn",
                handle: "in/supriyo-halder-b591b7324",
                url: "https://linkedin.com/in/supriyo-halder-b591b7324",
                icon: <Linkedin className="w-5 h-5 text-[#38bdf8]" />,
                badge: "Network",
                cardBg: "bg-gradient-to-r from-[#0a2347]/90 via-[#07172f]/95 to-[#030c1a]",
                borderColor: "border-[#0A66C2]/40 hover:border-sky-400/80",
                shadow: "shadow-[0_8px_25px_rgba(10,102,194,0.2)] hover:shadow-[0_12px_35px_rgba(14,165,233,0.4)]",
                iconBg: "bg-[#0A66C2]/20 text-[#38bdf8] border-[#0A66C2]/40 shadow-[0_0_15px_rgba(10,102,194,0.25)]",
                badgeBg: "bg-sky-500/20 text-sky-200 border-sky-500/30",
              },
              {
                title: "Live Portfolio",
                handle: "legendx143.github.io/PortFolio",
                url: "https://legendx143.github.io/PortFolio",
                icon: <Send className="w-5 h-5 text-emerald-400" />,
                badge: "Web App",
                cardBg: "bg-gradient-to-r from-[#09261c]/90 via-[#061812]/95 to-[#020b07]",
                borderColor: "border-emerald-500/40 hover:border-emerald-400/80",
                shadow: "shadow-[0_8px_25px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.4)]",
                iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
                badgeBg: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, scale: 1.01 }}
                transition={TRANSITION_SPRING}
                className={`p-4 sm:p-5 rounded-2xl ${social.cardBg} border ${social.borderColor} ${social.shadow} transition-all flex items-center justify-between group cursor-pointer relative overflow-hidden`}
              >
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className={`p-3 rounded-xl ${social.iconBg} border group-hover:scale-105 transition-transform`}>
                    {social.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-semibold text-white tracking-tight">{social.title}</h4>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${social.badgeBg} border shadow-sm`}>
                        {social.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#E1E0CC]/60 font-mono mt-0.5">{social.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E1E0CC]/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-indigo-500/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#E1E0CC]/50">
          <p>© {new Date().getFullYear()} Supriyo Halder. All rights reserved.</p>
          <p>Architected with React, TypeScript, Tailwind CSS, & Framer Motion</p>
        </div>
      </motion.div>
    </section>
  );
};
