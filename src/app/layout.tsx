import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreditConnect — Zakelijke Financiering zonder Gedoe",
  description:
    "CreditConnect verbindt Nederlandse MKB'ers en starters met Qredits financiering. Van €5.000 tot €500.000. Slim, snel en volledig digitaal.",
  keywords: "zakelijke lening, MKB krediet, Qredits, financiering, starters, ondernemers, Nederland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
