import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Star, ArrowRight, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Precios de Referencia | Proyectos y Servicios Empresariales — Korventis" },
      {
        name: "description",
        content:
          "Precios de referencia de Korventis para proyectos de implementación, servicios administrados y consultoría contable. Cada propuesta se diseña a la medida de tu empresa.",
      },
      { property: "og:title", content: "Precios de Referencia | Korventis" },
      { property: "og:url", content: "/precios" },
    ],
    links: [{ rel: "canonical", href: "/precios" }],
  }),
  component: Precios,
});

const LEGEND =
  "Cada proyecto es evaluado de forma individual según el tamaño de la empresa, complejidad técnica y alcance de la implementación.";

const projects = [
  { name: "Implementación de Uptime Kuma", from: "USD 650", features: ["Instalación", "Configuración", "Monitoreo de servidores", "Alertas", "Documentación", "Capacitación"] },
  { name: "Implementación de Metabase", from: "USD 850", features: ["Instalación y configuración", "Conexión a SQL Server, Oracle y PostgreSQL", "Creación de Dashboards", "KPIs", "Usuarios", "Seguridad"] },
  { name: "Implementación GLPI", from: "USD 900", features: ["Inventario", "Mesa de ayuda", "Activos", "Usuarios", "Tickets", "Capacitación"] },
  { name: "Servidor Docker Empresarial", from: "USD 1,200", features: ["Implementación", "Contenedores", "Backups", "Seguridad", "Documentación"] },
  { name: "Virtualización de Servidores", from: "USD 1,500", features: ["Hyper-V", "Proxmox", "VMware", "Migración", "Optimización"] },
  { name: "Implementación Power BI", from: "USD 700", features: ["Dashboards", "KPIs", "Indicadores", "Modelado", "Publicación"] },
  { name: "Migración de Bases de Datos", from: "USD 950", features: ["Oracle", "SQL Server", "PostgreSQL", "Pruebas", "Optimización"] },
  { name: "Automatización Empresarial", from: "USD 1,500", features: ["Procesos", "Integraciones", "Reportes", "Automatización"] },
];

const managedPlans = [
  {
    name: "Starter",
    from: "USD 450",
    period: "/ mes",
    tagline: "Continuidad esencial para tu operación.",
    features: ["Monitoreo", "Backups", "Gestión de incidentes", "Reporte mensual"],
    highlight: false,
  },
  {
    name: "Business",
    from: "USD 900",
    period: "/ mes",
    tagline: "Administración proactiva con acompañamiento.",
    features: ["Administración de servidores", "Bases de datos", "Monitoreo", "Revisión semanal", "Consultoría incluida"],
    highlight: true,
  },
  {
    name: "Enterprise",
    from: "USD 1,800",
    period: "/ mes",
    tagline: "Operación tecnológica integral.",
    features: ["Infraestructura completa", "Bases de datos", "Business Intelligence", "Automatización", "Reuniones ejecutivas", "Soporte prioritario"],
    highlight: false,
  },
];

const consultingAreas = [
  "Oracle",
  "SQL Server",
  "PostgreSQL",
  "Power BI",
  "Business Intelligence",
  "Infraestructura",
  "Cloud",
  "Virtualización",
  "Arquitectura Tecnológica",
  "Transformación Digital",
];

const accountingPlans = [
  {
    name: "Plan Emprendedor",
    from: "USD 300",
    period: "/ mes",
    tagline: "Orden contable para quienes inician.",
    features: ["Registro contable", "Declaraciones", "Asesoría básica"],
    highlight: false,
  },
  {
    name: "Plan PyME",
    from: "USD 600",
    period: "/ mes",
    tagline: "Control financiero para empresas en crecimiento.",
    features: ["Contabilidad", "Conciliaciones bancarias", "Reportes financieros", "Control administrativo"],
    highlight: true,
  },
  {
    name: "Plan Corporativo",
    from: "USD 1,200",
    period: "/ mes",
    tagline: "Gestión financiera estratégica integral.",
    features: ["Estados financieros", "Presupuestos", "Análisis financiero", "Control interno", "Asesoría gerencial"],
    highlight: false,
  },
];

