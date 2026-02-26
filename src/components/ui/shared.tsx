"use client";

import { ReactNode, useRef, useEffect, useState, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { T, font, fontDisplay, fadeIn } from "@/lib/tokens";

// ─── Button ───────────────────────────────────────────────────────────
interface BtnProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  style?: CSSProperties;
  icon?: string;
}

export function Btn({ children, variant = "primary", size = "md", onClick, style = {}, icon }: BtnProps) {
  const base: CSSProperties = {
    fontFamily: font, fontWeight: 600, border: "none", cursor: "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    transition: "all 0.2s", letterSpacing: "-0.01em", textDecoration: "none",
    borderRadius: size === "lg" ? T.r.lg : T.r.md,
    padding: size === "lg" ? "18px 36px" : size === "sm" ? "10px 20px" : "14px 28px",
    fontSize: size === "lg" ? 17 : size === "sm" ? 14 : 15,
  };
  const variants: Record<string, CSSProperties> = {
    primary: { background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`, color: "#fff", boxShadow: T.sh.glow },
    secondary: { background: T.surface, color: T.text, border: `1.5px solid ${T.border}`, boxShadow: T.sh.sm },
    accent: { background: `linear-gradient(135deg, ${T.accent}, ${T.accentDark})`, color: "#fff", boxShadow: `0 4px 20px ${T.accent}40` },
    ghost: { background: "transparent", color: T.primary, padding: size === "lg" ? "18px 20px" : "14px 16px" },
    outline: { background: "transparent", color: T.primary, border: `2px solid ${T.primary}`, boxShadow: "none" },
  };
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children} {icon && <span style={{ fontSize: size === "lg" ? 18 : 15 }}>{icon}</span>}
    </motion.button>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────
export function Badge({ children, color = T.primary }: { children: ReactNode; color?: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: `${color}10`, color, borderRadius: T.r.full,
      padding: "6px 16px", fontSize: 13, fontWeight: 600, fontFamily: font,
      letterSpacing: "0.02em",
    }}>
      {children}
    </span>
  );
}

// ─── Section Title ────────────────────────────────────────────────────
export function SectionTitle({ badge, title, subtitle, align = "center" }: {
  badge?: string; title: string; subtitle?: string; align?: "center" | "left";
}) {
  return (
    <motion.div {...fadeIn} style={{ textAlign: align, maxWidth: 680, margin: align === "center" ? "0 auto 48px" : "0 0 48px", padding: "0 20px" }}>
      {badge && <div style={{ marginBottom: 16 }}><Badge>{badge}</Badge></div>}
      <h2 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: T.text, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 14px" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: font, fontSize: 17, color: T.textSec, lineHeight: 1.6, margin: 0 }}>{subtitle}</p>}
    </motion.div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────
export function Card({ children, style = {}, hover = true, ...rest }: {
  children: ReactNode; style?: CSSProperties; hover?: boolean; [key: string]: any;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: T.sh.lg } : {}}
      transition={{ duration: 0.25 }}
      style={{
        background: T.surface, borderRadius: T.r.xl, border: `1px solid ${T.border}`,
        padding: 32, boxShadow: T.sh.md, ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── Container ────────────────────────────────────────────────────────
export function Container({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>;
}

// ─── Section ──────────────────────────────────────────────────────────
export function Section({ children, style = {}, bg = "transparent", id }: {
  children: ReactNode; style?: CSSProperties; bg?: string; id?: string;
}) {
  return (
    <section id={id} style={{ padding: "80px 0", background: bg, position: "relative", overflow: "hidden", ...style }}>
      {children}
    </section>
  );
}

// ─── Icon Box ─────────────────────────────────────────────────────────
export function IconBox({ icon, color = T.primary, size = 52 }: { icon: string; color?: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: `${color}10`, display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.46, flexShrink: 0,
    }}>
      {icon}
    </div>
  );
}

// ─── Count Up ─────────────────────────────────────────────────────────
export function CountUp({ target, suffix = "", prefix = "", duration = 2 }: {
  target: number; suffix?: string; prefix?: string; duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, target, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString("nl-NL")}{suffix}</span>;
}

// ─── Compliance Badges ────────────────────────────────────────────────
export function ComplianceBadges() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", padding: "32px 0" }}>
      {[
        { icon: "🔒", label: "256-bit SSL" },
        { icon: "🏛", label: "Qredits Partner" },
        { icon: "✓", label: "AFM Geregistreerd" },
        { icon: "🇪🇺", label: "GDPR Compliant" },
        { icon: "🏦", label: "PSD2 Certified" },
      ].map(b => (
        <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: font, fontSize: 12, fontWeight: 500, color: T.textTer }}>
          <span>{b.icon}</span>{b.label}
        </div>
      ))}
    </div>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────
export function TrustBar() {
  const logos = ["NRC", "Het Financieele Dagblad", "MT/Sprout", "BNR Nieuwsradio", "MSN Financieel"];
  return (
    <Section style={{ padding: "40px 0" }}>
      <Container>
        <motion.div {...fadeIn} style={{ textAlign: "center" }}>
          <p style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: T.textTer, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>Bekend van o.a.</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {logos.map(name => (
              <motion.div key={name} whileHover={{ opacity: 0.9 }} style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 18, color: T.textTer, opacity: 0.35, letterSpacing: "-0.02em" }}>
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
