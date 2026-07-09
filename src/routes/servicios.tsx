import { createFileRoute } from "@tanstack/react-router";
import {
  Server,
  Cloud,
  Container as ContainerIcon,
  Boxes,
  Database,
  BarChart3,
  LayoutDashboard,
  LineChart,
  Workflow,
  Calculator,
  Wallet,
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
      { title: "Servicios | Infraestructura, BI, Automatización y Consultoría — Korventis" },
      {
        name: "description",
        content:
          "Servicios de Korventis: infraestructura, servidores, virtualización (VMware, Proxmox), cloud en Digital Ocean, Oracle, SQL Server, PostgreSQL, Power BI, Metabase, Oracle Analytics, automatización y consultoría contable.",
      },
      { property: "og:title", content: "Servicios | Korventis" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

const groups = [
  {
    label: "Infraestructura & Cloud",
    desc: "Bases tecnológicas sólidas, disponibles y seguras.",
    items: [
      { icon: Server, t: "Servidores", d: "Diseño, implementación y gestión de servidores físicos y virtuales." },
      { icon: Cloud, t: "Cloud (Digital Ocean)", d: "Despliegue y administración de servidores cloud en Digital Ocean." },
      { icon: ContainerIcon, t: "Docker", d: "Contenedores para despliegues ágiles y consistentes." },
      { icon: Boxes, t: "Virtualización", d: "VMware y Proxmox para optimización de recursos y alta disponibilidad." },
    ],
  },
  {
    label: "Bases de Datos",
    desc: "Administración experta para rendimiento e integridad.",
    items: [
      { icon: Database, t: "Oracle", d: "Tuning, alta disponibilidad y administración avanzada." },
      { icon: Database, t: "SQL Server", d: "Optimización, seguridad y continuidad operativa." },
      { icon: Database, t: "PostgreSQL", d: "Bases robustas, escalables y de código abierto." },
    ],
  },
  {
    label: "Business Intelligence",
    desc: "Tus datos convertidos en decisiones.",
    items: [
      { icon: BarChart3, t: "Power BI", d: "Modelos de datos e informes interactivos." },
      { icon: LineChart, t: "Metabase", d: "Análisis y dashboards ágiles sobre tus bases de datos." },
      { icon: LayoutDashboard, t: "Oracle Analytics", d: "Analítica empresarial y visualizaciones avanzadas." },
      { icon: LineChart, t: "Business Intelligence", d: "Analítica que impulsa decisiones estratégicas." },
    ],
  },
  {
    label: "Automatización",
    desc: "Procesos eficientes, sin tareas manuales.",
    items: [
      { icon: Workflow, t: "Automatización", d: "Flujos que eliminan tareas manuales y errores." },
    ],
  },
  {
    label: "Consultoría Empresarial",
    desc: "Estrategia financiera y administrativa.",
    items: [
      { icon: Calculator, t: "Consultoría Contable", d: "Procesos contables ordenados y confiables." },
      { icon: Wallet, t: "Consultoría Financiera", d: "Control financiero y asesoría para crecer." },
    ],
  },
];

function Servicios() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Servicios"
        title={
          <>
            Todo lo que tu empresa necesita para{" "}
            <span className="text-gradient-brand">transformarse</span>
          </>
        }
        subtitle="Un portafolio integral que combina infraestructura, datos, automatización y consultoría empresarial bajo un mismo estándar de excelencia."
      >
        <CtaLink to="/contacto" variant="white" size="lg">
          Solicitar Diagnóstico <ArrowRight className="h-4 w-4" />
        </CtaLink>
      </PageHero>

      <section className="bg-white py-24">
        <Container className="space-y-20">
          {groups.map((group) => (
            <div key={group.label}>
              <SectionHeading align="left" eyebrow={group.label} title={group.desc} className="max-w-xl" />
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal as="article" key={item.t} delay={(i % 3) * 80}>
                    <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
                      <div className="grid h-13 w-13 place-items-center rounded-2xl bg-navy text-sky transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{item.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Cloud highlight */}
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
              <CtaLink to="/soluciones" variant="white" size="lg" className="mt-8">
                Ver Soluciones <ArrowRight className="h-4 w-4" />
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
