import type { Variants } from "framer-motion";

// Base transition presets
export const transition = {
  default: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  slow: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  fast: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
  bounce: { type: "spring" as const, stiffness: 300, damping: 10 },
};

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

// Fade in from top
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.default,
  },
};

// Scale up
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.default,
  },
};

// Staggered children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Staggered children container (slower)
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: transition.fast,
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.15)",
    transition: transition.fast,
  },
};

// Button hover with arrow slide
export const buttonArrow = {
  rest: { x: 0 },
  hover: { x: 5, transition: transition.fast },
};

// Line draw animation for process flow
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Counter animation
export const counterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Heading text reveal
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Section reveal (for wrapping sections)
export const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Viewport config for InView trigger
export const viewportConfig = {
  once: true,
  amount: 0.2 as const,
  margin: "-50px",
};

// Nav link underline
export const navUnderline: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, originX: 0, transition: transition.fast },
};
