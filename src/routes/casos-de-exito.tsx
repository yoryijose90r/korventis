import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Clock, Database, ArrowRight, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";

export const Route = createFileRoute("/casos-de-exito")({
  head: () => ({
    meta: [
      { title: "Casos de Éxito | Resultados Reales — Korventis" },
      {
        name: "description",
        content:
          "Descubre cómo Korventis ayudó a empresas a optimizar infraestructura, automatizar procesos e implementar Business Intelligence con resultados medibles.",
      },
      { property: "og:title", content: "Casos de Éxito | Korventis" },
      { property: "og:url", content: "/casos-de-exito" },
    ],
    links: [{ rel: "canonical", href: "/casos-de-exito" }],
  }),
  component: CasosDeExito,
});

const cases = [
  {
    sector: "Money Transfer",
    title: "Visibilidad de envíos con Business Intelligence",
    challenge:
      "Datos de envíos dispersos y reportes manuales que dificultaban ver cantidades y comportamiento en el tiempo.",
    solution:
      "Dashboards desarrollados en Metabase con indicadores de envíos, cantidades y visibilidad operativa en tiempo real.",
    metrics: [
      { icon: Clock, v: "-85%", l: "Tiempo de reportería" },
      { icon: TrendingUp, v: "360°", l: "Visibilidad de envíos" },
    ],
  },
  {
    sector: "Manufactura",
    title: "Automatización de procesos administrativos",
    challenge:
      "Tareas repetitivas de conciliación y facturación que consumían horas diarias del equipo.",
    solution:
      "Flujos automatizados e integración de sistemas contables y operativos.",
    metrics: [
      { icon: Clock, v: "+30h", l: "Ahorradas por semana" },
      { icon: TrendingUp, v: "-90%", l: "Errores manuales" },
    ],
  },
  {
    sector: "Logística",
    title: "Infraestructura de alta disponibilidad",
    challenge:
      "Caídas frecuentes de servidores que afectaban la continuidad operativa.",
    solution:
      "Rediseño de infraestructura con virtualización, cloud híbrido y monitoreo 24/7.",
    metrics: [
      { icon: Database, v: "99.9%", l: "Uptime alcanzado" },
      { icon: TrendingUp, v: "-40%", l: "Costos de operación" },
    ],
  },
];

function CasosDeExito() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Casos de Éxito"
        title={
          <>
            Transformaciones con <span className="text-gradient-brand">impacto real</span>
          </>
        }
        subtitle="Historias de empresas que fortalecieron su núcleo operativo y hoy toman mejores decisiones con Korventis."
      />

      <section className="bg-white py-24">
        <Container className="space-y-8">
          {cases.map((c, i) => (
            <Reveal as="article" key={c.title} delay={i * 60}>
              <div className="grid gap-8 rounded-3xl border border-border bg-white p-8 shadow-card lg:grid-cols-[1.6fr_1fr] lg:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    {c.sector}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-navy">{c.title}</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        El reto
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy/80">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        La solución
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy/80">{c.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {c.metrics.map((m) => (
                    <div
                      key={m.l}
                      className="flex items-center gap-4 rounded-2xl bg-gradient-navy p-5 text-white"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-sky">
                        <m.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-heading text-2xl font-bold">{m.v}</div>
                        <div className="text-xs text-silver/70">{m.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-mist py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-10 text-center shadow-card">
            <Quote className="mx-auto h-10 w-10 text-sky/40" />
            <p className="mt-5 font-heading text-xl font-medium leading-relaxed text-navy sm:text-2xl">
              "Korventis no solo resolvió nuestros problemas técnicos: nos dio una forma completamente
              nueva de entender y dirigir el negocio."
            </p>
            <div className="mt-6">
              <div className="font-heading font-semibold text-navy">Dirección General</div>
              <div className="text-sm text-muted-foreground">Cliente Korventis</div>
            </div>
          </Reveal>
          <div className="mt-12 text-center">
            <CtaLink to="/contacto" variant="primary" size="lg">
              Quiero resultados así <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
