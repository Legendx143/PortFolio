import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Server, Wrench, Terminal, Sparkles } from "lucide-react";
import { staggerContainer, itemFadeUp, TRANSITION_APPLE, TRANSITION_SPRING } from "@/lib/animations";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  bgGlow: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40",
    bgGlow: "from-emerald-500/10",
    skills: [
      "TensorFlow",
      "Applied ML",
      "Scikit-learn",
      "XGBoost",
      "Pandas & NumPy",
      "Computer Vision",
      "LLM API Integration",
      "Model Inference Optimization",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Code className="w-5 h-5 text-sky-400" />,
    color: "text-sky-400",
    borderColor: "hover:border-sky-500/40",
    bgGlow: "from-sky-500/10",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "HTML5 & CSS3",
      "Responsive UI Architecture",
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: <Server className="w-5 h-5 text-purple-400" />,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/40",
    bgGlow: "from-purple-500/10",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "PostgreSQL",
      "Supabase",
      "Asynchronous I/O",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/40",
    bgGlow: "from-amber-500/10",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5 text-rose-400" />,
    color: "text-rose-400",
    borderColor: "hover:border-rose-500/40",
    bgGlow: "from-rose-500/10",
    skills: ["Git & GitHub", "VS Code", "Vercel", "OpenStreetMap", "Linux / CLI", "Postman"],
  },
];

const TABS = [
  { id: "all", label: "All Skills" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Tools" },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center text-center mb-14"
      >
        <motion.div
          variants={itemFadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#E1E0CC]/80 font-mono mb-4 backdrop-blur-md"
        >
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          Technical Expertise
        </motion.div>

        <motion.h2
          variants={itemFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E1E0CC]"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p variants={itemFadeUp} className="mt-3 text-[#E1E0CC]/60 max-w-xl text-sm sm:text-base font-light">
          Deep, production-tested capabilities across intelligent model weights, reactive state management, and cloud APIs.
        </motion.p>
      </motion.div>

      {/* Filter Tabs with animated layout indicator */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer select-none ${
                isActive ? "text-black font-semibold" : "text-[#E1E0CC]/70 hover:text-white bg-white/[0.03]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#E1E0CC] shadow-[0_0_20px_rgba(225,224,204,0.3)]"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Animated Grid */}
      <motion.div
        layout
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat) => (
            <motion.div
              layout
              key={cat.id}
              variants={itemFadeUp}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={TRANSITION_APPLE}
              whileHover={{ y: -6 }}
              className={`p-7 sm:p-8 rounded-3xl bg-[#11110F] border border-white/10 ${cat.borderColor} transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden`}
            >
              {/* Top ambient corner glow on hover */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${cat.bgGlow} to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={TRANSITION_SPRING}
                      className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-[#E1E0CC]/85 text-xs font-mono border border-white/5 hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
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
