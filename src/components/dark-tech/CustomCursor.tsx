import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [label, setLabel] = useState("Explore");

  const dotRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const orbit = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>();

  useEffect(() => {
    // Only run on desktop devices with fine mouse pointer
    if (
      typeof window === "undefined" ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], .group, input");
        if (interactive) {
          setIsEnter(true);
          const customLabel = interactive.getAttribute("data-cursor");
          setLabel(customLabel || (interactive.tagName === "BUTTON" || interactive.tagName === "A" ? "Explore" : "View"));
        } else {
          setIsEnter(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      setIsEnter(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      if (mouse.current.x >= 0 && mouse.current.y >= 0) {
        orbit.current.x += (mouse.current.x - orbit.current.x) * 0.22;
        orbit.current.y += (mouse.current.y - orbit.current.y) * 0.22;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
        }
        if (orbitRef.current) {
          orbitRef.current.style.transform = `translate3d(${orbit.current.x}px, ${orbit.current.y}px, 0) translate(-50%, -50%) ${
            isEnter ? "scale(1.28)" : "scale(1)"
          }`;
        }
      }
      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible, isEnter]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Orbit Ring */}
      <div
        ref={orbitRef}
        className={`absolute left-0 top-0 w-9 h-9 rounded-full border transition-all duration-300 ease-out will-change-transform ${
          isEnter
            ? "border-emerald-400/80 bg-emerald-400/15 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            : "border-white/40 bg-white/5"
        }`}
      >
        {isEnter && (
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase font-mono tracking-widest text-emerald-300 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-emerald-500/30 backdrop-blur-md">
            {label}
          </span>
        )}
      </div>

      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className={`absolute left-0 top-0 w-2 h-2 rounded-full will-change-transform ${
          isEnter ? "bg-emerald-300" : "bg-white"
        }`}
      />
    </div>
  );
};

