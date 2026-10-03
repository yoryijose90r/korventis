import { createFileRoute } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { CtaLink } from "@/components/site/cta-button";
import { ErpPlansGrid, ConversationVsDiagnosis } from "@/components/site/offer-blocks";
import { ERP_RULES, PAYROLL, ECF } from "@/lib/offer";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/precios")({
  head: () =>
    seo("/precios", "Planes y precios | Korventis ERP", "Planes de lanzamiento de Korventis ERP en RD$, nómina opcional, facturación electrónica y consultoría especializada."),
  component: Precios,
});

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-navy/85">
      {items.map((t) => <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{t}</li>)}
    </ul>
  );
}

function Precios() {
  return (
    <SiteShell>
      <PageHero eyebrow="Planes" title="Precios claros, alcance definido" subtitle="Precios de lanzamiento propuestos, sujetos a confirmación de alcance. Todos los importes en RD$, antes de impuestos aplicables." />

      <section className="bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Korventis ERP" title="Planes mensuales" subtitle="El alojamiento está incluido. La implementación es un pago inicial separado." />
          <div className="mt-12"><ErpPlansGrid /></div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-white p-7">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-navy"><Info className="h-5 w-5 text-sky" aria-hidden="true" />Condiciones</h3>
            <div className="mt-4"><List items={ERP_RULES} /></div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky">Adicional opcional de software</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy">Nómina</h2>
            <p className="mt-4 font-heading text-xl font-semibold text-brand">{PAYROLL.base}</p>
            <p className="mt-1 text-sm text-muted-foreground">{PAYROLL.baseDetail}</p>
            <ul className="mt-4 space-y-1 text-sm text-navy/85"><li>{PAYROLL.tier}</li><li>{PAYROLL.above}</li><li>{PAYROLL.setup}</li></ul>
            <table className="mt-5 w-full text-sm">
              <caption className="mb-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ejemplos</caption>
              <tbody>
                {PAYROLL.examples.map(([e, p]) => <tr key={e} className="border-t border-border"><td className="py-2 text-navy">{e}</td><td className="py-2 text-right font-semibold text-navy">{p}</td></tr>)}
              </tbody>
            </table>
            <div className="mt-5"><List items={PAYROLL.notes} /></div>
          </article>
          <article className="rounded-2xl border border-border bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky">Integración con proveedor externo</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy">Facturación electrónica (e-CF)</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/85">{ECF.summary}</p>
            <div className="mt-5"><List items={ECF.notes} /></div>
          </article>
        </Container>
      </section>

      <section className="bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Consultoría especializada" title="Diagnóstico, proyectos y servicios a medida" subtitle="Se cotizan por separado de las mensualidades ERP: datos, BI, integraciones, infraestructura y servicios contables." />
          <div className="mx-auto mt-10 max-w-4xl"><ConversationVsDiagnosis /></div>
          <div className="mt-10 text-center"><CtaLink to="/contacto" size="lg">Solicitar propuesta</CtaLink></div>
        </Container>
      </section>
    </SiteShell>
  );
}
