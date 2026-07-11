import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  ClipboardList,
  BarChart3,
  Compass,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Search,
  Map as MapIcon,
  Wrench,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import dashboardImg from "@/assets/dashboard-bi.jpg";

export const Route = createFileRoute("/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones | Transformación Empresarial y Digital — Korventis" },
      {
        name: "description",
        content:
          "Cinco soluciones para hacer que tu empresa funcione mejor: transformación empresarial, gestión administrativa y contable, inteligencia de negocios, consultoría estratégica y gestión de infraestructura.",
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
    title: "Transformación Empresarial",
    desc: "Ayudamos a las empresas a modernizar su operación mediante estrategias que optimizan procesos, reducen tareas manuales y fortalecen la gestión organizacional.",
    points: [
      "Optimización de procesos y flujos de trabajo",
      "Reducción de tareas manuales y repetitivas",
      "Gestión organizacional más ágil y ordenada",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestión Administrativa y Contable",
    desc: "Mejoramos la operación de tu empresa organizando y digitalizando la gestión administrativa y financiera, con enfoque en eficiencia y control, no en soporte técnico.",
    points: [
      "Optimización de procesos administrativos",
      "Implementación y mejora de sistemas administrativos y contables",
      "Consultoría funcional y digitalización de procesos financieros",
      "Organización de la información empresarial",
      "Capacitación funcional y acompañamiento continuo",
    ],
  },
  {
    icon: BarChart3,
    title: "Inteligencia de Negocios",
    desc: "Convertimos la información empresarial en indicadores claros para apoyar la toma de decisiones de la gerencia.",
    points: [
      "Dashboards ejecutivos",
      "Indicadores y reportes gerenciales",
      "Análisis y optimización de la información",
    ],
  },
  {
    icon: Compass,
    title: "Consultoría Estratégica",
    desc: "Acompañamos a las organizaciones en la planificación de proyectos tecnológicos y de transformación empresarial, asegurando que cada inversión genere valor para el negocio.",
    points: [
      "Planificación de proyectos de transformación",
      "Priorización de inversiones con impacto real",
      "Acompañamiento en la toma de decisiones",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Gestión de Infraestructura Empresarial",
    desc: "Un soporte silencioso para el crecimiento del negocio: aseguramos que tu operación se mantenga estable, segura y siempre disponible.",
    points: [
      "Continuidad operativa y disponibilidad",
      "Seguridad y estabilidad",
      "Escalabilidad para acompañar tu crecimiento",
    ],
  },
];

const technologies = [
  "Power BI",
  "Metabase",
  "Oracle Analytics",
  "Oracle",
  "SQL Server",
  "PostgreSQL",
  "VMware",
  "Proxmox",
  "Digital Ocean",
];

const methodology = [
  { icon: Search, n: "01", t: "Diagnóstico", d: "Comprendemos la situación actual de la empresa." },
  { icon: MapIcon, n: "02", t: "Estrategia", d: "Diseñamos una hoja de ruta alineada a los objetivos del negocio." },
  { icon: Wrench, n: "03", t: "Implementación", d: "Ejecutamos las mejoras de forma organizada y controlada." },
  { icon: GraduationCap, n: "04", t: "Capacitación", d: "Aseguramos que el equipo adopte correctamente las nuevas herramientas y procesos." },
  { icon: RefreshCw, n: "05", t: "Mejora Continua", d: "Medimos resultados y proponemos nuevas oportunidades de crecimiento." },
];

function Soluciones() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Soluciones"
        title={
          <>
            Cinco formas de hacer que tu empresa{" "}
            <span className="text-gradient-brand">funcione mejor</span>
          </>
        }
        subtitle="No vendemos tecnología ni software. Diseñamos soluciones que mejoran la gestión, la organización y el crecimiento de tu empresa."
      >
        <CtaLink to="/contacto" variant="white" size="lg">
          Agenda una consulta estratégica <ArrowRight className="h-4 w-4" />
        </CtaLink>
      </PageHero>

      {/* SOLUTIONS */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 2) * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-navy/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink to="/contacto" variant="navy" size="lg">
              Solicita una evaluación <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestra Metodología"
            title="Un proceso claro, de principio a fin"
            subtitle="Trabajamos con un método probado que garantiza resultados medibles en cada etapa."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-sky">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="mt-5 block font-heading text-3xl font-extrabold text-sky/25">
                    {s.n}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Herramientas"
            title="Tecnologías y plataformas con las que trabajamos"
            subtitle="Utilizamos herramientas líderes del mercado, siempre al servicio de los resultados de tu negocio."
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-4">
            {technologies.map((t, i) => (
              <Reveal key={t} delay={(i % 5) * 60}>
                <span className="inline-flex items-center rounded-2xl border border-border bg-mist px-6 py-3 font-heading text-base font-semibold text-navy/60 grayscale transition-all hover:text-navy hover:grayscale-0 hover:shadow-card">
                  {t}
                </span>
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
                  alt="Panel ejecutivo de indicadores del negocio de Korventis"
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
                title="Decisiones más rápidas, empresas más fuertes"
                subtitle="Cada solución está pensada para convertir tu operación en una ventaja competitiva sostenible."
                className="max-w-xl"
              />
              <CtaLink to="/contacto" variant="white" size="lg" className="mt-8">
                Conversemos sobre tu empresa <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
