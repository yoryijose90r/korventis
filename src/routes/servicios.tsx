import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  Ticket,
  Container as ContainerIcon,
  Boxes,
  LayoutDashboard,
  DatabaseZap,
  Workflow,
  ShieldCheck,
  Server,
  Cpu,
  Cloud,
  Layers,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import cloudImg from "@/assets/cloud-infra.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Proyectos, Servicios Administrados y Consultoría — Korventis" },
      {
        name: "description",
        content:
          "Korventis es una firma de consultoría especializada en proyectos de implementación, servicios administrados y consultoría tecnológica de alto valor: Metabase, Power BI, virtualización, bases de datos, automatización e infraestructura empresarial.",
      },
      { property: "og:title", content: "Servicios | Korventis" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

const implementationProjects = [
  {
    icon: Activity,
    t: "Implementación de Uptime Kuma",
    d: "Plataforma de monitoreo continuo para servidores y servicios críticos con alertas proactivas.",
    benefits: ["Instalación y configuración", "Monitoreo de servidores", "Alertas y documentación", "Capacitación al equipo"],
  },
  {
    icon: BarChart3,
    t: "Implementación de Metabase",
    d: "Analítica autoservicio conectada a tus fuentes de datos para decisiones basadas en información.",
    benefits: ["Conexión a SQL Server, Oracle y PostgreSQL", "Dashboards y KPIs", "Gestión de usuarios", "Modelo de seguridad"],
  },
  {
    icon: Ticket,
    t: "Implementación de GLPI",
    d: "Gestión de activos y mesa de ayuda para profesionalizar el soporte y el inventario de TI.",
    benefits: ["Inventario y activos", "Mesa de ayuda y tickets", "Gestión de usuarios", "Capacitación"],
  },
  {
    icon: ContainerIcon,
    t: "Servidor Docker Empresarial",
    d: "Entornos contenerizados robustos para despliegues ágiles, consistentes y seguros.",
    benefits: ["Implementación de contenedores", "Estrategia de backups", "Endurecimiento de seguridad", "Documentación"],
  },
  {
    icon: Boxes,
    t: "Virtualización de Servidores",
    d: "Consolidación y alta disponibilidad sobre Hyper-V, Proxmox y VMware.",
    benefits: ["Hyper-V, Proxmox y VMware", "Migración de cargas", "Optimización de recursos", "Alta disponibilidad"],
  },
  {
    icon: LayoutDashboard,
    t: "Implementación Power BI",
    d: "Modelos de datos e informes ejecutivos que convierten datos dispersos en estrategia.",
    benefits: ["Modelado de datos", "Dashboards y KPIs", "Indicadores de negocio", "Publicación y distribución"],
  },
  {
    icon: DatabaseZap,
    t: "Migración de Bases de Datos",
    d: "Migraciones seguras entre motores con pruebas rigurosas y cero pérdida de datos.",
    benefits: ["Oracle, SQL Server y PostgreSQL", "Plan de migración", "Pruebas y validación", "Optimización posterior"],
  },
  {
    icon: Workflow,
    t: "Automatización Empresarial",
    d: "Integración de sistemas y automatización de procesos que eliminan tareas manuales.",
    benefits: ["Automatización de procesos", "Integraciones entre sistemas", "Reportes automáticos", "Reducción de errores"],
  },
];

const managedServices = [
  {
    icon: ShieldCheck,
    t: "Starter",
    d: "Continuidad esencial para empresas que necesitan tranquilidad operativa.",
    benefits: ["Monitoreo", "Backups", "Gestión de incidentes", "Reporte mensual"],
  },
  {
    icon: Server,
    t: "Business",
    d: "Administración proactiva de infraestructura y datos con acompañamiento continuo.",
    benefits: ["Administración de servidores", "Administración de bases de datos", "Monitoreo y revisión semanal", "Consultoría incluida"],
  },
  {
    icon: Layers,
    t: "Enterprise",
    d: "Operación tecnológica integral con acompañamiento ejecutivo de alto nivel.",
    benefits: ["Infraestructura completa", "Bases de datos y BI", "Automatización", "Reuniones ejecutivas y soporte prioritario"],
  },
];

const consultingAreas = [
  { icon: DatabaseZap, t: "Oracle" },
  { icon: DatabaseZap, t: "SQL Server" },
  { icon: DatabaseZap, t: "PostgreSQL" },
  { icon: LayoutDashboard, t: "Power BI" },
  { icon: BarChart3, t: "Business Intelligence" },
  { icon: Server, t: "Infraestructura" },
  { icon: Cloud, t: "Cloud" },
  { icon: Boxes, t: "Virtualización" },
  { icon: Cpu, t: "Arquitectura Tecnológica" },
  { icon: Building2, t: "Transformación Digital" },
];

function ServiceCard({
  icon: Icon,
  t,
  d,
  benefits,
}: {
  icon: typeof Activity;
  t: string;
  d: string;
  benefits: string[];
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
      <div className="grid h-13 w-13 place-items-center rounded-2xl bg-navy text-sky transition-colors group-hover:bg-gradient-brand group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{t}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-navy/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
            {b}
          </li>
        ))}
      </ul>
      <CtaLink to="/contacto" variant="outline" size="md" className="mt-6 w-full">
        Solicitar Cotización
      </CtaLink>
    </div>
  );
}

