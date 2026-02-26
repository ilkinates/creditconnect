// ─── Design System Tokens ────────────────────────────────────────────
export const T = {
  // Colors
  bg: "#FAFBFD",
  surface: "#FFFFFF",
  primary: "#0066FF",
  primaryDark: "#0050CC",
  primaryLight: "#EBF3FF",
  primaryGlow: "rgba(0,102,255,0.12)",
  accent: "#00D68F",
  accentLight: "#E8FBF3",
  accentDark: "#00B377",
  text: "#0A1628",
  textSec: "#596780",
  textTer: "#8896AB",
  border: "#E5EAF2",
  borderLight: "#F0F3F8",
  danger: "#FF4D6A",
  warm: "#FF8C42",
  purple: "#7C5CFC",
  // Radius
  r: { sm: 10, md: 16, lg: 22, xl: 28, full: 999 },
  // Shadows
  sh: {
    sm: "0 1px 3px rgba(10,22,40,0.04)",
    md: "0 4px 16px rgba(10,22,40,0.06)",
    lg: "0 8px 40px rgba(10,22,40,0.08)",
    xl: "0 16px 64px rgba(10,22,40,0.1)",
    glow: "0 4px 24px rgba(0,102,255,0.2)",
  },
};

export const font = "'Outfit', sans-serif";
export const fontDisplay = "'Outfit', sans-serif";

// ─── Animation Variants ──────────────────────────────────────────────
export const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const stagger = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, margin: "-40px" },
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  },
};

export const staggerChild = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
};
