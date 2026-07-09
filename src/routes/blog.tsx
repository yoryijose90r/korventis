import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, SectionHeading, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Tecnología, Datos y Negocios — Korventis" },
      {
        name: "description",
        content:
          "Ideas y perspectivas de Korventis sobre infraestructura, Business Intelligence, automatización, bases de datos y transformación empresarial.",
      },
      { property: "og:title", content: "Blog | Korventis" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  {
    tag: "Business Intelligence",
    title: "5 señales de que tu empresa necesita un dashboard de datos",
    excerpt:
      "Si sigues tomando decisiones con hojas de cálculo desactualizadas, es momento de repensar tu analítica.",
    date: "12 Jun 2026",
    read: "6 min",
    gradient: "from-[#1f4e79] to-[#2f80ed]",
  },
  {
    tag: "Automatización",
    title: "Cómo la automatización libera horas valiosas cada semana",
    excerpt:
      "Los procesos manuales cuestan más de lo que crees. Te explicamos por dónde empezar a automatizar.",
    date: "03 Jun 2026",
    read: "5 min",
    gradient: "from-[#10253f] to-[#1f4e79]",
  },
  {
    tag: "Infraestructura",
    title: "Continuidad operativa: qué es y por qué no puedes ignorarla",
    excerpt:
      "La alta disponibilidad ya no es un lujo. Descubre cómo diseñar infraestructura que no se detiene.",
    date: "28 May 2026",
    read: "7 min",
    gradient: "from-[#2f80ed] to-[#56a0ff]",
  },
  {
    tag: "Bases de Datos",
    title: "Oracle, SQL Server o PostgreSQL: cómo elegir bien",
    excerpt:
      "Cada motor tiene su lugar. Una guía práctica para decidir según tus necesidades reales.",
    date: "15 May 2026",
    read: "8 min",
    gradient: "from-[#1f4e79] to-[#10253f]",
  },
  {
    tag: "Consultoría",
    title: "Del caos administrativo al control financiero",
    excerpt:
      "Ordenar tus procesos contables es el primer paso para crecer con estabilidad.",
    date: "06 May 2026",
    read: "6 min",
    gradient: "from-[#10253f] to-[#2f80ed]",
  },
  {
    tag: "Transformación Digital",
    title: "Tecnología subutilizada: el costo oculto de no evolucionar",
    excerpt:
      "Muchas empresas ya tienen las herramientas. El reto es aprovecharlas estratégicamente.",
    date: "24 Abr 2026",
    read: "5 min",
    gradient: "from-[#2f80ed] to-[#1f4e79]",
  },
];

function Blog() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Ideas para empresas que quieren{" "}
            <span className="text-gradient-brand">evolucionar</span>
          </>
        }
        subtitle="Perspectivas prácticas sobre tecnología, datos y estrategia empresarial, directo del equipo de Korventis."
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Últimos artículos"
            title="Conocimiento que impulsa decisiones"
            className="max-w-xl"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal as="article" key={p.title} delay={(i % 3) * 90}>
                <Link
                  to="/blog"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
                >
                  <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                    <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {p.tag}
                    </span>
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {p.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {p.read}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-sky">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all group-hover:gap-3">
                      Leer artículo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
