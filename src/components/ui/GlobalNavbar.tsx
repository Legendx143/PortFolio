import React, { useState, useEffect } from "react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const GlobalNavbar: React.FC<{ items?: NavItem[] }> = ({ items = defaultNavItems }) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // 1. If at the top of the page, activate "home"
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // 2. If scrolled to the bottom of the page, activate "contact"
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // 3. Focal point below the navbar (25% down the viewport)
      const focalY = Math.max(120, window.innerHeight * 0.25);
      const sectionIds = items.map((i) => i.id);

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // The section is only active when its top has reached the focal point and bottom is below it
          if (rect.top <= focalY && rect.bottom > focalY) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    } else {
      const targetEl = document.getElementById(item.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }
    }
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2 pointer-events-auto select-none font-sans">
      <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 rounded-b-2xl md:rounded-b-3xl bg-black/95 border-x border-b border-white/10 px-5 sm:px-8 md:px-12 py-2 sm:py-2.5 shadow-2xl backdrop-blur-md">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative text-[11px] sm:text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] scale-105"
                  : "text-[#E1E0CC]/50 hover:text-white/80 font-normal"
              }`}
              data-cursor="Navigate"
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
