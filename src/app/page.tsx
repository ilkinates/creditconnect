"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RouterProvider, useRouter } from "@/lib/router-context";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import HomePage from "@/components/pages/HomePage";
import FinancieringPage from "@/components/pages/FinancieringPage";
import HoeHetWerktPage from "@/components/pages/HoeHetWerktPage";
import OverOnsPage from "@/components/pages/OverOnsPage";
import FAQPage from "@/components/pages/FAQPage";
import ContactPage from "@/components/pages/ContactPage";
import PartnersPage from "@/components/pages/PartnersPage";

const pages: Record<string, React.ComponentType> = {
  home: HomePage,
  financiering: FinancieringPage,
  "hoe-het-werkt": HoeHetWerktPage,
  "over-ons": OverOnsPage,
  faq: FAQPage,
  contact: ContactPage,
  partners: PartnersPage,
};

function AppShell() {
  const { page } = useRouter();
  const PageComponent = pages[page] || HomePage;

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <PageComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  );
}
