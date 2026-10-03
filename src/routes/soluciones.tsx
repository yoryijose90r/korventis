import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import { MethodSection } from "@/components/site/offer-blocks";
import { LINES, FISCAL_SCOPE } from "@/lib/offer";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/soluciones")({
  head: () =>
    seo("/soluciones", "Soluciones | Korventis", "Korventis ERP, datos y automatización, contabilidad y gestión, e infraestructura y continuidad para empresas dominicanas."),
  component: Soluciones,
});

function Soluciones() {
  return (
    <SiteShell>
      <PageHero eyebrow="Soluciones" title="Cuatro líneas, un mismo método" subtitle="Elige lo que tu empresa necesita hoy y crece a partir de ahí." />
      <section className="bg-background py-20">
        <Container className="space-y-6">
          {LINES.map((l, i) => (
            <Reveal as="article" key={l.id} delay={i * 40}>
              <div className={`grid gap-6 rounded-2xl p-8 md:grid-cols-[1fr_1fr] ${i % 2 ? "bg-mist" : "border border-border bg-white"}`}>
                <div>
                  <span className="font-heading text-sm font-bold text-sky">Línea {l.letter}</span>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-navy">{l.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{l.text}</p>
                </div>
                <ul className="space-y-3 self-center text-sm text-navy/85">
                  {l.points.map((p) => <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="rounded-2xl border border-brand/20 bg-white p-6 text-sm text-navy/85">
            <strong className="text-navy">Nómina: software y servicio son distintos.</strong> El módulo de nómina del ERP es un adicional de software. La gestión profesional de nómina es un servicio contable que se cotiza aparte. {FISCAL_SCOPE}
          </div>
        </Container>
      </section>
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Método" title="Cómo entregamos" />
          <div className="mt-12"><MethodSection /></div>
          <div className="mt-12 text-center"><CtaLink to="/contacto" size="lg">Agendar conversación inicial</CtaLink></div>
        </Container>
      </section>
    </SiteShell>
  );
}
