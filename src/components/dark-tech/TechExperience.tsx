import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Building,
  ExternalLink,
} from "lucide-react";
import { TRANSITION_SPRING } from "@/lib/animations";

export const TechExperience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-14 sm:py-18 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5"
    >
      {/* Header with Smooth Cinematic Scroll Reveal */}
      <div className="flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -22, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs uppercase tracking-widest text-purple-300 font-mono mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <Briefcase className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          Milestones & Credentials • 04
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans"
        >
          Experience & Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-sm sm:text-base text-[#E1E0CC]/70 max-w-xl font-light"
        >
          Structured hands-on internships and prestigious IIT/NPTEL certifications in Artificial Intelligence. Click any box to view the official certificate PDF.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 overflow-hidden">
        {/* Left Column: Work Internships & Education (Slides in smoothly from LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-purple-500/20">
            <div className="p-2.5 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Work Internships</h3>
          </div>

          {/* Intern 1: CodSoft (Cyber Violet Glow) */}
          <motion.a
            href={encodeURI("/Certificates/WebD Codsoft.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6, scale: 1.01 }}
            transition={TRANSITION_SPRING}
            className="block p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1c1236]/90 via-[#120b22]/95 to-[#080512] border border-purple-500/35 hover:border-purple-400/80 transition-all shadow-[0_12px_35px_rgba(168,85,247,0.16)] hover:shadow-[0_18px_50px_rgba(168,85,247,0.32)] group relative overflow-hidden cursor-pointer"
            data-cursor="Open PDF"
          >
            <div className="flex justify-between items-start gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    Web Development Intern
                  </h4>
                  <ExternalLink className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Building className="w-3.5 h-3.5 text-purple-300/70" />
                  <span className="text-xs font-mono text-purple-200/90 font-medium">CodSoft</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-200 bg-purple-500/20 border border-purple-500/35 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <Calendar className="w-3 h-3 text-purple-300" /> Completed
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-100/75 font-light leading-relaxed mt-3">
              Engineered responsive frontend modules, built structured backend endpoints, managed component states, and deployed interactive web services.
            </p>
          </motion.a>

          {/* Intern 2: EduSkills (Neon Sky Blue Glow) */}
          <motion.a
            href={encodeURI("/Certificates/Eduskills Py WD.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6, scale: 1.01 }}
            transition={TRANSITION_SPRING}
            className="block p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0c223d]/90 via-[#071526]/95 to-[#030a13] border border-sky-500/35 hover:border-sky-400/80 transition-all shadow-[0_12px_35px_rgba(14,165,233,0.16)] hover:shadow-[0_18px_50px_rgba(14,165,233,0.32)] group relative overflow-hidden cursor-pointer"
            data-cursor="Open PDF"
          >
            <div className="flex justify-between items-start gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    Web Development Intern
                  </h4>
                  <ExternalLink className="w-4 h-4 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Building className="w-3.5 h-3.5 text-sky-300/70" />
                  <span className="text-xs font-mono text-sky-200/90 font-medium">EduSkills</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-200 bg-sky-500/20 border border-sky-500/35 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.2)]">
                <Calendar className="w-3 h-3 text-sky-300" /> Virtual Internship
              </span>
            </div>

            <p className="text-xs sm:text-sm text-sky-100/75 font-light leading-relaxed mt-3">
              Gained hands-on exposure to industry-standard web engineering frameworks, collaborative version control systems, and modern full-stack workflows.
            </p>
          </motion.a>

          {/* Education Milestone (Emerald Matrix Glow) */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={TRANSITION_SPRING}
            className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0a261a]/90 via-[#061710]/95 to-[#020a07] border border-emerald-500/35 hover:border-emerald-400/80 transition-all shadow-[0_12px_35px_rgba(16,185,129,0.16)] hover:shadow-[0_18px_50px_rgba(16,185,129,0.32)] group relative overflow-hidden"
          >
            <div className="flex justify-between items-start gap-2 mb-2">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  B.Tech in Computer Science & Engineering
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-300/70" />
                  <span className="text-xs font-mono text-emerald-200/90 font-medium">
                    Hooghly Engineering and Technology College
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-200 bg-emerald-500/20 border border-emerald-500/35 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                3rd Year
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 font-light leading-relaxed mt-3">
              Key Academic Modules: Machine Learning, Computer Vision, Algorithms & Data Structures, Operating Systems, Database Management Systems.
            </p>
          </motion.div>
        {/* Left Column closing */}
        </motion.div>

        {/* Right Column: NPTEL IIT Certifications (Slides in smoothly from RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-amber-500/20">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">NPTEL Certifications</h3>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                title: "Generative AI for Computer Vision",
                org: "NPTEL / IIT",
                badge: "Advanced Vision & Diffusion",
                desc: "Deep visual representations, diffusion models, and generative network architectures.",
                pdf: "/Certificates/Generative AI For Computer Vision.pdf",
                cardBg: "bg-gradient-to-br from-[#201038]/90 via-[#130922]/95 to-[#08030f]",
                borderColor: "border-purple-500/35 hover:border-purple-400/80",
                shadow: "shadow-[0_8px_30px_rgba(168,85,247,0.16)] hover:shadow-[0_14px_40px_rgba(168,85,247,0.32)]",
                iconBg: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                badgeBg: "bg-purple-500/20 text-purple-200 border-purple-500/35",
                hoverText: "group-hover:text-purple-200",
                descText: "text-purple-100/75",
              },
              {
                title: "Cloud Computing",
                org: "NPTEL / IIT",
                badge: "Distributed Infrastructure",
                desc: "Cloud virtualization, scalability principles, and containerized system deployments.",
                pdf: "/Certificates/CLOUD COMPUTING.pdf",
                cardBg: "bg-gradient-to-br from-[#0c223d]/90 via-[#071628]/95 to-[#030b14]",
                borderColor: "border-sky-500/35 hover:border-sky-400/80",
                shadow: "shadow-[0_8px_30px_rgba(14,165,233,0.16)] hover:shadow-[0_14px_40px_rgba(14,165,233,0.32)]",
                iconBg: "bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)]",
                badgeBg: "bg-sky-500/20 text-sky-200 border-sky-500/35",
                hoverText: "group-hover:text-sky-200",
                descText: "text-sky-100/75",
              },
              {
                title: "Python for Data Science (Data Science for Engineers)",
                org: "NPTEL / IIT",
                badge: "Modeling & Statistical Analysis",
                desc: "NumPy, Pandas, predictive modeling, regression, and statistical evaluation.",
                pdf: "/Certificates/Data Science for Engineers.pdf",
                cardBg: "bg-gradient-to-br from-[#0a261a]/90 via-[#061710]/95 to-[#020a07]",
                borderColor: "border-emerald-500/35 hover:border-emerald-400/80",
                shadow: "shadow-[0_8px_30px_rgba(16,185,129,0.16)] hover:shadow-[0_14px_40px_rgba(16,185,129,0.32)]",
                iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
                badgeBg: "bg-emerald-500/20 text-emerald-200 border-emerald-500/35",
                hoverText: "group-hover:text-emerald-200",
                descText: "text-emerald-100/75",
              },
              {
                title: "The Joy of Computing Using Python",
                org: "NPTEL / IIT",
                badge: "Algorithmic Problem Solving",
                desc: "Pythonic algorithms, computational complexity, and automated scripting.",
                pdf: "/Certificates/The Joy of Computing using Python.pdf",
                cardBg: "bg-gradient-to-br from-[#291906]/90 via-[#1a1003]/95 to-[#0d0701]",
                borderColor: "border-amber-500/35 hover:border-amber-400/80",
                shadow: "shadow-[0_8px_30px_rgba(245,158,11,0.16)] hover:shadow-[0_14px_40px_rgba(245,158,11,0.32)]",
                iconBg: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
                badgeBg: "bg-amber-500/20 text-amber-200 border-amber-500/35",
                hoverText: "group-hover:text-amber-200",
                descText: "text-amber-100/75",
              },
            ].map((cert, i) => (
              <motion.a
                key={i}
                href={encodeURI(cert.pdf)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={TRANSITION_SPRING}
                className={`block p-5 sm:p-6 rounded-2xl ${cert.cardBg} border ${cert.borderColor} transition-all ${cert.shadow} flex flex-col gap-1.5 group cursor-pointer relative overflow-hidden`}
                data-cursor="Open Certificate"
              >
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${cert.iconBg} border mt-0.5 group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-base font-semibold text-white ${cert.hoverText} transition-colors`}>
                          {cert.title}
                        </h4>
                        <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <p className="text-xs text-[#E1E0CC]/60 font-mono mt-0.5">{cert.org}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${cert.badgeBg} border whitespace-nowrap shadow-sm`}>
                    {cert.badge}
                  </span>
                </div>
                <p className={`text-xs ${cert.descText} font-light pl-9 mt-1 relative z-10`}>{cert.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
