import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating "back to home" button — quick access, especially on mobile */}
      <Link
        to="/"
        activeOptions={{ exact: true }}
        aria-label="Volver al inicio"
        className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-gradient-brand text-white shadow-glow transition-transform duration-300 hover:scale-110 active:scale-95"
        activeProps={{ className: "hidden" }}
      >
        <Home className="h-5 w-5" />
      </Link>
    </div>
  );
}
