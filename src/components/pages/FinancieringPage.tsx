"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn, stagger, staggerChild } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Badge, Card, Container, Section, IconBox, SectionTitle, ComplianceBadges } from "@/components/ui/shared";

export default function FinancieringPage() {
  const { go } = useRouter();
  const [amount, setAmount] = useState(125000);
  const [term, setTerm] = useState(60);
  const min = 5000, max = 500000, tMin = 12, tMax = 120;
  const pct = ((amount - min) / (max - min)) * 100;
  const tPct = ((term - tMin) / (tMax - tMin)) * 100;
  const monthlyEst = Math.round(amount / term * 1.045);
  const fmt = (v: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", minimumFractionDigits: 0 }).format(v);

  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 60, background: `linear-gradient(180deg, ${T.primaryLight}60 0%, #fff 100%)` }}>
        <Container>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <Badge color={T.primary}>Financiering</Badge>
            <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Zakelijke financiering<br />zonder gedoe</h1>
            <p style={{ fontFamily: font, fontSize: 18, color: T.textSec, lineHeight: 1.6, margin: "0 0 40px" }}>Jouw financiële partner in groei. Van microkrediet tot MKB-lening, altijd via Qredits.</p>
            <Card style={{ maxWidth: 520, margin: "0 auto", padding: 36 }} hover={false}>
              <div style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: T.textSec, marginBottom: 8 }}>Hoeveel heb je nodig?</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 44, color: T.text, letterSpacing: "-0.04em", marginBottom: 20 }}>{fmt(amount)}</div>
              <div style={{ position: "relative", height: 40, marginBottom: 8 }}>
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 8, background: T.borderLight, borderRadius: 99, transform: "translateY(-50%)" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${T.primary}, ${T.accent})`, borderRadius: 99, transition: "width 0.1s" }} />
                </div>
                <input type="range" min={min} max={max} step={5000} value={amount} onChange={e => setAmount(+e.target.value)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", margin: 0 }} />
                <div style={{ position: "absolute", top: "50%", left: `${pct}%`, transform: "translate(-50%, -50%)", width: 24, height: 24, borderRadius: 99, background: "#fff", border: `3px solid ${T.primary}`, boxShadow: T.sh.glow, pointerEvents: "none", transition: "left 0.1s" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: font, fontSize: 12, color: T.textTer, marginBottom: 28 }}>
                <span>{fmt(min)}</span><span>{fmt(max)}</span>
              </div>
              <div style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: T.textSec, marginBottom: 8 }}>Looptijd</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 28, color: T.text, letterSpacing: "-0.03em", marginBottom: 16, textAlign: "center" }}>
                {term} maanden <span style={{ fontSize: 16, fontWeight: 500, color: T.textTer }}>({(term / 12).toFixed(term % 12 === 0 ? 0 : 1)} jaar)</span>
              </div>
              <div style={{ position: "relative", height: 40, marginBottom: 8 }}>
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 8, background: T.borderLight, borderRadius: 99, transform: "translateY(-50%)" }}>
                  <div style={{ width: `${tPct}%`, height: "100%", background: `linear-gradient(90deg, ${T.purple}, ${T.primary})`, borderRadius: 99, transition: "width 0.1s" }} />
                </div>
                <input type="range" min={tMin} max={tMax} step={6} value={term} onChange={e => setTerm(+e.target.value)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", margin: 0 }} />
                <div style={{ position: "absolute", top: "50%", left: `${tPct}%`, transform: "translate(-50%, -50%)", width: 24, height: 24, borderRadius: 99, background: "#fff", border: `3px solid ${T.purple}`, boxShadow: `0 4px 16px ${T.purple}30`, pointerEvents: "none", transition: "left 0.1s" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: font, fontSize: 12, color: T.textTer, marginBottom: 24 }}>
                <span>{tMin} maanden</span><span>{tMax} maanden</span>
              </div>
              <div style={{ background: `linear-gradient(135deg, ${T.primaryLight}80, ${T.accentLight}40)`, borderRadius: T.r.lg, padding: "16px 20px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: font, fontSize: 14, fontWeight: 600, color: T.textSec }}>Geschatte maandlast</span>
                <span style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 22, color: T.primary, letterSpacing: "-0.02em" }}>{fmt(monthlyEst)}/mnd</span>
              </div>
              <Btn style={{ width: "100%" }} size="lg" onClick={() => go("hoe-het-werkt")} icon="→">Check je mogelijkheden</Btn>
              <p style={{ fontFamily: font, fontSize: 13, color: T.textTer, marginTop: 10, textAlign: "center" }}>Geheel vrijblijvend en kosteloos</p>
            </Card>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle badge="Qredits Producten" title="Welke financiering past bij jou?" subtitle="We bieden twee hoofdproducten via Qredits, elk afgestemd op een andere fase van ondernemen." />
          <motion.div {...fadeIn} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", marginBottom: 64 }}>
            <div>
              <Badge color={T.purple}>Microkrediet</Badge>
              <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 32, color: T.text, letterSpacing: "-0.03em", margin: "16px 0 12px" }}>€5.000 — €50.000</h3>
              <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.65, marginBottom: 24 }}>Speciaal voor starters en kleine ondernemers die hun bedrijf willen lanceren of een eerste groeistap willen maken. Met persoonlijke coaching van Qredits.</p>
              {["Geen jaarcijfers vereist", "AI-gegenereerd ondernemingsplan", "Persoonlijke Qredits coach", "Looptijd 12 - 120 maanden", "Starters expliciet welkom"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ color: T.accent, fontWeight: 700 }}>✓</span><span style={{ fontFamily: font, fontSize: 15, color: T.textSec }}>{f}</span></div>
              ))}
            </div>
            <Card style={{ padding: 36, background: `linear-gradient(135deg, ${T.purple}06, ${T.primary}04)` }} hover={false}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[{ l: "Bedrag", v: "€5K - €50K" }, { l: "Looptijd", v: "12 - 120 maanden" }, { l: "Rente", v: "Vanaf 5,75%" }, { l: "Doorlooptijd", v: "1 - 2 weken" }, { l: "Doelgroep", v: "Starters & ZZP" }, { l: "Coaching", v: "Inbegrepen" }].map(i => (
                  <div key={i.l}><div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: T.textTer, textTransform: "uppercase", letterSpacing: "0.05em" }}>{i.l}</div><div style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: T.text, marginTop: 4 }}>{i.v}</div></div>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div {...fadeIn} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <Card style={{ padding: 36, background: `linear-gradient(135deg, ${T.primary}06, ${T.accent}04)` }} hover={false}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[{ l: "Bedrag", v: "€50K - €500K" }, { l: "Looptijd", v: "12 - 120 maanden" }, { l: "Rente", v: "Vanaf 4,50%" }, { l: "Doorlooptijd", v: "3 - 5 werkdagen" }, { l: "Doelgroep", v: "Gevestigd MKB" }, { l: "Open Banking", v: "PSD2 integratie" }].map(i => (
                  <div key={i.l}><div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: T.textTer, textTransform: "uppercase", letterSpacing: "0.05em" }}>{i.l}</div><div style={{ fontFamily: font, fontSize: 16, fontWeight: 700, color: T.text, marginTop: 4 }}>{i.v}</div></div>
                ))}
              </div>
            </Card>
            <div>
              <Badge color={T.primary}>MKB Krediet</Badge>
              <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 32, color: T.text, letterSpacing: "-0.03em", margin: "16px 0 12px" }}>€50.000 — €500.000</h3>
              <p style={{ fontFamily: font, fontSize: 16, color: T.textSec, lineHeight: 1.65, marginBottom: 24 }}>Voor gevestigde ondernemers die willen investeren in groei, apparatuur, werkkapitaal of een bedrijfsovername.</p>
              {["Automatische financiële analyse via PSD2", "Geen businessplan nodig", "Looptijd van 12 tot 120 maanden", "Concurrerende rente", "Vervroegd aflossen mogelijk"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ color: T.accent, fontWeight: 700 }}>✓</span><span style={{ fontFamily: font, fontSize: 15, color: T.textSec }}>{f}</span></div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section bg={T.bg}>
        <Container>
          <SectionTitle badge="Voorwaarden" title="Kom ik in aanmerking?" subtitle="Controleer of je voldoet aan de basisvoorwaarden voor Qredits financiering." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[{ icon: "📋", title: "KVK-inschrijving", desc: "Je bedrijf moet ingeschreven staan bij de Kamer van Koophandel." }, { icon: "📅", title: "Min. 6 maanden actief", desc: "Je bedrijf is minimaal een half jaar operationeel." }, { icon: "🏦", title: "Zakelijke bankrekening", desc: "Je hebt een actieve zakelijke bankrekening." }, { icon: "🇳🇱", title: "Nederlands bedrijf", desc: "Je bedrijf is gevestigd in Nederland." }].map((v, i) => (
              <motion.div key={i} {...staggerChild}><Card style={{ textAlign: "center", padding: "32px 20px" }}><IconBox icon={v.icon} size={52} /><h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 16, color: T.text, margin: "14px 0 6px" }}>{v.title}</h4><p style={{ fontFamily: font, fontSize: 13, color: T.textSec, lineHeight: 1.55, margin: 0 }}>{v.desc}</p></Card></motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <ComplianceBadges />
    </>
  );
}
