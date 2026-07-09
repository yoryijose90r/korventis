import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Anchor,
  Repeat,
  Users,
  Scale,
  Activity,
  ArrowRight,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import foundersImg from "@/assets/founders.jpg";
import meetingImg from "@/assets/meeting.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros | Korventis Consulting" },
      {
        name: "description",
        content:
          "Conoce a Korventis: misión, visión, valores e historia de una firma que integra tecnología, datos y estrategia empresarial en el Caribe y Latinoamérica.",
      },
      { property: "og:title", content: "Sobre Nosotros | Korventis" },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: SobreNosotros,
});

const valores = [
  { icon: ShieldCheck, t: "Integridad" },
  { icon: Handshake, t: "Compromiso" },
  { icon: Lightbulb, t: "Innovación" },
  { icon: Anchor, t: "Estabilidad" },
  { icon: Repeat, t: "Mejora Continua" },
  { icon: Users, t: "Trabajo en Equipo" },
  { icon: Scale, t: "Transparencia" },
  { icon: Activity, t: "Continuidad Operativa" },
];

const objetivos = [
  "Modernizar empresas",
  "Automatizar procesos",
  "Reducir costos operativos",
  "Aumentar productividad",
  "Optimizar infraestructura",
  "Mejorar análisis de datos",
  "Implementar Business Intelligence",
  "Acompañar el crecimiento empresarial",
];

const founders = [
  {
    name: "José Reyes",
    role: "Tecnología, Datos & Transformación Digital",
    skills: [
      "Infraestructura",
      "Oracle",
      "SQL Server",
      "PostgreSQL",
      "Power BI",
      "Business Intelligence",
      "Cloud",
      "Virtualización",
      "Automatización",
      "Desarrollo",
    ],
  },
  {
    name: "Yomarly De la Rosa",
    role: "Contadora Pública & Consultoría Empresarial",
    skills: [
      "Consultoría Contable",
      "Procesos Administrativos",
      "Control Financiero",
      "Asesoría Empresarial",
    ],
  },
];

function SobreNosotros() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sobre Nosotros"
        title={
          <>
            El <span className="text-gradient-brand">núcleo</span> y el movimiento del crecimiento
          </>
        }
        subtitle="Korventis une el Core de las operaciones empresariales con el impulso (Ventis) hacia el crecimiento, integrando tecnología, datos y estrategia en una sola firma."
      />

      {/* HISTORIA */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-15 blur-2xl" />
                <img
                  src={meetingImg}
                  alt="Equipo de Korventis colaborando"
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
                eyebrow="Nuestra Historia"
                title="Nacimos de la experiencia real"
                className="max-w-xl"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Korventis nace luego de años de experiencia trabajando directamente en
                  infraestructura tecnológica, administración de bases de datos, analítica y procesos
                  empresariales.
                </p>
                <p>
                  Durante ese recorrido identificamos que muchas organizaciones poseen excelentes
                  profesionales, pero procesos poco organizados, información dispersa y tecnología
                  subutilizada.
                </p>
                <p>
                  Por ello creamos Korventis con el propósito de integrar tecnología, datos y
                  estrategia empresarial en una sola firma de consultoría. Hoy ayudamos a empresas a
                  mejorar su estabilidad operativa, automatizar procesos, transformar datos en
                  información útil y fortalecer sus operaciones administrativas y financieras.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MISION / VISION */}
      <section className="bg-mist py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Misión",
                text: "Ayudar a las empresas a fortalecer el núcleo de sus operaciones mediante soluciones tecnológicas, análisis de datos, automatización y consultoría estratégica que permitan mejorar la eficiencia, la continuidad operativa y la toma de decisiones.",
              },
              {
                icon: Eye,
                title: "Visión",
                text: "Ser una firma líder de consultoría tecnológica y empresarial en el Caribe y Latinoamérica, reconocida por integrar tecnología, datos y estrategia para impulsar organizaciones más eficientes, competitivas y sostenibles.",
              },
            ].map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-white p-9 shadow-card">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VALORES */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestros Valores"
            title="Principios que guían cada proyecto"
          />
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {valores.map((v, i) => (
              <Reveal key={v.t} delay={(i % 4) * 70}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-mist p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:bg-white hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-sky transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 font-heading font-semibold text-navy">{v.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* LIDERAZGO */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="Liderazgo"
            title="Un matrimonio de profesionales"
            subtitle="Tecnología y contabilidad, unidas para transformar tu empresa desde el núcleo."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
                <img
                  src={foundersImg}
                  alt="José Reyes y Yomarly De la Rosa, fundadores de Korventis"
                  width={1200}
                  height={1408}
                  loading="lazy"
                  className="h-80 w-full object-cover object-top"
                />
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-navy">
                    José Reyes &amp; Yomarly De la Rosa
                  </h3>
                  <p className="mt-1 text-sm text-sky">Fundadores de Korventis</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    La combinación única de experiencia tecnológica y financiera que da vida a la
                    visión integral de Korventis.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {founders.map((f, i) => (
                <Reveal as="article" key={f.name} delay={i * 100}>
                  <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card">
                    <h3 className="font-heading text-xl font-bold text-navy">{f.name}</h3>
                    <p className="mt-1 text-sm font-medium text-sky">{f.role}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-mist px-3 py-1.5 text-xs font-medium text-navy/75"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* OBJETIVOS */}
      <section className="relative overflow-hidden bg-gradient-navy py-24 text-white">
        <Container className="relative">
          <SectionHeading
            variant="light"
            eyebrow="Objetivos"
            title="Hacia dónde llevamos a tu empresa"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {objetivos.map((o, i) => (
              <Reveal key={o} delay={(i % 4) * 70}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <span className="mt-0.5 font-heading text-sm font-bold text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-silver/90">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <CtaLink to="/contacto" variant="white" size="lg">
              Trabajemos juntos <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
