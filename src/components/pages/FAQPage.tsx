"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font, fontDisplay, fadeIn } from "@/lib/tokens";
import { Badge, Container, Section } from "@/components/ui/shared";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const categories = [
    { title: "Financiering", items: [
      { q: "Hoeveel kan ik lenen via CreditConnect?", a: "Via ons platform kun je €5.000 tot €500.000 aanvragen bij Qredits, met een looptijd van 12 tot 120 maanden. Het exacte bedrag hangt af van je omzet, cashflow, bestaande verplichtingen en het risicoprofiel van je bedrijf." },
      { q: "Heb ik een businessplan nodig?", a: "Voor het MKB Krediet (>€50.000) is geen businessplan nodig — wij analyseren je financiële data via Open Banking. Voor het Microkrediet voor starters helpt onze AI je bij het genereren van een Qredits-compliant ondernemingsplan." },
      { q: "Hoe snel is het geld beschikbaar?", a: "Na goedkeuring door Qredits wordt het geld meestal binnen 1-3 werkdagen overgemaakt naar je zakelijke bankrekening. Het volledige aanvraagproces duurt gemiddeld 24 uur." },
      { q: "Wat zijn de rentepercentages?", a: "De rente varieert per product: Microkrediet vanaf 5,75% en MKB Krediet vanaf 4,50%. Het exacte tarief is afhankelijk van het bedrag, de looptijd en je financiële profiel." },
      { q: "Kan ik vervroegd aflossen?", a: "Ja! Je kunt op elk moment vervroegd aflossen. De exacte voorwaarden hiervoor worden opgenomen in je leenovereenkomst met Qredits." },
    ]},
    { title: "Open Banking & Privacy", items: [
      { q: "Wat is Open Banking / PSD2?", a: "PSD2 is Europese wetgeving die het mogelijk maakt om veilig je bankgegevens te delen met gecertificeerde diensten. Wij gebruiken dit om je financiële data automatisch te analyseren." },
      { q: "Welke banken worden ondersteund?", a: "Momenteel ondersteunen wij Rabobank, ING, ABN AMRO en andere grote Nederlandse banken. Daarnaast bieden we integratie met boekhoudpakketten via Kurumsoft ERP." },
      { q: "Is mijn financiële data veilig?", a: "Absoluut. We gebruiken 256-bit SSL encryptie, zijn PSD2-gecertificeerd en voldoen volledig aan de AVG/GDPR. Je data wordt nooit gedeeld met derden zonder jouw toestemming." },
    ]},
    { title: "Over CreditConnect", items: [
      { q: "Wat is het verschil met een bank?", a: "CreditConnect is geen bank. Wij zijn een technologieplatform dat je verbindt met Qredits financiering. Het voordeel: sneller, minder papierwerk, en ook toegankelijk voor ondernemers die niet bij de bank terecht kunnen." },
      { q: "Is CreditConnect gratis?", a: "Ja, het gebruik van ons platform is volledig gratis. Er zijn geen aanvraag-, afsluit- of advieskosten. Je betaalt alleen de rente en aflossing op je Qredits lening." },
      { q: "Wat als mijn aanvraag wordt afgewezen?", a: "Als je niet in aanmerking komt, leggen we altijd uit waarom. Onze adviseurs denken graag mee over alternatieven of hoe je je financiële positie kunt verbeteren." },
    ]},
  ];
  let globalIdx = 0;
  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 40, background: `linear-gradient(180deg, ${T.bg} 0%, #fff 100%)` }}>
        <Container><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <Badge>Veelgestelde vragen</Badge>
          <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(32px, 5vw, 48px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Hoe kunnen we helpen?</h1>
          <p style={{ fontFamily: font, fontSize: 17, color: T.textSec, lineHeight: 1.6 }}>Antwoorden op de meestgestelde vragen over CreditConnect en Qredits financiering.</p>
        </motion.div></Container>
      </Section>
      <Section style={{ paddingTop: 20 }}>
        <Container style={{ maxWidth: 760 }}>
          {categories.map((cat, ci) => {
            return (
              <motion.div key={ci} {...fadeIn} style={{ marginBottom: 48 }}>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 22, color: T.text, marginBottom: 16, letterSpacing: "-0.02em" }}>{cat.title}</h3>
                {cat.items.map((item, ii) => {
                  const idx = globalIdx++;
                  const isOpen = openIdx === idx;
                  const currentIdx = idx;
                  return (
                    <motion.div key={ii} style={{ marginBottom: 8 }}>
                      <motion.div onClick={() => setOpenIdx(isOpen ? null : currentIdx)} whileHover={{ background: T.bg }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderRadius: T.r.lg, cursor: "pointer", background: isOpen ? T.bg : T.surface, border: `1px solid ${isOpen ? T.primary + "20" : T.border}`, transition: "all 0.2s" }}>
                        <span style={{ fontFamily: font, fontWeight: 600, fontSize: 15, color: T.text }}>{item.q}</span>
                        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} style={{ fontSize: 20, color: T.primary, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>+</motion.span>
                      </motion.div>
                      <AnimatePresence>
                        {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}><div style={{ padding: "16px 24px", fontFamily: font, fontSize: 15, color: T.textSec, lineHeight: 1.65 }}>{item.a}</div></motion.div>)}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </Container>
      </Section>
    </>
  );
}
