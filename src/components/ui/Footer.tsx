"use client";

import { T, font, fontDisplay } from "@/lib/tokens";
import { useRouter } from "@/lib/router-context";
import { Container } from "@/components/ui/shared";

export function Footer() {
  const { go } = useRouter();

  const cols = [
    { title: "CreditConnect", links: [
      { label: "Over ons", id: "over-ons" as const }, { label: "Partners", id: "partners" as const },
      { label: "Contact", id: "contact" as const }, { label: "Vacatures", id: "over-ons" as const },
      { label: "Blog", id: "home" as const }, { label: "Pers", id: "over-ons" as const },
    ]},
    { title: "Financiering", links: [
      { label: "Microkrediet", id: "financiering" as const }, { label: "MKB Krediet", id: "financiering" as const },
      { label: "Starters Lening", id: "financiering" as const }, { label: "Hoe het werkt", id: "hoe-het-werkt" as const },
      { label: "Veelgestelde vragen", id: "faq" as const }, { label: "Direct aanvragen", id: "financiering" as const },
    ]},
    { title: "Qredits Producten", links: [
      { label: "Microkrediet €50K", id: "financiering" as const }, { label: "MKB Krediet €250K", id: "financiering" as const },
      { label: "Qredits Coach", id: "hoe-het-werkt" as const }, { label: "Ondernemingsplan hulp", id: "hoe-het-werkt" as const },
      { label: "Starters programma", id: "financiering" as const },
    ]},
    { title: "Contact", links: [
      { label: "info@creditconnect.nl" }, { label: "085 - 401 8800" },
      { label: "Herengracht 420" }, { label: "1017 BZ Amsterdam" },
    ]},
  ];

  return (
    <footer style={{ background: T.text, padding: "72px 0 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 20 }}>{col.title}</div>
              {col.links.map((l: any, li: number) => (
                <div
                  key={li}
                  onClick={() => l.id && go(l.id)}
                  style={{
                    fontFamily: font, fontSize: 14, color: "rgba(255,255,255,0.5)",
                    marginBottom: 12, cursor: l.id ? "pointer" : "default",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => l.id && ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                  onMouseLeave={e => l.id && ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: T.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: fontDisplay }}>C</span>
            </div>
            <span style={{ fontFamily: font, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>© 2026 CreditConnect B.V. · KvK 91204837</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacyverklaring", "Cookiebeleid", "Algemene voorwaarden"].map(t => (
              <span key={t} style={{ fontFamily: font, fontSize: 13, color: "rgba(255,255,255,0.35)", cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
