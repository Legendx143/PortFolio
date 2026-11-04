import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Server, Wrench, Terminal } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  cardBg: string;
  cardShadow: string;
  iconBg: string;
  tileBg: string;
  tileBorder: string;
  tileText: string;
  tileHoverBg: string;
  bgGlow: string;
  description: string;
  skills: { name: string; level?: string }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/25 hover:border-emerald-400/60",
    cardBg: "bg-gradient-to-br from-[#081a13]/90 via-[#05110d]/95 to-[#020705]",
    cardShadow: "shadow-[0_12px_40px_rgba(16,185,129,0.12)] hover:shadow-[0_18px_50px_rgba(16,185,129,0.28)]",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    tileBg: "bg-[#0b241b]/70",
    tileBorder: "border-emerald-500/20 hover:border-emerald-400/50",
    tileText: "text-emerald-100/90",
    tileHoverBg: "hover:bg-emerald-500/20",
    bgGlow: "from-emerald-500/20 via-teal-500/10",
    description: "Neural architectures, computer vision diagnostics, and LLM inference integrations.",
    skills: [
      { name: "TensorFlow" },
      { name: "Applied ML" },
      { name: "Scikit-Learn" },
      { name: "XGBoost" },
      { name: "Pandas & NumPy" },
      { name: "Computer Vision" },
      { name: "LLM API Integration" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code className="w-5 h-5 text-sky-400" />,
    color: "text-sky-400",
    borderColor: "border-sky-500/25 hover:border-sky-400/60",
    cardBg: "bg-gradient-to-br from-[#07182c]/90 via-[#04101e]/95 to-[#02070e]",
    cardShadow: "shadow-[0_12px_40px_rgba(14,165,233,0.12)] hover:shadow-[0_18px_50px_rgba(14,165,233,0.28)]",
    iconBg: "bg-sky-500/15 border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.2)]",
    tileBg: "bg-[#0c2440]/70",
    tileBorder: "border-sky-500/20 hover:border-sky-400/50",
    tileText: "text-sky-100/90",
    tileHoverBg: "hover:bg-sky-500/20",
    bgGlow: "from-sky-500/20 via-blue-500/10",
    description: "Component-driven reactive user interfaces with fluid physical animations.",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "HTML5 / CSS3" },
      { name: "Figma" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: <Server className="w-5 h-5 text-purple-400" />,
    color: "text-purple-400",
    borderColor: "border-purple-500/25 hover:border-purple-400/60",
    cardBg: "bg-gradient-to-br from-[#170e2b]/90 via-[#0f091d]/95 to-[#07040e]",
    cardShadow: "shadow-[0_12px_40px_rgba(168,85,247,0.12)] hover:shadow-[0_18px_50px_rgba(168,85,247,0.28)]",
    iconBg: "bg-purple-500/15 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    tileBg: "bg-[#21143d]/70",
    tileBorder: "border-purple-500/20 hover:border-purple-400/50",
    tileText: "text-purple-100/90",
    tileHoverBg: "hover:bg-purple-500/20",
    bgGlow: "from-purple-500/20 via-violet-500/10",
    description: "High-throughput asynchronous API endpoints, relational schemas, and databases.",
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: "text-amber-400",
    borderColor: "border-amber-500/25 hover:border-amber-400/60",
    cardBg: "bg-gradient-to-br from-[#241706]/90 via-[#180f03]/95 to-[#0c0701]",
    cardShadow: "shadow-[0_12px_40px_rgba(245,158,11,0.12)] hover:shadow-[0_18px_50px_rgba(245,158,11,0.28)]",
    iconBg: "bg-amber-500/15 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    tileBg: "bg-[#332009]/70",
    tileBorder: "border-amber-500/20 hover:border-amber-400/50",
    tileText: "text-amber-100/90",
    tileHoverBg: "hover:bg-amber-500/20",
    bgGlow: "from-amber-500/20 via-orange-500/10",
    description: "Core algorithmic problem-solving and software systems programming languages.",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Java" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5 text-rose-400" />,
    color: "text-rose-400",
    borderColor: "border-rose-500/25 hover:border-rose-400/60",
    cardBg: "bg-gradient-to-br from-[#240c1a]/90 via-[#180811]/95 to-[#0c0308]",
    cardShadow: "shadow-[0_12px_40px_rgba(244,63,94,0.12)] hover:shadow-[0_18px_50px_rgba(244,63,94,0.28)]",
    iconBg: "bg-rose-500/15 border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]",
    tileBg: "bg-[#361327]/70",
    tileBorder: "border-rose-500/20 hover:border-rose-400/50",
    tileText: "text-rose-100/90",
    tileHoverBg: "hover:bg-rose-500/20",
    bgGlow: "from-rose-500/20 via-pink-500/10",
    description: "Industry developer toolchains, CI/CD, version control, and geospatial mapping.",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "OpenStreetMap" },
      { name: "Google Colab" },
      { name: "Postman" },
    ],
  },
];

const TABS = [
  { id: "all", label: "All Technologies" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Tools" },
];

export const TechSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-14 sm:py-18 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      {/* Header with Smooth Entrance */}
      <div className="flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs uppercase tracking-widest text-sky-300 font-mono mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(14,165,233,0.15)]"
        >
          <Cpu className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          Competencies & Stack • 03
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans"
        >
          Technical Arsenal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-sm sm:text-base text-[#E1E0CC]/70 max-w-xl font-light"
        >
          Battle-tested libraries, frameworks, and deployment engines used across production systems.
        </motion.p>
      </div>

      {/* Tabs with Vibrant Active Glow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer select-none ${
                isActive
                  ? "text-black font-semibold shadow-[0_0_22px_rgba(225,224,204,0.45)]"
                  : "text-[#E1E0CC]/70 hover:text-white bg-gradient-to-b from-[#161a29]/80 to-[#0b0e17] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-white/25"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDarkTechTab"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#E1E0CC]"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Grid with Vibrant Jewel-Toned Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, index) => (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, y: 50, scale: 0.93, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.12 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              className={`p-6 sm:p-8 rounded-3xl ${cat.cardBg} border ${cat.borderColor} ${cat.cardShadow} transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Radial ambient aura */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${cat.bgGlow} to-transparent opacity-60 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header with Illuminated Icon Badge */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className={`p-3 rounded-2xl ${cat.iconBg} border group-hover:scale-110 transition-transform duration-300`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-[#E1E0CC]/65 font-light mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Harmonized Vibrant Skill Tiles */}
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-4 py-2.5 rounded-xl ${cat.tileBg} border ${cat.tileBorder} ${cat.tileHoverBg} flex items-center text-xs font-mono transition-all duration-200 cursor-default shadow-[inset_1px_1px_1px_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.4)]`}
                    >
                      <span className={`${cat.tileText} font-medium`}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
