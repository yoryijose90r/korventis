import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Precios | Planes de Tecnología y Consultoría — Korventis" },
      {
        name: "description",
        content:
          "Planes profesionales de Korventis para tecnología (Starter, Business, Enterprise) y servicios contables. Soluciones a la medida de tu empresa.",
      },
      { property: "og:title", content: "Precios | Korventis" },
      { property: "og:url", content: "/precios" },
    ],
    links: [{ rel: "canonical", href: "/precios" }],
  }),
  component: Precios,
});

const techPlans = [
  {
    name: "Starter",
    price: "$1,200",
    period: "/mes",
    tagline: "Para empresas que inician su modernización.",
    features: [
      "Diagnóstico de infraestructura",
      "Monitoreo básico de servidores",
      "Soporte de bases de datos",
      "1 dashboard de indicadores",
      "Soporte en horario laboral",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "$3,500",
    period: "/mes",
    tagline: "Para empresas en crecimiento que necesitan datos.",
    features: [
      "Todo lo de Starter",
      "Infraestructura de alta disponibilidad",
      "Business Intelligence con Power BI",
      "Automatización de procesos clave",
      "Cloud & virtualización",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    tagline: "Transformación integral para grandes operaciones.",
    features: [
      "Todo lo de Business",
      "Arquitectura empresarial completa",
      "Desarrollo de software a medida",
      "BI avanzado y modelos de datos",
      "Consultoría estratégica dedicada",
      "Soporte 24/7 y SLA garantizado",
    ],
    highlight: false,
  },
];

const accountingPlans = [
  {
    name: "Esencial",
    price: "$650",
    period: "/mes",
    tagline: "Orden contable para pequeñas empresas.",
    features: [
      "Registro y clasificación contable",
      "Estados financieros mensuales",
      "Cumplimiento de obligaciones",
      "Asesoría contable básica",
    ],
    highlight: false,
  },
  {
    name: "Profesional",
    price: "$1,400",
    period: "/mes",
    tagline: "Control financiero para operaciones en expansión.",
    features: [
      "Todo lo de Esencial",
      "Control financiero y flujo de caja",
      "Optimización de procesos administrativos",
      "Reportes gerenciales",
      "Asesoría empresarial mensual",
    ],
    highlight: true,
  },
  {
    name: "Corporativo",
    price: "A medida",
    period: "",
    tagline: "Consultoría financiera integral.",
    features: [
      "Todo lo de Profesional",
      "Planeación financiera estratégica",
      "Análisis de rentabilidad",
      "Integración con Business Intelligence",
      "Consultor financiero dedicado",
    ],
    highlight: false,
  },
];

function PlanGrid({ plans }: { plans: typeof techPlans }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {plans.map((p, i) => (
        <Reveal as="article" key={p.name} delay={i * 90}>
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
                <Star className="h-3.5 w-3.5 fill-white" /> Más popular
              </span>
            )}
            <h3 className="font-heading text-xl font-bold">{p.name}</h3>
            <p className={cn("mt-1.5 text-sm", p.highlight ? "text-silver/80" : "text-muted-foreground")}>
              {p.tagline}
            </p>
            <div className="mt-6 flex items-end gap-1">
              <span className="font-heading text-4xl font-extrabold">{p.price}</span>
              {p.period && (
                <span className={cn("pb-1 text-sm", p.highlight ? "text-silver/70" : "text-muted-foreground")}>
                  {p.period}
                </span>
              )}
            </div>
            <ul className="mt-7 flex-1 space-y-3.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check
                    className={cn("mt-0.5 h-4.5 w-4.5 shrink-0", p.highlight ? "text-sky" : "text-sky")}
                  />
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
              Solicitar propuesta
            </CtaLink>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Precios() {
  const [tab, setTab] = useState<"tech" | "contable">("tech");

  return (
    <SiteShell>
      <PageHero
        eyebrow="Precios"
        title={
          <>
            Planes que se ajustan a tu <span className="text-gradient-brand">crecimiento</span>
          </>
        }
        subtitle="Inversión profesional en tecnología y consultoría. Cada plan es un punto de partida: adaptamos todo a la realidad de tu empresa."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-mist p-1.5">
              {[
                { id: "tech" as const, label: "Tecnología" },
                { id: "contable" as const, label: "Servicios Contables" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-semibold transition-all",
                    tab === t.id
                      ? "bg-gradient-brand text-white shadow-glow"
                      : "text-navy/70 hover:text-navy",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <SectionHeading
            className="mt-12"
            title={tab === "tech" ? "Planes de Tecnología" : "Planes de Consultoría Contable"}
            subtitle={
              tab === "tech"
                ? "Infraestructura, datos, automatización y desarrollo para modernizar tu operación."
                : "Orden contable, control financiero y asesoría empresarial estratégica."
            }
          />

          <PlanGrid plans={tab === "tech" ? techPlans : accountingPlans} />

          <p className="mt-10 text-center text-sm text-muted-foreground">
            ¿Necesitas algo específico? Diseñamos un plan totalmente a la medida de tu empresa.
          </p>
          <div className="mt-6 text-center">
            <CtaLink to="/contacto" variant="navy" size="lg">
              Hablar con un consultor <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
