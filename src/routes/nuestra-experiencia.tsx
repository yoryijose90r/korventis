import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  ClipboardCheck,
  Database,
  BarChart3,
  Gauge,
  Server,
  ShieldCheck,
  Compass,
  ArrowRight,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";

export const Route = createFileRoute("/nuestra-experiencia")({
  head: () => ({
    meta: [
      { title: "Nuestra Experiencia | Korventis Consulting" },
      {
        name: "description",
        content:
          "La experiencia profesional acumulada de Korventis en transformación empresarial y digital, inteligencia de negocios, procesos administrativos y consultoría estratégica.",
      },
      { property: "og:title", content: "Nuestra Experiencia | Korventis" },
      { property: "og:url", content: "/nuestra-experiencia" },
    ],
    links: [{ rel: "canonical", href: "/nuestra-experiencia" }],
  }),
  component: NuestraExperiencia,
});

const areas = [
  {
    icon: Rocket,
    title: "Transformación empresarial y digital",
    text: "Acompañamos a las empresas en la modernización de su operación, adoptando tecnología y nuevas formas de trabajo para crecer con orden y eficiencia.",
  },
  {
    icon: ClipboardCheck,
    title: "Optimización de procesos administrativos y contables",
    text: "Ordenamos y simplificamos procesos administrativos y contables para reducir errores, ahorrar tiempo y ganar control financiero.",
  },
  {
    icon: Database,
    title: "Sistemas administrativos y financieros",
    text: "Implementamos y mejoramos sistemas de gestión administrativa y financiera que integran la información del negocio en un solo lugar.",
  },
  {
    icon: BarChart3,
    title: "Inteligencia de negocios y análisis de datos",
    text: "Convertimos datos dispersos en información clara y confiable mediante herramientas de Business Intelligence y analítica.",
  },
  {
    icon: Gauge,
    title: "Indicadores ejecutivos para decisiones",
    text: "Diseñamos dashboards e indicadores clave que permiten a la dirección medir, entender y decidir con datos en tiempo real.",
  },
  {
    icon: Server,
    title: "Gestión de infraestructura empresarial",
    text: "Gestionamos infraestructura tecnológica —servidores, virtualización y cloud— para una operación estable y escalable.",
  },
  {
    icon: ShieldCheck,
    title: "Continuidad operativa y documentación",
    text: "Fortalecemos la continuidad del negocio con monitoreo, respaldos y documentación clara de procesos y sistemas.",
  },
  {
    icon: Compass,
    title: "Consultoría estratégica en tecnología y gestión",
    text: "Asesoramos a la dirección para alinear tecnología, datos y estrategia con los objetivos reales de crecimiento de la empresa.",
  },
];

function NuestraExperiencia() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Nuestra Experiencia"
        title={
          <>
            Experiencia que genera <span className="text-gradient-brand">confianza</span>
          </>
        }
        subtitle="La experiencia profesional acumulada de Korventis nos permite resolver desafíos empresariales reales, integrando tecnología, datos y estrategia en cada acompañamiento."
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Áreas de especialización"
            title="Dónde aportamos valor"
            subtitle="Estas son las áreas en las que hemos desarrollado experiencia y capacidad para transformar la operación de las empresas."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal as="article" key={a.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-elevated">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <a.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-navy py-24 text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #2f80ed, transparent 70%)" }}
        />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Convertimos la experiencia en{" "}
              <span className="text-gradient-brand">resultados para tu empresa</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-silver/85">
              Conversemos sobre tus desafíos y cómo nuestra experiencia puede ayudarte a operar con
              más orden, datos confiables y mejores decisiones.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaLink to="/contacto" variant="white" size="lg">
                Hablemos de tu proyecto <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </SiteShell>
  );
}
