import { createFileRoute } from "@tanstack/react-router";
import { Check, Star, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Planes | Consultoría de Transformación Empresarial — Korventis" },
      {
        name: "description",
        content:
          "Cuatro planes de consultoría diseñados para acompañar cada etapa de tu empresa: diagnóstico, impulso, crecimiento y transformación empresarial. Cada propuesta se adapta a tus objetivos.",
      },
      { property: "og:title", content: "Planes | Korventis" },
      { property: "og:url", content: "/precios" },
    ],
    links: [{ rel: "canonical", href: "/precios" }],
  }),
  component: Precios,
});

const plans = [
  {
    name: "Diagnóstico Empresarial",
    from: "Desde USD 99",
    tagline: "El primer paso para entender dónde mejorar.",
    features: [
      "Evaluación de tu operación actual",
      "Identificación de oportunidades de mejora",
      "Informe con recomendaciones claras",
      "Sesión de resultados con la gerencia",
    ],
    highlight: false,
  },
  {
    name: "Impulso Empresarial",
    from: "Desde USD 299",
    tagline: "Orden y eficiencia para operar mejor.",
    features: [
      "Optimización de procesos clave",
      "Organización de la información empresarial",
      "Primeros indicadores de gestión",
      "Acompañamiento durante la implementación",
    ],
    highlight: true,
  },
  {
    name: "Crecimiento Empresarial",
    from: "Desde USD 799",
    tagline: "Estructura y datos para escalar con control.",
    features: [
      "Mejora integral de procesos administrativos",
      "Dashboards e indicadores gerenciales",
      "Digitalización de procesos financieros",
      "Capacitación funcional del equipo",
    ],
    highlight: false,
  },
  {
    name: "Transformación Empresarial",
    from: "Cotización personalizada",
    tagline: "Un plan a la medida para reinventar tu operación.",
    features: [
      "Estrategia integral de transformación",
      "Inteligencia de negocios avanzada",
      "Continuidad y escalabilidad operativa",
      "Acompañamiento estratégico continuo",
    ],
    highlight: false,
  },
];

function Precios() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Planes"
        title={
          <>
            Un plan para cada etapa de tu{" "}
            <span className="text-gradient-brand">empresa</span>
          </>
        }
        subtitle="Nuestros planes describen resultados, no horas de trabajo. Cada propuesta se adapta a los objetivos y la realidad de tu empresa."
      />

      {/* Commercial message */}
      <section className="bg-gradient-navy py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Cada empresa tiene necesidades diferentes.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-silver/85">
                En Korventis no existen soluciones universales. Analizamos los procesos, la
                información y los objetivos de cada empresa para diseñar una propuesta personalizada
                que genere el mayor valor posible.
              </p>
              <div className="mt-8">
                <CtaLink to="/contacto" variant="white" size="lg">
                  Agenda una consulta estratégica <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PLANS */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestros Planes"
            title="Resultados claros en cada nivel"
            subtitle="Comienza donde estés hoy y avanza a tu ritmo hacia una empresa más eficiente y organizada."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((p, i) => (
              <Reveal as="article" key={p.name} delay={(i % 4) * 80}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300",
                    p.highlight
                      ? "border-transparent bg-gradient-navy text-white shadow-elevated lg:-translate-y-3"
                      : "border-border bg-white text-navy shadow-card hover:-translate-y-1.5 hover:shadow-elevated",
                  )}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-1.5 text-xs font-semibold text-white shadow-glow">
                      <Star className="h-3.5 w-3.5 fill-white" /> Recomendado
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold">{p.name}</h3>
                  <p
                    className={cn(
                      "mt-1.5 text-sm",
                      p.highlight ? "text-silver/80" : "text-muted-foreground",
                    )}
                  >
                    {p.tagline}
                  </p>
                  <div className="mt-6">
                    <span className="font-heading text-2xl font-extrabold">{p.from}</span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky" />
                        <span className={p.highlight ? "text-silver/90" : "text-navy/80"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CtaLink
                    to="/contacto"
                    variant={p.highlight ? "white" : "primary"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    {p.from === "Cotización personalizada" ? "Solicitar propuesta" : "Comenzar"}
                  </CtaLink>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-muted-foreground">
            ¿No sabes por dónde empezar? Conversemos sobre tu empresa y te recomendaremos el camino
            ideal para organizarla y hacerla crecer.
          </p>
          <div className="mt-6 text-center">
            <CtaLink to="/contacto" variant="navy" size="lg">
              Conversemos sobre tu empresa <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
