import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, ClipboardList, Database, GraduationCap, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Container, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-button";
import { QualificationForm } from "@/components/site/qualification-form";
import { ConversationVsDiagnosis, ErpPlansGrid, FaqList, MethodSection } from "@/components/site/offer-blocks";
import { LINES, FISCAL_SCOPE, CONTACT } from "@/lib/offer";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "/",
      "Korventis | Tecnología y gestión para operar con control",
      "Implementamos ERP, organizamos tus datos y acompañamos la gestión contable de empresas y pymes dominicanas con alcance claro.",
    ),
  component: Index,
});

const capabilities = [
  { icon: ClipboardList, t: "Alcance documentado", d: "Sabes qué se hará, qué no y en qué plazo antes de empezar." },
  { icon: GraduationCap, t: "Capacitación y puesta en marcha", d: "Tu equipo aprende a operar antes del arranque." },
  { icon: BarChart3, t: "Datos para gerencia", d: "Indicadores claros a partir de tu propia información." },
  { icon: ShieldCheck, t: "Continuidad según contrato", d: "Respaldo y soporte diseñados para el servicio contratado." },
];

function HeroDemo() {
  const rows = [["Ventas", 72], ["Compras", 48], ["Inventario", 61], ["Cobros", 39]] as const;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur" aria-label="Demostración conceptual de un tablero de indicadores">
      <div className="flex items-center justify-between">
        <p className="font-heading text-sm font-semibold text-white">Panel de operación</p>
        <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-silver">Demostración</span>
      </div>
      <div className="mt-5 flex items-center gap-2 text-[11px] text-silver/85">
        {["Pedido", "Factura", "Cobro", "Reporte"].map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <span className="rounded-md bg-white/10 px-2 py-1">{s}</span>
            {i < 3 && <span className="relative h-px flex-1 overflow-hidden bg-white/20"><span className="flow-dot absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-sky" style={{ animationDelay: `${i * 0.6}s`, ["--flow-distance" as string]: "40px" }} /></span>}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {rows.map(([l, v]) => (
          <div key={l}>
            <div className="flex justify-between text-xs text-silver/85"><span>{l}</span><span>Ejemplo</span></div>
            <div className="mt-1 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-sky" style={{ width: `${v}%` }} /></div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[11px] text-silver/70">Interfaz ilustrativa con datos ficticios.</p>
    </div>
  );
}

function Index() {
  return (
    <SiteShell>
      <section className="bg-gradient-navy pt-28 pb-16 text-white sm:pt-32 lg:pb-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Eyebrow variant="light">Tecnología · Datos · Gestión contable</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Tecnología y gestión para operar con control.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-silver/90">
              Implementamos ERP, organizamos tus datos y acompañamos la gestión de tu empresa con soluciones de alcance claro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/contacto" variant="white" size="lg">Agendar conversación inicial <ArrowRight className="h-4 w-4" /></CtaLink>
              <CtaLink to="/soluciones" variant="ghostLight" size="lg">Explorar soluciones</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={100}><HeroDemo /></Reveal>
        </Container>
      </section>

      <section className="bg-background py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.t} delay={i * 50}>
                <c.icon className="h-7 w-7 text-sky" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-navy">{c.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Soluciones" title="Cuatro líneas de servicio" subtitle="Contrata una sola o combínalas según tu operación." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {LINES.map((l) => (
              <article key={l.id} className="bg-white p-8">
                <span className="font-heading text-sm font-bold text-sky">{l.letter}</span>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">{FISCAL_SCOPE}</p>
          <div className="mt-8 text-center"><CtaLink to="/soluciones" variant="outline">Ver detalle de soluciones <ArrowRight className="h-4 w-4" /></CtaLink></div>
        </Container>
      </section>

      <section className="bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Korventis ERP" title="Planes de lanzamiento" subtitle="Mensualidad con alojamiento incluido y un pago inicial de implementación." />
          <div className="mt-12"><ErpPlansGrid /></div>
          <div className="mt-8 text-center"><CtaLink to="/precios" variant="outline">Ver planes completos, nómina y e-CF</CtaLink></div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Método" title="Cómo entregamos" subtitle="Seis etapas claras, de la primera conversación al acompañamiento contratado." />
          <div className="mt-12"><MethodSection /></div>
        </Container>
      </section>

      <section className="bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Primer paso" title="Conversación inicial y diagnóstico profesional" />
          <div className="mx-auto mt-10 max-w-4xl"><ConversationVsDiagnosis /></div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos" />
          <div className="mt-10"><FaqList /></div>
        </Container>
      </section>

      <section id="solicitud" className="bg-background py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading align="left" eyebrow="Solicitud" title="Cuéntanos sobre tu empresa" subtitle="Cuatro pasos breves para preparar la conversación inicial." />
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground"><Database className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{CONTACT.responseCommitment}</p>
          </div>
          <QualificationForm />
        </Container>
      </section>
    </SiteShell>
  );
}