const accountingServices = [
  { name: "Constitución de empresas", desc: "Formalización legal de tu empresa lista para operar.", benefits: ["Trámites y registros", "Estructura legal", "Acompañamiento integral"], time: "2–4 semanas" },
  { name: "Regularización contable", desc: "Ponemos al día tu contabilidad y obligaciones atrasadas.", benefits: ["Diagnóstico contable", "Corrección de registros", "Cumplimiento fiscal"], time: "2–6 semanas" },
  { name: "Implementación de procesos administrativos", desc: "Estructuramos y ordenamos la operación administrativa.", benefits: ["Flujos de trabajo", "Roles y responsabilidades", "Estandarización"], time: "3–6 semanas" },
  { name: "Manual de procedimientos", desc: "Documentación clara de cómo opera tu empresa.", benefits: ["Procesos documentados", "Guías operativas", "Base para escalar"], time: "3–5 semanas" },
  { name: "Implementación de controles internos", desc: "Reducimos riesgos con controles financieros y operativos.", benefits: ["Matriz de riesgos", "Puntos de control", "Prevención de fraudes"], time: "3–6 semanas" },
  { name: "Carga masiva de facturas", desc: "Digitalización y registro eficiente de altos volúmenes.", benefits: ["Procesamiento en lote", "Validación de datos", "Ahorro de tiempo"], time: "1–3 semanas" },
  { name: "Conciliaciones bancarias", desc: "Cuadre preciso entre tus registros y movimientos bancarios.", benefits: ["Detección de diferencias", "Registros al día", "Confiabilidad financiera"], time: "1–2 semanas" },
  { name: "Digitalización documental", desc: "Convertimos tu archivo físico en información accesible.", benefits: ["Documentos organizados", "Acceso rápido", "Respaldo seguro"], time: "2–4 semanas" },
  { name: "Análisis financiero", desc: "Interpretamos tus números para mejores decisiones.", benefits: ["Indicadores clave", "Rentabilidad", "Recomendaciones"], time: "1–3 semanas" },
  { name: "Auditoría administrativa", desc: "Evaluamos la eficiencia y control de tu operación.", benefits: ["Revisión de procesos", "Hallazgos y riesgos", "Plan de mejora"], time: "3–6 semanas" },
  { name: "Asesoría tributaria", desc: "Optimizamos tu carga fiscal cumpliendo la normativa.", benefits: ["Planificación fiscal", "Cumplimiento normativo", "Optimización de impuestos"], time: "Según alcance" },
];

function ProjectCard({ p, delay }: { p: (typeof projects)[number]; delay: number }) {
  return (
    <Reveal as="article" delay={delay}>
      <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
        <h3 className="font-heading text-lg font-bold text-navy">{p.name}</h3>
        <div className="mt-4 flex items-end gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Desde</span>
          <span className="font-heading text-2xl font-extrabold text-navy">{p.from}</span>
        </div>
        <ul className="mt-5 flex-1 space-y-2.5">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {f}
            </li>
          ))}
        </ul>
        <CtaLink to="/contacto" variant="outline" size="md" className="mt-6 w-full">
          Solicitar Cotización
        </CtaLink>
      </div>
    </Reveal>
  );
}

