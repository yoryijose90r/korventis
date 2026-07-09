import { createFileRoute } from "@tanstack/react-router";
import { Heart, GraduationCap, Rocket, Globe2, Send, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaButton } from "@/components/site/cta-button";

export const Route = createFileRoute("/trabaja-con-nosotros")({
  head: () => ({
    meta: [
      { title: "Trabaja con Nosotros | Carreras en Korventis" },
      {
        name: "description",
        content:
          "Únete a Korventis. Buscamos talento en infraestructura, datos, Business Intelligence, desarrollo y consultoría para transformar empresas en LATAM.",
      },
      { property: "og:title", content: "Trabaja con Nosotros | Korventis" },
      { property: "og:url", content: "/trabaja-con-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/trabaja-con-nosotros" }],
  }),
  component: Trabaja,
});

const benefits = [
  { icon: Rocket, t: "Proyectos con impacto", d: "Trabaja en transformaciones reales de empresas líderes." },
  { icon: GraduationCap, t: "Crecimiento continuo", d: "Formación en tecnologías y metodologías de vanguardia." },
  { icon: Globe2, t: "Modalidad flexible", d: "Cultura moderna con opciones remotas e híbridas." },
  { icon: Heart, t: "Equipo cercano", d: "Un ambiente colaborativo donde tu voz cuenta." },
];

const positions = [
  { title: "Ingeniero/a de Infraestructura & Cloud", type: "Tiempo completo", place: "Híbrido" },
  { title: "Especialista en Business Intelligence (Power BI)", type: "Tiempo completo", place: "Remoto" },
  { title: "Administrador/a de Bases de Datos", type: "Tiempo completo", place: "Híbrido" },
  { title: "Desarrollador/a de Software Empresarial", type: "Tiempo completo", place: "Remoto" },
  { title: "Consultor/a Contable & Financiero", type: "Tiempo completo", place: "Presencial" },
];

function Trabaja() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Trabaja con Nosotros"
        title={
          <>
            Construye el futuro de las empresas con{" "}
            <span className="text-gradient-brand">nosotros</span>
          </>
        }
        subtitle="En Korventis unimos talento técnico y estratégico para transformar organizaciones. Si te apasiona la tecnología y los datos, este es tu lugar."
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="¿Por qué Korventis?" title="Un lugar para crecer y dejar huella" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="h-full rounded-3xl border border-border bg-mist p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-card">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-24">
        <Container>
          <SectionHeading eyebrow="Vacantes" title="Posiciones abiertas" />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {positions.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-lg font-semibold text-navy">
                      {p.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span>{p.type}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {p.place}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#aplicar"
                    className="shrink-0 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
                  >
                    Aplicar
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="aplicar" className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="Postúlate" title="Envíanos tu candidatura" subtitle="Cuéntanos sobre ti y nos pondremos en contacto." />
            <Reveal className="mt-10">
              <ApplicationForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

function ApplicationForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-secondary p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-sky" />
        <h3 className="font-heading text-2xl font-bold text-navy">¡Candidatura recibida!</h3>
        <p className="text-muted-foreground">Gracias por tu interés. Revisaremos tu perfil y te contactaremos pronto.</p>
      </div>
    );
  }
  const field =
    "h-12 rounded-xl border border-border bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-sky";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <input required placeholder="Nombre completo" className={field} />
        <input required type="email" placeholder="Correo electrónico" className={field} />
        <input placeholder="Teléfono" className={field} />
        <input placeholder="Puesto de interés" className={field} />
      </div>
      <input placeholder="Enlace a tu CV / LinkedIn" className={`${field} mt-5 w-full`} />
      <textarea
        rows={4}
        placeholder="Cuéntanos por qué quieres unirte a Korventis..."
        className="mt-5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-sky"
      />
      <CtaButton type="submit" variant="primary" size="lg" className="mt-6 w-full">
        Enviar candidatura <Send className="h-4 w-4" />
      </CtaButton>
    </form>
  );
}
