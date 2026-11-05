import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUp,
  ExternalLink,
  Terminal,
  Sparkles,
} from "lucide-react";
import { assetUrl } from "@/utils/assetUrl";
import { TRANSITION_SPRING } from "@/lib/animations";

export const TechFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Legendx143",
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/supriyo-halder-b591b7324",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      label: "Email",
      href: "mailto:haldersupriyo45@gmail.com",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: "View Resume",
      href: assetUrl("/My_Resume.pdf"),
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="relative z-10 bg-[#080808] border-t border-white/10 text-[#E1E0CC] overflow-hidden">
      {/* Subtle Top Ambient Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Mission Column (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-800/40 border border-purple-500/35 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight uppercase font-mono">
                  Supriyo Halder
                </h3>
                <p className="text-[11px] font-mono text-purple-300/80">
                  AI Engineer & Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E1E0CC]/70 font-light leading-relaxed max-w-md">
              B.Tech in Computer Science & Engineering at Hooghly Engineering and Technology College. Designing production-grade Applied AI systems, multimodal vision pipelines, and resilient web platforms.
            </p>

            {/* Live Status Radar Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Technical Roles & Collaborations</span>
            </div>
          </div>

          {/* Quick Navigation Column (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400" /> Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-[#E1E0CC]/75 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials Column (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-purple-400" /> Connect & Profiles
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={TRANSITION_SPRING}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.06] text-xs font-mono text-[#E1E0CC]/80 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-purple-300 group-hover:text-purple-200">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#E1E0CC]/40 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Back To Top Floating Trigger */}
            <div className="pt-2">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={TRANSITION_SPRING}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent border border-purple-500/25 hover:border-purple-400/60 text-xs font-mono text-purple-200 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to top
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E1E0CC]/50">
          <p>
            © {new Date().getFullYear()} Supriyo Halder. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Built with React 18 • TypeScript • Tailwind CSS • Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

