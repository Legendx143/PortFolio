import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

interface JackProject {
  number: string;
  category: string;
  name: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2Tall: string;
  };
}

const JACK_PROJECTS: JackProject[] = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Tall:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Tall:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Tall:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

const JackCard: React.FC<{
  project: JackProject;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}> = ({ project, index, totalCards, progress }) => {
  // Target scale calculation: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const rangeStart = (index + 0.3) / totalCards;
  const rangeEnd = Math.min(1, (index + 1.2) / totalCards);

  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, targetScale],
    { clamp: true }
  );

  const opacity = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, index === totalCards - 1 ? 1 : 0.92],
    { clamp: true }
  );

  return (
    <div
      className="sticky w-full"
      style={{
        top: `calc(4.5rem + ${index * 32}px)`,
        zIndex: 10 + index,
        marginBottom: index < totalCards - 1 ? "42vh" : "0px",
      }}
    >
      <motion.div
        style={{
          scale: index === totalCards - 1 ? 1 : scale,
          opacity: index === totalCards - 1 ? 1 : opacity,
          transformOrigin: "top center",
        }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden will-change-transform font-kanit"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Number */}
            <span
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              className="font-black leading-none text-[#D7E2EA] tracking-tighter select-none font-kanit"
            >
              {project.number}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-mono">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-kanit">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 md:gap-6 pt-5 sm:pt-7 md:pt-8">
          {/* Left column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-5 md:gap-6">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div className="md:col-span-7 flex flex-col">
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] h-full min-h-[220px]">
              <img
                src={project.images.col2Tall}
                alt={`${project.name} main view`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const JackProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-28 md:pt-36 pb-32 sm:pb-48 px-5 sm:px-8 md:px-10 max-w-7xl mx-auto font-kanit relative z-10"
    >
      {/* Heading: "Projects" */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
        <h2
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          className="hero-heading font-black uppercase leading-none tracking-tight font-kanit select-none"
        >
          Projects
        </h2>
      </FadeIn>

      {/* 3 Sticky Stacking Cards */}
      <div className="relative flex flex-col">
        {JACK_PROJECTS.map((project, i) => (
          <JackCard
            key={project.number}
            project={project}
            index={i}
            totalCards={JACK_PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
