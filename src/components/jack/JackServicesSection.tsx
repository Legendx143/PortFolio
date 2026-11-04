import React from "react";
import { FadeIn } from "./FadeIn";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    name: "3D Modeling",
    description:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    number: "03",
    name: "Motion Design",
    description:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export const JackServicesSection: React.FC = () => {
  return (
    <section
      id="price"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="font-black uppercase text-center leading-none tracking-tight text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 font-kanit select-none"
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items */}
        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0">
                {/* Left: Number */}
                <span
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                  className="font-black leading-none text-[#0C0C0C] tracking-tighter select-none font-kanit flex-shrink-0"
                >
                  {service.number}
                </span>

                {/* Right: Name + Description stacked */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                    className="font-medium uppercase tracking-tight text-[#0C0C0C] font-kanit"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 font-kanit"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

