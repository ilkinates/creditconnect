"use client";
import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Badge, Card, Container, Section, IconBox, SectionTitle } from "@/components/ui/shared";

export default function HoeHetWerktPage() {
  const { go } = useRouter();
  const steps = [
    { n: "01", title: "Identificatie via KVK", icon: "🔍", color: T.primary, desc: "Voer je 8-cijferig KVK-nummer in. Ons systeem haalt automatisch je bedrijfsgegevens op via de KVK API: handelsnaam, rechtsvorm, startdatum en SBI-code.", details: ["Automatische KVK-verificatie", "Bedrijfsgegevens in seconden", "Handelsregister koppeling"] },
    { n: "02", title: "Financiële Data via Open Banking", icon: "🏦", color: T.accent, desc: "Koppel je bankrekening via PSD2 Open Banking. Geen PDF-uploads meer. Je financiële data wordt veilig en automatisch gesynchroniseerd.", details: ["Rabobank, ING, ABN AMRO", "PSD2 gecertificeerd", "Kurumsoft ERP integratie"] },
    { n: "03", title: "Leningconfiguratie", icon: "⚙️", color: T.warm, desc: "Configureer je ideale lening met onze interactieve slider. Kies het bedrag (€5K-€500K), de looptijd (12-120 maanden) en het investeringsdoel.", details: ["€5.000 tot €500.000", "Looptijd 12 - 120 maanden", "Realtime berekeningen"] },
    { n: "04", title: "AI Ondernemingsplan", icon: "🤖", color: T.purple, desc: "Voor starters: onze AI genereert een compleet, Qredits-conform ondernemingsplan op basis van jouw bedrijfsbeschrijving.", details: ["LLM-powered generatie", "Qredits-compliant format", "Marktanalyse & prognoses"] },
  ];
  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 40, background: `linear-gradient(180deg, ${T.accentLight}50 0%, #fff 100%)` }}>
        <Container>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <Badge color={T.accent}>Hoe het werkt</Badge>
            <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(32px, 5vw, 50px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Financiering in 4 simpele stappen</h1>
            <p style={{ fontFamily: font, fontSize: 18, color: T.textSec, lineHeight: 1.6 }}>Van KVK-check tot uitbetaling. Volledig digitaal, zonder papierwerk.</p>
          </motion.div>
        </Container>
      </Section>
      <Section>
        <Container>
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeIn} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.1fr" : "1.1fr 1fr", gap: 48, alignItems: "center", marginBottom: i < steps.length - 1 ? 72 : 0 }}>
              {i % 2 === 1 && (
                <Card style={{ padding: 36, background: `linear-gradient(135deg, ${step.color}06, transparent)` }} hover={false}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <IconBox icon={step.icon} color={step.color} size={56} />
                    <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 64, color: `${step.color}10`, letterSpacing: "-0.04em", lineHeight: 1 }}>{step.n}</div>
                  </div>
                  {step.details.map(d => (<div key={d} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontFamily: font, fontSize: 15, color: T.textSec }}><div style={{ width: 6, height: 6, borderRadius: 99, background: step.color, flexShrink: 0 }} />{d}</div>))}
                </Card>
              )}
              <div>
                <Badge color={step.color}>Stap {step.n}</Badge>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 30, color: T.text, letterSpacing: "-0.03em", margin: "14px 0 12px" }}>{step.title}</h3>
                <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
              {i % 2 === 0 && (
                <Card style={{ padding: 36, background: `linear-gradient(135deg, ${step.color}06, transparent)` }} hover={false}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <IconBox icon={step.icon} color={step.color} size={56} />
                    <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 64, color: `${step.color}10`, letterSpacing: "-0.04em", lineHeight: 1 }}>{step.n}</div>
                  </div>
                  {step.details.map(d => (<div key={d} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontFamily: font, fontSize: 15, color: T.textSec }}><div style={{ width: 6, height: 6, borderRadius: 99, background: step.color, flexShrink: 0 }} />{d}</div>))}
                </Card>
              )}
            </motion.div>
          ))}
        </Container>
      </Section>
      <Section bg={T.bg}>
        <Container>
          <motion.div {...fadeIn} style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 32, color: T.text, letterSpacing: "-0.03em", margin: "0 0 14px" }}>En dan? Geld op je rekening!</h2>
            <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.6, marginBottom: 32 }}>Na goedkeuring door Qredits wordt het geld overgemaakt naar je zakelijke rekening. Meestal binnen 1-3 werkdagen.</p>
            <Btn size="lg" onClick={() => go("financiering")} icon="→">Start je aanvraag nu</Btn>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
