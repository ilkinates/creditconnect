"use client";
import { motion } from "framer-motion";
import { T, font, fontDisplay, fadeIn, stagger, staggerChild } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Btn, Badge, Card, Container, Section, IconBox, SectionTitle } from "@/components/ui/shared";

export default function PartnersPage() {
  const { go } = useRouter();
  return (
    <>
      <Section style={{ paddingTop: 140, paddingBottom: 60, background: `linear-gradient(180deg, #F5F0FF 0%, #fff 100%)` }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge color={T.purple}>Voor adviseurs & partners</Badge>
              <h1 style={{ fontFamily: fontDisplay, fontWeight: 900, fontSize: "clamp(30px, 4.5vw, 46px)", color: T.text, letterSpacing: "-0.04em", margin: "20px 0 16px", lineHeight: 1.1 }}>Help jouw klanten aan de juiste financiering</h1>
              <p style={{ fontFamily: font, fontSize: 17, color: T.textSec, lineHeight: 1.65, marginBottom: 28 }}>Word partner van CreditConnect en bied je klanten toegang tot Qredits financiering. Verdien een aantrekkelijke commissie per succesvolle aanvraag.</p>
              <div style={{ display: "flex", gap: 12 }}><Btn icon="→" onClick={() => go("contact")}>Word partner</Btn><Btn variant="secondary" onClick={() => go("contact")}>Meer informatie</Btn></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <Card style={{ padding: 36 }} hover={false}>
                {[{ icon: "💸", title: "Commissie per deal", desc: "Aantrekkelijke vergoeding voor elke succesvolle financieringsaanvraag." }, { icon: "📊", title: "Partner Dashboard", desc: "Real-time inzicht in al je aanvragen, goedkeuringen en commissies." }, { icon: "🤝", title: "Dedicated support", desc: "Een vaste accountmanager die met je meedenkt." }, { icon: "🎓", title: "Training & certificering", desc: "Word gecertificeerd CreditConnect-adviseur." }].map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 3 ? 24 : 0 }}>
                    <IconBox icon={f.icon} color={T.purple} size={48} />
                    <div><div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: T.text }}>{f.title}</div><div style={{ fontFamily: font, fontSize: 14, color: T.textSec, lineHeight: 1.5 }}>{f.desc}</div></div>
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
      <Section bg={T.bg}>
        <Container>
          <SectionTitle badge="Partnertypen" title="Voor wie is het partnerprogramma?" subtitle="Accountants, boekhouders, financieel adviseurs en brokers." />
          <motion.div {...stagger} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[{ icon: "📒", title: "Accountants & Boekhouders", desc: "Help je klanten aan financiering en versterk je adviesrol." }, { icon: "🏢", title: "Financieel Adviseurs", desc: "Breid je dienstverlening uit met Qredits financiering." }, { icon: "🌐", title: "Platformpartners", desc: "Integreer CreditConnect in je platform via onze API." }].map((p, i) => (
              <motion.div key={i} {...staggerChild}><Card style={{ textAlign: "center", padding: "36px 24px" }}><IconBox icon={p.icon} color={T.purple} size={56} /><h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 18, color: T.text, margin: "16px 0 8px" }}>{p.title}</h4><p style={{ fontFamily: font, fontSize: 14, color: T.textSec, lineHeight: 1.55, margin: 0 }}>{p.desc}</p></Card></motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
