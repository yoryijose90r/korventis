import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Server,
  BarChart3,
  Database,
  Workflow,
  Calculator,
  Cpu,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Building2,

} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { CtaLink } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow, SectionHeading, Container } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";
import heroImg from "@/assets/hero-tech.jpg";
import dashboardImg from "@/assets/dashboard-bi.jpg";
import meetingImg from "@/assets/meeting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KORVENTIS | Transformación Empresarial con Tecnología y Datos" },
      {
        name: "description",
        content:
          "Fortalecemos el núcleo de tu empresa con infraestructura, Business Intelligence, automatización y consultoría contable. Solicita tu diagnóstico gratuito.",
      },
      { property: "og:title", content: "KORVENTIS | Transformación Empresarial" },
      {
        property: "og:description",
        content:
          "Transformamos operaciones empresariales mediante tecnología y datos. Consultoría premium para el Caribe y Latinoamérica.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Layers,
    title: "Transformación Operativa",
    desc: "Rediseñamos y ordenamos tus procesos para lograr eficiencia, continuidad y decisiones más inteligentes.",
  },
  {
    icon: Server,
    title: "Infraestructura",
    desc: "Servidores, virtualización en VMware y Proxmox, y cloud en Digital Ocean para alta disponibilidad y continuidad operativa.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Power BI, Metabase y Oracle Analytics que convierten tus datos dispersos en información útil para el negocio.",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    desc: "Administración experta de Oracle, SQL Server y PostgreSQL: rendimiento, seguridad e integridad.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    desc: "Eliminamos tareas manuales y conectamos tus sistemas para reducir errores y costos operativos.",
  },
  {
    icon: Calculator,
    title: "Consultoría Contable",
    desc: "Control financiero, procesos administrativos y asesoría empresarial con enfoque estratégico.",
  },
];

const whyKorventis = [
  {
    icon: Cpu,
    title: "Tecnología + Estrategia",
    desc: "No vendemos soporte técnico: integramos tecnología, datos y estrategia empresarial en una sola firma.",
  },
  {
    icon: ShieldCheck,
    title: "Continuidad Operativa",
    desc: "Diseñamos operaciones estables y resilientes para que tu empresa nunca se detenga.",
  },
  {
    icon: TrendingUp,
    title: "Decisiones con Datos",
    desc: "Transformamos información dispersa en indicadores claros para decidir con confianza.",
  },
  {
    icon: Building2,
    title: "Experiencia Real",
    desc: "Años de trabajo directo en infraestructura, bases de datos, analítica y procesos empresariales.",
  },
];

const stats = [
  { value: "99.9%", label: "Continuidad operativa" },
  { value: "+40%", label: "Eficiencia en procesos" },
  { value: "360°", label: "Visibilidad de datos" },
  { value: "24/7", label: "Monitoreo & soporte" },
];


function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Centro de datos e infraestructura tecnológica de Korventis"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
        <Container className="relative z-10 py-32">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow variant="light">Technology · Data · Business Consulting</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Transformamos operaciones empresariales mediante{" "}
                <span className="text-gradient-brand">tecnología y datos</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver/90">
                Ayudamos a empresas a fortalecer su infraestructura tecnológica, optimizar procesos,
                implementar Business Intelligence y tomar mejores decisiones.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaLink to="/contacto" variant="primary" size="lg">
                  Solicitar Diagnóstico <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink to="/servicios" variant="ghostLight" size="lg">
                  Comenzar Proyecto
                </CtaLink>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading text-3xl font-bold text-white">{s.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-silver/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>



      {/* WHY KORVENTIS */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="¿Por qué Korventis?"
            title="El núcleo de tu empresa, más fuerte que nunca"
            subtitle="Korventis representa el Core de las operaciones y el movimiento (Ventis) hacia el crecimiento. Así impulsamos tu transformación."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyKorventis.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestros Servicios"
            title="Soluciones integrales para transformar tu operación"
            subtitle="Una firma que combina infraestructura, datos, automatización y consultoría estratégica bajo un mismo estándar de excelencia."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 3) * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-elevated">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-sky transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <Link
                      to="/servicios"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all hover:gap-3"
                    >
                      Conocer más <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TRANSFORMACIÓN OPERATIVA */}
      <section className="overflow-hidden bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-15 blur-2xl" />
                <img
                  src={meetingImg}
                  alt="Consultores de Korventis en sesión de estrategia empresarial"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="rounded-[1.75rem] shadow-elevated"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Transformación Operativa"
                title="De procesos dispersos a operaciones inteligentes"
                subtitle="Muchas organizaciones tienen excelentes profesionales, pero procesos poco organizados, información dispersa y tecnología subutilizada. Nosotros lo cambiamos."
                className="max-w-xl"
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Diagnóstico integral de tu operación tecnológica y administrativa",
                  "Automatización de procesos manuales y repetitivos",
                  "Datos convertidos en indicadores accionables",
                  "Acompañamiento estratégico durante todo el crecimiento",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/15 text-sky">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-navy/80">{point}</span>
                  </li>
                ))}
              </ul>
              <CtaLink to="/soluciones" variant="navy" size="lg" className="mt-9">
                Explorar Soluciones <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* INDICADORES / BI */}
      <section className="relative overflow-hidden bg-gradient-navy py-24 text-white">
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #2f80ed, transparent 70%)" }}
        />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                variant="light"
                eyebrow="Indicadores & Business Intelligence"
                title="Todo tu negocio en un solo panel"
                subtitle="Dashboards de Power BI que muestran KPIs, ventas, infraestructura y servidores en tiempo real. Menos hojas de cálculo, más decisiones."
                className="max-w-xl"
              />
              <div className="mt-9 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="font-heading text-3xl font-bold text-sky">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-silver/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sky/25 blur-2xl" />
                <img
                  src={dashboardImg}
                  alt="Dashboard de Business Intelligence con KPIs y métricas de servidores"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="rounded-2xl border border-white/10 shadow-elevated"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>



      {/* CONTACT / CTA */}
      <section className="relative overflow-hidden bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Comienza hoy"
                title="Solicita tu diagnóstico empresarial"
                subtitle="Cuéntanos sobre tu operación y te mostraremos cómo tecnología, datos y estrategia pueden fortalecer el núcleo de tu empresa."
                className="max-w-xl"
              />
              <div className="mt-8 space-y-5">
                {[
                  { t: "Diagnóstico sin costo", d: "Evaluamos tu situación actual y oportunidades." },
                  { t: "Plan a tu medida", d: "Propuesta clara, medible y ejecutable." },
                  { t: "Acompañamiento real", d: "Un equipo dedicado a tu transformación." },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-heading font-semibold text-navy">{item.t}</div>
                      <div className="text-sm text-muted-foreground">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