function PlanGrid({ plans }: { plans: typeof managedPlans }) {
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
            <div className="mt-6 flex items-end gap-1.5">
              <span className={cn("pb-1.5 text-xs font-semibold uppercase tracking-wider", p.highlight ? "text-silver/70" : "text-muted-foreground")}>
                Desde
              </span>
              <span className="font-heading text-4xl font-extrabold">{p.from}</span>
              {p.period && (
                <span className={cn("pb-1 text-sm", p.highlight ? "text-silver/70" : "text-muted-foreground")}>
                  {p.period}
                </span>
              )}
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
        eyebrow="Precios de Referencia"
        title={
          <>
            Inversión a la medida de tu <span className="text-gradient-brand">empresa</span>
          </>
        }
        subtitle="Somos una firma de consultoría de alto valor. Los montos mostrados son precios de referencia 'Desde…'; cada propuesta se diseña según tus objetivos, complejidad y alcance."
      />

      {/* Commercial message — before prices */}
      <section className="bg-gradient-navy py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Cada empresa tiene necesidades diferentes.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-silver/85">
                En Korventis entendemos que no existen soluciones universales. Analizamos la
                infraestructura, los procesos y los objetivos de cada cliente para diseñar una
                propuesta personalizada que garantice el mayor retorno de inversión.
              </p>
              <div className="mt-8">
                <CtaLink to="/contacto" variant="white" size="lg">
                  Solicitar Diagnóstico Empresarial <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-mist p-1.5">
              {[
                { id: "tech" as const, label: "Tecnología" },
                { id: "contable" as const, label: "Consultoría Contable" },
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

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            {LEGEND}
          </p>

          {tab === "tech" ? (
            <>
              {/* Proyectos de Implementación */}
              <SectionHeading
                className="mt-16"
                eyebrow="Proyectos de Implementación"
                title="Proyectos llave en mano"
                subtitle="Implementaciones completas con configuración, documentación y capacitación."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {projects.map((p, i) => (
                  <ProjectCard key={p.name} p={p} delay={(i % 4) * 70} />
                ))}
              </div>

              {/* Servicios Administrados */}
              <SectionHeading
                className="mt-24"
                eyebrow="Servicios Administrados"
                title="Planes mensuales de administración"
                subtitle="Acompañamiento continuo para mantener tu tecnología disponible y en evolución."
              />
              <PlanGrid plans={managedPlans} />

              {/* Consultoría Especializada */}
              <SectionHeading
                className="mt-24"
                eyebrow="Consultoría Especializada"
                title="Acompañamiento estratégico de expertos"
                subtitle="Evaluación y diseño de las decisiones tecnológicas más críticas de tu empresa."
              />
              <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
                {consultingAreas.map((c, i) => (
                  <Reveal key={c} delay={(i % 5) * 60}>
                    <span className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-card">
                      {c}
                    </span>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 text-center">
                <CtaLink to="/contacto" variant="navy" size="lg">
                  Solicitar evaluación <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </div>
            </>
          ) : (
            <>
              {/* Consultoría Contable — organización financiera */}
              <SectionHeading
                className="mt-16"
                eyebrow="Consultoría Contable"
                title="Organización financiera para crecer"
                subtitle="Más que contabilidad: estructura, control y estrategia financiera para tu empresa."
              />
              <PlanGrid plans={accountingPlans} />

              {/* Servicios Especializados */}
              <SectionHeading
                className="mt-24"
                eyebrow="Servicios Especializados"
                title="Soluciones puntuales a la medida"
                subtitle="Servicios independientes desde USD 150, evaluados según el alcance de cada empresa."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {accountingServices.map((s, i) => (
                  <Reveal as="article" key={s.name} delay={(i % 3) * 70}>
                    <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
                      <h3 className="font-heading text-lg font-bold text-navy">{s.name}</h3>
                      <div className="mt-3 flex items-end gap-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Desde</span>
                        <span className="font-heading text-xl font-extrabold text-navy">USD 150</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                      <ul className="mt-4 flex-1 space-y-2.5">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-navy/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {b}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-navy/70">
                        <Clock className="h-4 w-4 text-sky" /> Tiempo estimado: {s.time}
                      </span>
                      <CtaLink to="/contacto" variant="outline" size="md" className="mt-5 w-full">
                        Solicitar Cotización
                      </CtaLink>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}

          <p className="mt-16 text-center text-sm text-muted-foreground">
            ¿Necesitas algo específico? Diseñamos una propuesta totalmente a la medida de tu empresa.
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
