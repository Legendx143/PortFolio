import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2, Building, Sparkles } from "lucide-react";
import { staggerContainer, itemFadeUp, TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md"
        >
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          Journey & Milestones
        </motion.div>

        <motion.h2
          variants={itemFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E1E0CC]"
        >
          Experience & Certifications
        </motion.h2>

        <motion.p variants={itemFadeUp} className="mt-3 text-[#E1E0CC]/60 max-w-xl text-sm sm:text-base font-light">
          Structured hands-on engineering exposure and prestigious national certifications in artificial intelligence.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Experience Column */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight">Work Internships</h3>
          </div>

          {/* Intern 1: CodSoft */}
          <motion.div
            variants={itemFadeUp}
            whileHover={{ x: 6, y: -2 }}
            transition={TRANSITION_SPRING}
            className="p-7 rounded-3xl bg-[#11110F] border border-white/10 hover:border-purple-500/30 transition-all shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors pointer-events-none" />

            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Web Development Intern
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Building className="w-3.5 h-3.5 text-[#E1E0CC]/60" />
                  <span className="text-sm font-medium text-[#E1E0CC]/80 font-mono">CodSoft</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E1E0CC]/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <Calendar className="w-3 h-3 text-purple-400" /> Hands-on Internship
              </span>
            </div>

            <p className="text-sm text-[#E1E0CC]/70 font-light leading-relaxed">
              Completed a hands-on web development internship focused on real-world frontend and backend engineering, implementing interactive components, responsive page layouts, and API integrations.
            </p>
          </motion.div>

          {/* Intern 2: EduSkills */}
          <motion.div
            variants={itemFadeUp}
            whileHover={{ x: 6, y: -2 }}
            transition={TRANSITION_SPRING}
            className="p-7 rounded-3xl bg-[#11110F] border border-white/10 hover:border-sky-500/30 transition-all shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                  Web Development Intern
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Building className="w-3.5 h-3.5 text-[#E1E0CC]/60" />
                  <span className="text-sm font-medium text-[#E1E0CC]/80 font-mono">EduSkills</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E1E0CC]/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <Calendar className="w-3 h-3 text-sky-400" /> Virtual Internship
              </span>
            </div>

            <p className="text-sm text-[#E1E0CC]/70 font-light leading-relaxed">
              Gained deep exposure to industry-standard web practices, software versioning, component modularity, and collaborative workflows through a structured curriculum.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemFadeUp}
            whileHover={{ x: 6, y: -2 }}
            transition={TRANSITION_SPRING}
            className="p-7 rounded-3xl bg-[#11110F] border border-white/10 hover:border-emerald-500/30 transition-all shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  B.Tech in Computer Science & Engineering
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#E1E0CC]/60" />
                  <span className="text-sm font-medium text-[#E1E0CC]/80 font-mono">
                    Hooghly Engineering and Technology College
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                3rd Year
              </span>
            </div>

            <p className="text-sm text-[#E1E0CC]/70 font-light leading-relaxed">
              Key Focus Areas: Deep Learning, Data Structures & Algorithms, Database Systems, Computer Vision, Operating Systems, and Distributed Software Engineering.
            </p>
          </motion.div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight">NPTEL Certifications</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Generative AI for Computer Vision",
                org: "NPTEL / IIT",
                tag: "Advanced Vision & GenAI",
                desc: "Diffusion models, deep vision representations, and generative architectures.",
              },
              {
                title: "Cloud Computing",
                org: "NPTEL / IIT",
                tag: "Cloud Infrastructure",
                desc: "Virtualization, distributed systems, and containerized cloud deployment.",
              },
              {
                title: "Python for Data Science (Data Science for Engineers)",
                org: "NPTEL / IIT",
                tag: "Modeling & NumPy/Pandas",
                desc: "Statistical inference, feature engineering, regression, and classifier models.",
              },
              {
                title: "The Joy of Computing Using Python",
                org: "NPTEL / IIT",
                tag: "Algorithms & Problem Solving",
                desc: "Pythonic algorithms, computational logic, and procedural automation.",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={itemFadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={TRANSITION_SPRING}
                className="p-6 rounded-3xl bg-[#11110F] border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group flex flex-col gap-2 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/25 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#E1E0CC]/60 font-mono mt-0.5">{cert.org}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1E0CC]/80 whitespace-nowrap shrink-0">
                    {cert.tag}
                  </span>
                </div>

                <p className="text-xs text-[#E1E0CC]/65 font-light pl-11">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
