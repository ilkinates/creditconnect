"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Page = "home" | "financiering" | "hoe-het-werkt" | "over-ons" | "faq" | "contact" | "partners";

interface RouterContextType {
  page: Page;
  go: (page: Page) => void;
}

const RouterCtx = createContext<RouterContextType>({
  page: "home",
  go: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("home");

  const go = useCallback((p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <RouterCtx.Provider value={{ page, go }}>
      {children}
    </RouterCtx.Provider>
  );
}

export function useRouter() {
  return useContext(RouterCtx);
}
