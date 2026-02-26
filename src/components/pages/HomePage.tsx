"use client";

import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn, stagger, staggerChild } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Badge, Card, Container, Section, IconBox, SectionTitle, CountUp, TrustBar, ComplianceBadges } from "@/components/ui/shared";

export default function HomePage() {
  const { go } = useRouter();

  return (
    <>
      {/* ── Hero ── */}
      <Section style={{ paddingTop: 140, paddingBottom: 80, background: `linear-gradient(180deg, ${T.bg} 0%, #fff 100%)` }}>
        <div style={{ position: "absolute", top: -100, right: -200, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${T.primary}06 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -200, left: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${T.accent}05 0%, transparent 70%)`, pointerEvents: "none" }} />

        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <Badge color={T.accent}>✦ Officieel Qredits Partner</Badge>
              <h1 style={{
                fontFamily: fontDisplay, fontWeight: 900,
                fontSize: "clamp(36px, 5vw, 58px)", color: T.text,
                letterSpacing: "-0.04em", lineHeight: 1.08,
                margin: "20px 0 20px",
              }}>
                Zakelijke financiering<br />
                <span style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  zonder gedoe
                </span>
              </h1>
              <p style={{ fontFamily: font, fontSize: 18, color: T.textSec, lineHeight: 1.65, margin: "0 0 32px", maxWidth: 480 }}>
                CreditConnect verbindt Nederlandse MKB&apos;ers en starters met Qredits financiering. Van €5.000 tot €500.000. Slim, snel en volledig digitaal.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Btn size="lg" onClick={() => go("financiering")} icon="→">Check je mogelijkheden</Btn>
                <Btn variant="secondary" size="lg" onClick={() => go("hoe-het-werkt")}>Hoe het werkt</Btn>
              </div>
              <p style={{ fontFamily: font, fontSize: 13, color: T.textTer, marginTop: 14 }}>✓ Geheel vrijblijvend en kosteloos</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
              <div style={{ position: "relative" }}>
                <Card style={{ padding: 36, border: `1px solid ${T.border}`, boxShadow: T.sh.xl }} hover={false}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <IconBox icon="💰" color={T.accent} size={44} />
                    <div>
                      <div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: T.text }}>Financieringsaanvraag</div>
                      <div style={{ fontFamily: font, fontSize: 13, color: T.textSec }}>Resultaat binnen 24 uur</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                    <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 48, color: T.text, letterSpacing: "-0.04em" }}>€125.000</div>
                  </div>
                  <div style={{ height: 8, background: T.borderLight, borderRadius: 99, overflow: "hidden", marginBottom: 12 }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      style={{ height: "100%", background: `linear-gradient(90deg, ${T.primary}, ${T.accent})`, borderRadius: 99 }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: font, fontSize: 12, color: T.textTer }}>
                    <span>€5.000</span><span>€500.000</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 24 }}>
                    {[{ l: "Looptijd", v: "60 maanden" }, { l: "Maandbedrag", v: "€2.480" }, { l: "Type", v: "MKB Krediet" }, { l: "Status", v: "✓ Goedgekeurd", c: T.accent }].map(i => (
                      <div key={i.l} style={{ background: T.bg, borderRadius: T.r.md, padding: "12px 14px" }}>
                        <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: T.textTer, textTransform: "uppercase", letterSpacing: "0.05em" }}>{i.l}</div>
                        <div style={{ fontFamily: font, fontSize: 14, fontWeight: 700, color: i.c || T.text, marginTop: 2 }}>{i.v}</div>
                      </div>
                    ))}
                  </div>
                </Card>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  style={{ position: "absolute", top: -16, right: -16, background: T.accent, color: "#fff", borderRadius: T.r.md, padding: "10px 16px", fontFamily: font, fontWeight: 700, fontSize: 13, boxShadow: `0 4px 20px ${T.accent}40` }}>
                  ⚡ Binnen 24 uur
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <TrustBar />

      {/* ── What We Do ── */}
      <Section bg={T.bg}>
        <Container>
          <SectionTitle badge="Wat wij doen" title="Wij verbinden ondernemers met de juiste financiering" subtitle="CreditConnect is het digitale platform dat Nederlandse MKB'ers en starters koppelt aan Qredits microkredieten en MKB-leningen. Geen bank, geen gedoe." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: "🏦", title: "Geen bank nodig", desc: "Via ons platform vraag je rechtstreeks Qredits financiering aan. Zonder tussenkomst van traditionele banken.", color: T.primary },
              { icon: "⚡", title: "Aangevraagd in 5 minuten", desc: "Ons slimme aanvraagproces is volledig digitaal. KVK-check, financiële data en leningconfiguratie in één flow.", color: T.warm },
              { icon: "🎯", title: "Binnen 24 uur duidelijkheid", desc: "Na goedkeuring staat het geld snel op je rekening. Ons record? Dezelfde dag nog uitbetaald.", color: T.accent },
            ].map((item, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ height: "100%", textAlign: "center", padding: "40px 28px" }}>
                  <div style={{ margin: "0 auto 20px" }}><IconBox icon={item.icon} color={item.color} size={60} /></div>
                  <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 20, color: T.text, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p style={{ fontFamily: font, fontSize: 15, color: T.textSec, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── Stats ── */}
      <Section>
        <Container>
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { value: 45, suffix: "M+", prefix: "€", label: "Verstrekt aan ondernemers", color: T.primary },
              { value: 2800, suffix: "+", label: "Ondernemers geholpen", color: T.accent },
              { value: 4.8, suffix: "/5", label: "Klanttevredenheid", color: T.warm },
              { value: 24, suffix: " uur", label: "Gemiddelde doorlooptijd", color: T.purple },
            ].map((s, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ textAlign: "center", padding: "36px 20px" }}>
                  <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 40, color: s.color, letterSpacing: "-0.04em", lineHeight: 1 }}>
                    <CountUp target={s.value} prefix={s.prefix || ""} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: font, fontSize: 14, color: T.textSec, marginTop: 8, fontWeight: 500 }}>{s.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── Products Preview ── */}
      <Section bg={T.bg}>
        <Container>
          <SectionTitle badge="Onze producten" title="De juiste financiering voor elke fase" subtitle="Of je nu net start of al jaren ondernemer bent — wij hebben de financieringsoplossing die bij je past." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { title: "Microkrediet", subtitle: "Voor starters & kleine ondernemers", range: "€5.000 - €50.000", features: ["Geen jaarcijfers nodig", "Persoonlijke coaching", "AI ondernemingsplan", "Starters welkom"], color: T.purple, icon: "🚀", badge: "Starters" },
              { title: "MKB Krediet", subtitle: "Voor gevestigde ondernemers", range: "€50.000 - €500.000", features: ["Open Banking integratie", "Snelle beoordeling", "Looptijd 12 - 120 maanden", "Concurrerende tarieven"], color: T.primary, icon: "📈", badge: "MKB" },
            ].map((p, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ padding: "28px 32px 20px", background: `linear-gradient(135deg, ${p.color}08, ${p.color}03)` }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                      <Badge color={p.color}>{p.badge}</Badge>
                      <span style={{ fontSize: 36 }}>{p.icon}</span>
                    </div>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 26, color: T.text, margin: "0 0 4px", letterSpacing: "-0.03em" }}>{p.title}</h3>
                    <p style={{ fontFamily: font, fontSize: 15, color: T.textSec, margin: "0 0 12px" }}>{p.subtitle}</p>
                    <div style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 22, color: p.color, letterSpacing: "-0.02em" }}>{p.range}</div>
                  </div>
                  <div style={{ padding: "20px 32px 28px" }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontFamily: font, fontSize: 14, color: T.textSec }}>
                        <span style={{ color: T.accent, fontWeight: 700, fontSize: 15 }}>✓</span> {f}
                      </div>
                    ))}
                    <div style={{ marginTop: 20 }}>
                      <Btn variant="outline" onClick={() => go("financiering")} style={{ width: "100%", borderColor: p.color, color: p.color }}>Meer informatie →</Btn>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── How it Works Preview ── */}
      <Section>
        <Container>
          <SectionTitle badge="Zo werkt het" title="Financiering in 4 simpele stappen" subtitle="Van aanvraag tot uitbetaling — alles online en binnen 24 uur." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { n: "01", title: "KVK Verificatie", desc: "Voer je KVK-nummer in. Wij halen automatisch je bedrijfsgegevens op.", icon: "🔍", color: T.primary },
              { n: "02", title: "Financiële Data", desc: "Koppel je bankrekening via Open Banking. Geen PDF-uploads nodig.", icon: "🏦", color: T.accent },
              { n: "03", title: "Lening Configuratie", desc: "Kies het bedrag en looptijd (12-120 mnd) dat bij je past met onze slimme calculator.", icon: "⚙️", color: T.warm },
              { n: "04", title: "AI Ondernemingsplan", desc: "Voor starters: onze AI genereert een Qredits-compliant businessplan.", icon: "🤖", color: T.purple },
            ].map((s, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ textAlign: "center", padding: "32px 20px", position: "relative" }}>
                  <div style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: 48, color: `${s.color}12`, position: "absolute", top: 12, right: 16, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                  <IconBox icon={s.icon} color={s.color} size={52} />
                  <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 17, color: T.text, margin: "16px 0 8px", letterSpacing: "-0.01em" }}>{s.title}</h4>
                  <p style={{ fontFamily: font, fontSize: 14, color: T.textSec, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeIn} style={{ textAlign: "center", marginTop: 36 }}>
            <Btn onClick={() => go("hoe-het-werkt")}>Bekijk het volledige proces →</Btn>
          </motion.div>
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section bg={T.bg}>
        <Container>
          <SectionTitle badge="Klantervaringen" title="Al 2.800+ ondernemers gingen je voor!" subtitle="Lees wat andere ondernemers over CreditConnect zeggen." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { name: "Marieke de Vries", company: "Studio Bloem Amsterdam", quote: "Binnen 3 uur had ik een aanbod op maat. Na 6 maanden zoeken bij banken was dit een verademing.", stars: 5, amount: "€35.000" },
              { name: "Bas van den Berg", company: "TechFlow Solutions B.V.", quote: "De Open Banking koppeling werkte feilloos. Geen papierwerk, geen gedoe. Precies wat je nodig hebt.", stars: 5, amount: "€150.000" },
              { name: "Sofia Yilmaz", company: "Café Simit", quote: "Als starter dacht ik dat financiering onmogelijk was. CreditConnect hielp me met alles. Nu heb ik mijn eigen zaak!", stars: 5, amount: "€25.000" },
            ].map((t, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>{Array(t.stars).fill(0).map((_, s) => <span key={s} style={{ color: "#FFB800", fontSize: 18 }}>★</span>)}</div>
                  <p style={{ fontFamily: font, fontSize: 15, color: T.textSec, lineHeight: 1.65, margin: "0 0 20px", flex: 1, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ borderTop: `1px solid ${T.borderLight}`, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: font, fontWeight: 700, fontSize: 14, color: T.text }}>{t.name}</div>
                      <div style={{ fontFamily: font, fontSize: 13, color: T.textTer }}>{t.company}</div>
                    </div>
                    <Badge color={T.accent}>{t.amount}</Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section>
        <Container>
          <motion.div {...fadeIn}>
            <Card style={{ padding: "60px 48px", textAlign: "center", background: `linear-gradient(135deg, ${T.primary}06, ${T.purple}06)`, border: `1px solid ${T.primary}15` }} hover={false}>
              <h2 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(26px, 4vw, 38px)", color: T.text, letterSpacing: "-0.03em", margin: "0 0 14px" }}>Klaar om je bedrijf te laten groeien?</h2>
              <p style={{ fontFamily: font, fontSize: 17, color: T.textSec, margin: "0 0 32px", maxWidth: 500, marginInline: "auto", lineHeight: 1.6 }}>Een aanvraag is altijd vrijblijvend en kosteloos. Check binnen 5 minuten wat je mogelijkheden zijn.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Btn size="lg" onClick={() => go("financiering")} icon="→">Start je aanvraag</Btn>
                <Btn variant="secondary" size="lg" onClick={() => go("contact")}>Neem contact op</Btn>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      <ComplianceBadges />
    </>
  );
}
