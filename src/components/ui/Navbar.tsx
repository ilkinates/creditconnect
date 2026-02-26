"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { T, font, fontDisplay } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Container } from "@/components/ui/shared";

export function Navbar() {
  const { page, go } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { id: "home" as const, label: "Home" },
    { id: "financiering" as const, label: "Financiering" },
    { id: "hoe-het-werkt" as const, label: "Hoe het werkt" },
    { id: "over-ons" as const, label: "Over ons" },
    { id: "faq" as const, label: "FAQ" },
    { id: "contact" as const, label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled ? `${T.surface}F0` : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}60` : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => go("home")}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 2px 12px ${T.primary}35`,
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 20, fontFamily: fontDisplay }}>C</span>
          </div>
          <span style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 21, color: T.text, letterSpacing: "-0.03em" }}>
            Credit<span style={{ color: T.primary }}>Connect</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => (
            <motion.button
              key={l.id}
              whileHover={{ color: T.primary }}
              onClick={() => go(l.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: font, fontSize: 15, fontWeight: page === l.id ? 700 : 500,
                color: page === l.id ? T.primary : T.textSec,
                padding: "8px 14px", borderRadius: T.r.sm,
                transition: "all 0.2s",
              }}
            >
              {l.label}
            </motion.button>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Btn variant="ghost" size="sm" onClick={() => go("partners")}>Voor adviseurs</Btn>
          <Btn size="sm" onClick={() => go("financiering")}>Check je mogelijkheden</Btn>
        </div>
      </Container>
    </motion.header>
  );
}
