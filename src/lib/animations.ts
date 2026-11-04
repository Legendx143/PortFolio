export const TRANSITION_APPLE = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const itemFadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TRANSITION_APPLE,
  },
};

export const itemScaleUp = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: TRANSITION_APPLE,
  },
};

