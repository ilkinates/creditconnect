"use client";
import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn, stagger, staggerChild } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Badge, Card, Container, Section, IconBox, SectionTitle } from "@/components/ui/shared";

export default function OverOnsPage() {
  const { go } = useRouter();
  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 40, background: `linear-gradient(180deg, #F0F3FF 0%, #fff 100%)` }}>
        <Container>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <Badge>Over CreditConnect</Badge>
            <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(32px, 5vw, 50px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Wij maken financiering bereikbaar voor elke ondernemer</h1>
            <p style={{ fontFamily: font, fontSize: 18, color: T.textSec, lineHeight: 1.65 }}>CreditConnect is het digitale platform dat de brug slaat tussen Nederlandse ondernemers en Qredits financiering. Zonder bank, zonder gedoe.</p>
          </motion.div>
        </Container>
      </Section>
      <Section>
        <Container>
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[{ v: "€45M+", label: "Verstrekt aan ondernemers", icon: "💰" }, { v: "2.800+", label: "Ondernemers geholpen", icon: "👥" }, { v: "<24u", label: "Gemiddelde doorlooptijd", icon: "⚡" }].map((s, i) => (
              <motion.div key={i} {...staggerChild}><Card style={{ textAlign: "center", padding: 36 }}><div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div><div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 36, color: T.primary, letterSpacing: "-0.04em" }}>{s.v}</div><div style={{ fontFamily: font, fontSize: 15, color: T.textSec, marginTop: 6 }}>{s.label}</div></Card></motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <Section bg={T.bg}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <motion.div {...fadeIn}>
              <Badge color={T.accent}>Onze Missie</Badge>
              <h2 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 34, color: T.text, letterSpacing: "-0.03em", margin: "16px 0 16px" }}>Geld moet werken voor ondernemers</h2>
              <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.7, marginBottom: 20 }}>Wij geloven dat elke ondernemer met een goed idee toegang moet hebben tot financiering. Traditionele banken zijn te traag, te bureaucratisch en sluiten te veel ondernemers uit.</p>
              <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.7 }}>Door slimme technologie zoals Open Banking, AI-ondernemingsplannen en geautomatiseerde KVK-verificatie versnellen wij het hele aanvraagproces. Van weken naar uren.</p>
            </motion.div>
            <motion.div {...fadeIn}>
              <Card style={{ padding: 40, background: `linear-gradient(135deg, ${T.accent}08, ${T.primary}05)` }} hover={false}>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 22, color: T.text, margin: "0 0 24px" }}>Onze waarden</h3>
                {[{ title: "Transparant", desc: "Geen verborgen kosten, geen kleine lettertjes." }, { title: "Snel", desc: "Technologie die werkt voor ondernemers." }, { title: "Inclusief", desc: "Starters, ZZP'ers en MKB'ers zijn welkom." }, { title: "Verantwoord", desc: "Wij financieren alleen wat verantwoord is." }].map((v, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: T.accentLight, display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</div>
                    <div><div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: T.text }}>{v.title}</div><div style={{ fontFamily: font, fontSize: 14, color: T.textSec }}>{v.desc}</div></div>
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle badge="Ons Team" title="De mensen achter CreditConnect" subtitle="Een team van fintech-enthousiastelingen met een passie voor ondernemerschap." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[{ name: "Daan van Dijk", role: "CEO & Co-founder", emoji: "👨‍💼" }, { name: "Elif Kaplan", role: "CTO & Co-founder", emoji: "👩‍💻" }, { name: "Lars Jansen", role: "Head of Product", emoji: "👨‍🔬" }, { name: "Priya Sharma", role: "Head of Partnerships", emoji: "👩‍🤝‍👩" }].map((t, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ textAlign: "center", padding: "32px 20px" }}>
                  <div style={{ width: 80, height: 80, borderRadius: 99, margin: "0 auto 16px", background: `linear-gradient(135deg, ${T.primaryLight}, ${T.accentLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>{t.emoji}</div>
                  <div style={{ fontFamily: font, fontWeight: 700, fontSize: 16, color: T.text }}>{t.name}</div>
                  <div style={{ fontFamily: font, fontSize: 14, color: T.textSec, marginTop: 2 }}>{t.role}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <Section bg={T.bg}>
        <Container>
          <motion.div {...fadeIn} style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 32, color: T.text, letterSpacing: "-0.03em", margin: "0 0 14px" }}>Wil je samenwerken?</h2>
            <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, marginBottom: 28 }}>We zijn altijd op zoek naar partners, adviseurs en getalenteerde mensen.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}><Btn onClick={() => go("partners")}>Word partner →</Btn><Btn variant="secondary" onClick={() => go("contact")}>Neem contact op</Btn></div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
