import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { CONTACT } from "@/lib/offer";

const columns = [
  {
    title: "Soluciones",
    links: [
      { to: "/soluciones", label: "Korventis ERP" },
      { to: "/soluciones", label: "Datos y automatización" },
      { to: "/soluciones", label: "Contabilidad y gestión" },
      { to: "/soluciones", label: "Infraestructura y continuidad" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { to: "/sobre-nosotros", label: "Nosotros" },
      { to: "/nuestra-experiencia", label: "Experiencia" },
      { to: "/precios", label: "Precios" },
      { to: "/contacto", label: "Agendar conversación inicial" },
      { to: "/privacidad", label: "Política de privacidad" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-silver/85">
              Firma dominicana que integra tecnología, datos y gestión contable para empresas y pymes.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link to={link.to} className="text-sm text-silver/85 transition-colors hover:text-sky">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-silver/85 sm:grid-cols-3">
          <span className="flex flex-col gap-1">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-sky"><Mail className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" /> {CONTACT.email}</a>
          </span>
          <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 hover:text-sky"><Phone className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
          <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" /> {CONTACT.address}</span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-silver/75 sm:flex-row">
          <span>© {new Date().getFullYear()} Korventis. Todos los derechos reservados.</span>
          <Link to="/privacidad" className="hover:text-sky">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
