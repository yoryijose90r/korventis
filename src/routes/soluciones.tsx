import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  ShieldCheck,
  Gauge,
  Layers,
  BrainCircuit,
  Coins,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import dashboardImg from "@/assets/dashboard-bi.jpg";

export const Route = createFileRoute("/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones | Transformación Empresarial — Korventis" },
      {
        name: "description",
        content:
          "Soluciones integrales de Korventis para modernizar empresas: transformación operativa, continuidad, Business Intelligence, automatización y optimización de infraestructura.",
      },
      { property: "og:title", content: "Soluciones | Korventis" },
      { property: "og:url", content: "/soluciones" },
    ],
    links: [{ rel: "canonical", href: "/soluciones" }],
  }),
  component: Soluciones,
});

const solutions = [
  {
    icon: Rocket,
    title: "Transformación Digital",
    desc: "Modernizamos empresas de extremo a extremo: tecnología, procesos y cultura de datos.",
    points: ["Diagnóstico integral", "Hoja de ruta tecnológica", "Adopción y capacitación"],
  },
  {
    icon: ShieldCheck,
    title: "Continuidad Operativa",
    desc: "Aseguramos que tu operación nunca se detenga con arquitecturas resilientes.",
    points: ["Alta disponibilidad", "Respaldo y recuperación", "Monitoreo 24/7"],
  },
  {
    icon: BrainCircuit,
    title: "Data & Business Intelligence",
    desc: "Convertimos datos dispersos en indicadores accionables para decidir mejor.",
    points: ["Modelos de datos", "Dashboards Power BI", "KPIs en tiempo real"],
  },
  {
    icon: Gauge,
    title: "Optimización de Procesos",
    desc: "Automatizamos y ordenamos operaciones para ganar eficiencia y reducir costos.",
    points: ["Automatización", "Integración de sistemas", "Reducción de errores"],
  },
  {
    icon: Coins,
    title: "Control Financiero",
    desc: "Fortalecemos la gestión contable y administrativa con enfoque estratégico.",
    points: ["Procesos contables", "Control financiero", "Asesoría empresarial"],
  },
  {
    icon: Layers,
    title: "Infraestructura Escalable",
    desc: "Diseñamos infraestructura y cloud que crecen al ritmo de tu empresa.",
    points: ["Cloud híbrido", "Virtualización", "Contenedores"],
  },
];

const steps = [
  { n: "01", t: "Diagnóstico", d: "Analizamos tu operación tecnológica y administrativa." },
  { n: "02", t: "Estrategia", d: "Diseñamos un plan claro, medible y priorizado." },
  { n: "03", t: "Implementación", d: "Ejecutamos con estándares de calidad y continuidad." },
  { n: "04", t: "Acompañamiento", d: "Medimos resultados y evolucionamos contigo." },
];

function Soluciones() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Soluciones"
        title={
          <>
            Estrategia y ejecución para{" "}
            <span className="text-gradient-brand">crecer sin límites</span>
          </>
        }
        subtitle="Combinamos tecnología, datos y consultoría en soluciones diseñadas para resolver los retos reales de tu empresa."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 3) * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-navy/80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-sky" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="Metodología"
            title="Un proceso claro, de principio a fin"
            subtitle="Trabajamos con un método probado que garantiza resultados medibles."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="relative h-full rounded-3xl border border-border bg-white p-8 shadow-card">
                  <span className="font-heading text-4xl font-extrabold text-sky/25">{s.n}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BI banner */}
      <section className="overflow-hidden bg-gradient-navy py-24 text-white">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sky/25 blur-2xl" />
                <img
                  src={dashboardImg}
                  alt="Panel de Business Intelligence de Korventis"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="rounded-2xl border border-white/10 shadow-elevated"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                variant="light"
                eyebrow="Resultados"
                title="Decisiones más rápidas, operaciones más fuertes"
                subtitle="Cada solución está pensada para convertir tu operación en una ventaja competitiva sostenible."
                className="max-w-xl"
              />
              <CtaLink to="/contacto" variant="white" size="lg" className="mt-8">
                Comenzar Proyecto <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
