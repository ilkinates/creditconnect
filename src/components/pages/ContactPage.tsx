"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn } from "@/lib/tokens";
import { Badge, Card, Container, Section, IconBox } from "@/components/ui/shared";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 40, background: `linear-gradient(180deg, ${T.bg} 0%, #fff 100%)` }}>
        <Container><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <Badge>Contact</Badge>
          <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(32px, 5vw, 48px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Vragen? Wij denken graag met je mee</h1>
          <p style={{ fontFamily: font, fontSize: 17, color: T.textSec, lineHeight: 1.6 }}>Onze Customer Success Managers staan voor je klaar.</p>
        </motion.div></Container>
      </Section>
      <Section style={{ paddingTop: 20 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40 }}>
            <motion.div {...fadeIn}>
              <Card style={{ padding: 36, marginBottom: 20 }}>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 20, color: T.text, marginBottom: 24 }}>Direct contact</h3>
                {[{ icon: "📞", label: "Telefoon", value: "085 - 401 8800", sub: "Ma t/m do 8:30 - 18:00 · Vr 8:30 - 17:00" }, { icon: "✉️", label: "E-mail", value: "info@creditconnect.nl" }, { icon: "📍", label: "Adres", value: "Herengracht 420, 1017 BZ Amsterdam" }].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                    <IconBox icon={c.icon} size={44} />
                    <div><div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: T.text }}>{c.label}</div><div style={{ fontFamily: font, fontSize: 14, color: T.primary, fontWeight: 600 }}>{c.value}</div>{c.sub && <div style={{ fontFamily: font, fontSize: 12, color: T.textTer, marginTop: 2 }}>{c.sub}</div>}</div>
                  </div>
                ))}
              </Card>
              <Card style={{ padding: 28 }}>
                <div style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: T.textSec, marginBottom: 14 }}>Jouw Customer Success Managers</div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[{ name: "Pieter", emoji: "👨‍💼" }, { name: "Maria", emoji: "👩‍💼" }, { name: "Sam", emoji: "🧑‍💼" }].map(m => (
                    <div key={m.name} style={{ textAlign: "center" }}><div style={{ width: 56, height: 56, borderRadius: 99, background: T.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 6 }}>{m.emoji}</div><div style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: T.text }}>{m.name}</div></div>
                  ))}
                </div>
              </Card>
            </motion.div>
            <motion.div {...fadeIn}>
              <Card style={{ padding: 36 }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: 99, background: T.accentLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>✓</div>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 24, color: T.text, margin: "0 0 8px" }}>Bedankt voor je bericht!</h3>
                    <p style={{ fontFamily: font, fontSize: 15, color: T.textSec }}>We nemen binnen 1 werkdag contact met je op.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 20, color: T.text, marginBottom: 24 }}>Stuur een bericht</h3>
                    {[{ label: "Naam", placeholder: "Je volledige naam", type: "text" }, { label: "E-mailadres", placeholder: "naam@bedrijf.nl", type: "email" }, { label: "Telefoonnummer", placeholder: "+31 6 ...", type: "tel" }, { label: "Bedrijfsnaam", placeholder: "Je bedrijfsnaam", type: "text" }].map(f => (
                      <div key={f.label} style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", fontFamily: font, fontSize: 13, fontWeight: 600, color: T.textSec, marginBottom: 6, letterSpacing: "0.02em" }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "14px 18px", borderRadius: T.r.md, border: `1.5px solid ${T.border}`, fontSize: 15, fontFamily: font, color: T.text, outline: "none", background: T.bg, transition: "border-color 0.2s", boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ display: "block", fontFamily: font, fontSize: 13, fontWeight: 600, color: T.textSec, marginBottom: 6 }}>Bericht</label>
                      <textarea rows={4} placeholder="Waar kunnen we je mee helpen?" style={{ width: "100%", padding: "14px 18px", borderRadius: T.r.md, border: `1.5px solid ${T.border}`, fontSize: 15, fontFamily: font, color: T.text, outline: "none", background: T.bg, resize: "vertical", lineHeight: 1.5, boxSizing: "border-box" }} />
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setSubmitted(true)} style={{ width: "100%", background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`, color: "#fff", border: "none", borderRadius: T.r.lg, padding: "18px 36px", fontSize: 17, fontWeight: 600, fontFamily: font, cursor: "pointer", boxShadow: T.sh.glow }}>Verstuur bericht →</motion.button>
                    <p style={{ fontFamily: font, fontSize: 12, color: T.textTer, marginTop: 10, textAlign: "center" }}>We respecteren je privacy. Zie ons privacybeleid.</p>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
