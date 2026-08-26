import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Rocket,
  BarChart3,
  ClipboardList,
  Compass,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Handshake,
  Target,
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
      { title: "KORVENTIS | Consultoría de Transformación Empresarial y Digital" },
      {
        name: "description",
        content:
          "Ayudamos a pequeñas y medianas empresas de Latinoamérica y el Caribe a ser más eficientes, organizadas y preparadas para crecer mediante consultoría estratégica y soluciones digitales.",
      },
      { property: "og:title", content: "KORVENTIS | Consultoría de Transformación Empresarial y Digital" },
      {
        property: "og:description",
        content:
          "Optimizamos la gestión administrativa, fortalecemos procesos y convertimos tu información en mejores decisiones. Agenda una consulta estratégica.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const solutions = [
  {
    icon: Rocket,
    title: "Transformación Empresarial",
    desc: "Modernizamos tu operación con estrategias que optimizan procesos, reducen tareas manuales y fortalecen la gestión organizacional.",
  },
  {
    icon: ClipboardList,
    title: "Gestión Administrativa y Contable",
    desc: "Ordenamos y digitalizamos tus procesos administrativos y financieros para una operación clara, controlada y confiable.",
  },
  {
    icon: BarChart3,
    title: "Inteligencia de Negocios",
    desc: "Convertimos tu información en indicadores y reportes claros que respaldan mejores decisiones gerenciales.",
  },
  {
    icon: Compass,
    title: "Consultoría Estratégica",
    desc: "Acompañamos la planificación de tus proyectos de transformación para que cada inversión genere valor real para el negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Gestión de Infraestructura Empresarial",
    desc: "Aseguramos continuidad, disponibilidad y estabilidad para que tu empresa opere sin interrupciones y pueda crecer.",
  },
];

const whyKorventis = [
  {
    icon: Handshake,
    title: "Aliado Estratégico",
    desc: "No vendemos tecnología: entendemos tu negocio y trabajamos a tu lado para hacerlo más eficiente y rentable.",
  },
  {
    icon: Building2,
    title: "Enfoque Empresarial",
    desc: "Hablamos el idioma de la gerencia: resultados, organización, control y crecimiento sostenible.",
  },
  {
    icon: TrendingUp,
    title: "Decisiones con Datos",
    desc: "Transformamos información dispersa en indicadores claros para decidir con confianza.",
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    desc: "Cada proyecto se orienta a mejoras concretas: más eficiencia, menos errores y mayor productividad.",
  },
];

const stats = [
  { value: "+40%", label: "Eficiencia en procesos" },
  { value: "-30%", label: "Tareas manuales" },
  { value: "360°", label: "Visibilidad del negocio" },
  { value: "100%", label: "Acompañamiento" },
];

function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Consultores de Korventis impulsando la transformación empresarial"
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
              <Eyebrow variant="light">Consultoría de Transformación Empresarial y Digital</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Transformamos empresas para que sean más{" "}
                <span className="text-gradient-brand">eficientes, organizadas</span> y preparadas para crecer.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver/90">
                Ayudamos a empresas de Latinoamérica y el Caribe a optimizar su gestión
                administrativa, fortalecer sus procesos, aprovechar mejor su información y acelerar su
                crecimiento mediante consultoría estratégica y soluciones digitales.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaLink to="/contacto" variant="primary" size="lg">
                  Agenda una consulta estratégica <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink to="/soluciones" variant="ghostLight" size="lg">
                  Conoce nuestras soluciones
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
            title="Un aliado que entiende tu negocio"
            subtitle="No somos una empresa de soporte técnico. Somos tu socio estratégico para organizar, optimizar y hacer crecer tu empresa."
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

      {/* SOLUTIONS */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestras Soluciones"
            title="Cinco formas de hacer que tu empresa funcione mejor"
            subtitle="Combinamos consultoría, organización y tecnología para resolver los retos reales de tu operación."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
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
                      to="/soluciones"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all hover:gap-3"
                    >
                      Conocer más <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink to="/soluciones" variant="navy" size="lg">
              Descubre oportunidades de mejora <ArrowRight className="h-4 w-4" />
            </CtaLink>
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
                eyebrow="Cómo ayudamos"
                title="De una operación dispersa a una empresa organizada"
                subtitle="Muchas organizaciones tienen excelentes personas, pero procesos poco ordenados e información dispersa. Nosotros ponemos orden y claridad."
                className="max-w-xl"
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Diagnóstico integral de tu operación administrativa y de negocio",
                  "Procesos más ágiles, con menos tareas manuales y errores",
                  "Información convertida en indicadores para decidir mejor",
                  "Acompañamiento estratégico durante todo tu crecimiento",
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
                Conversemos sobre tu empresa <ArrowRight className="h-4 w-4" />
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
                eyebrow="Inteligencia de Negocios"
                title="Todo tu negocio en un solo panel"
                subtitle="Dashboards ejecutivos e indicadores que muestran lo que realmente importa, en tiempo real. Menos hojas de cálculo, más decisiones acertadas."
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
                  alt="Panel ejecutivo con indicadores clave del negocio"
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
                title="Agenda una consulta estratégica"
                subtitle="Cuéntanos sobre tu empresa y te mostraremos oportunidades concretas para organizarla, hacerla más eficiente y prepararla para crecer."
                className="max-w-xl"
              />
              <div className="mt-8 space-y-5">
                {[
                  { t: "Primera conversación exploratoria", d: "Entendemos tu situación actual y tus objetivos." },
                  { t: "Plan a tu medida", d: "Una propuesta clara, medible y ejecutable." },
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