function Servicios() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Servicios"
        title={
          <>
            Consultoría y soluciones empresariales de{" "}
            <span className="text-gradient-brand">alto valor</span>
          </>
        }
        subtitle="No ofrecemos soporte técnico básico. Diseñamos e implementamos proyectos tecnológicos, servicios administrados y consultoría especializada para empresas que buscan resultados medibles."
      >
        <CtaLink to="/contacto" variant="white" size="lg">
          Solicitar Diagnóstico Empresarial <ArrowRight className="h-4 w-4" />
        </CtaLink>
      </PageHero>

      {/* 1. Proyectos de Implementación */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Proyectos de Implementación"
            title="Implementaciones llave en mano"
            subtitle="Ejecutamos proyectos completos con metodología, documentación y transferencia de conocimiento a tu equipo."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {implementationProjects.map((s, i) => (
              <Reveal as="article" key={s.t} delay={(i % 4) * 70}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Servicios Administrados */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicios Administrados"
            title="Tu operación tecnológica en manos expertas"
            subtitle="Modelos mensuales de administración continua que garantizan disponibilidad, seguridad y evolución constante."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {managedServices.map((s, i) => (
              <Reveal as="article" key={s.t} delay={i * 90}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Consultoría Especializada */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Consultoría Especializada"
            title="Acompañamiento estratégico de expertos"
            subtitle="Evaluamos, diseñamos y guiamos las decisiones tecnológicas más críticas de tu empresa."
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {consultingAreas.map((c, i) => (
              <Reveal key={c.t} delay={(i % 5) * 60}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-card">
                  <c.icon className="h-4 w-4 text-sky" />
                  {c.t}
                </span>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaLink to="/contacto" variant="navy" size="lg">
              Solicitar evaluación <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* Infra highlight */}
      <section className="overflow-hidden bg-gradient-navy py-24 text-white">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                variant="light"
                eyebrow="Continuidad Operativa"
                title="Infraestructura y cloud pensados para no detenerse"
                subtitle="Arquitecturas de alta disponibilidad, monitoreo permanente y planes de continuidad que mantienen tu empresa operando siempre."
                className="max-w-xl"
              />
              <CtaLink to="/precios" variant="white" size="lg" className="mt-8">
                Ver Precios de Referencia <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sky/25 blur-2xl" />
                <img
                  src={cloudImg}
                  alt="Infraestructura cloud y red de servidores de Korventis"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="rounded-2xl border border-white/10 shadow-elevated"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
