import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      window.innerWidth < breakpoint ||
      window.matchMedia("(pointer: coarse)").matches
    );
  });

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < breakpoint ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}
