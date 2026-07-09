import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "./logo";

const columns = [
  {
    title: "Compañía",
    links: [
      { to: "/sobre-nosotros", label: "Sobre Nosotros" },
      { to: "/casos-de-exito", label: "Casos de Éxito" },
      { to: "/trabaja-con-nosotros", label: "Trabaja con Nosotros" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { to: "/servicios", label: "Infraestructura & Cloud" },
      { to: "/servicios", label: "Business Intelligence" },
      { to: "/servicios", label: "Automatización" },
      { to: "/servicios", label: "Consultoría Contable" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { to: "/soluciones", label: "Soluciones" },
      { to: "/precios", label: "Precios" },
      { to: "/contacto", label: "Contacto" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-silver/80">
              Fortalecemos el núcleo de tu empresa integrando tecnología, datos y estrategia para
              impulsar organizaciones más eficientes, competitivas y sostenibles.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-silver transition-colors hover:border-sky hover:bg-sky/20 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-silver/75 transition-colors hover:text-sky"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-silver/70 sm:grid-cols-3">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-sky" /> contacto@korventis.com
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-sky" /> +1 (809) 000-0000
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sky" /> Santo Domingo · Caribe & LATAM
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-silver/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Korventis. Todos los derechos reservados.</span>
          <span>Technology, Data &amp; Business Consulting</span>
        </div>
      </div>
    </footer>
  );
}
