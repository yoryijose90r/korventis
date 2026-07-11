import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { CtaLink } from "./cta-button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Nosotros" },
  { to: "/soluciones", label: "Soluciones" },
  { to: "/casos-de-exito", label: "Casos de Éxito" },
  { to: "/precios", label: "Precios" },
  { to: "/blog", label: "Blog" },
  { to: "/trabaja-con-nosotros", label: "Trabaja con Nosotros" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/85 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" aria-label="Korventis inicio">
          <Logo variant={scrolled ? "dark" : "light"} />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.slice(0, 7).map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-navy/80 hover:text-sky"
                    : "text-white/85 hover:text-white",
                )}
                activeProps={{
                  className: scrolled ? "text-sky font-semibold" : "text-white font-semibold",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <CtaLink to="/contacto" variant={scrolled ? "primary" : "white"} size="md">
            Solicitar Diagnóstico
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-xl transition-colors xl:hidden",
            scrolled ? "text-navy hover:bg-secondary" : "text-white hover:bg-white/10",
          )}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-elevated transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo variant="dark" />
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-xl text-navy hover:bg-secondary"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-navy/85 transition-colors hover:bg-secondary hover:text-sky"
                  activeProps={{ className: "bg-secondary text-sky font-semibold" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border p-4">
            <CtaLink
              to="/contacto"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Solicitar Diagnóstico
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
