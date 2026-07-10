import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: ReactNode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating "scroll to top" button — quick access, especially on mobile */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Volver al inicio de la página"
        className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-gradient-brand text-white shadow-glow transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
