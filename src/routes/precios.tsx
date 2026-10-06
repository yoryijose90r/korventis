import { createFileRoute } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { CtaLink } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";
import { ErpPlansGrid } from "@/components/site/offer-blocks";
import {
  ERP_RULES, SETUP_OPTIONS, SETUP_NOTE, ERP_PAYROLL, ERP_PAYROLL_NOTE,
  ACCOUNTING_PLANS, ACCOUNTING_INCLUDES, ACCOUNTING_ONBOARDING, ACCOUNTING_NOTES,
  MANAGED_PAYROLL, MANAGED_PAYROLL_NOTES, ACCOUNTANT_ENABLEMENT,
  DATA_SERVICES, DATA_NOTES, ASSISTANCE, ASSISTANCE_NOTES, DIAGNOSES, ECF, PRICE_NOTICE,
  type PriceRow,
} from "@/lib/offer";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/precios")({
  head: () =>
    seo("/precios", "Precios | ERP, gestión contable y datos — Korventis", "Precios claros en RD$ y US$ para ERP, puesta en marcha, gestión contable, analítica y bases de datos, con entregables definidos."),
  component: Precios,
});

const NAV = [
  ["erp", "ERP"],
  ["puesta-en-marcha", "Puesta en marcha"],
  ["gestion-contable", "Gestión contable"],
  ["datos", "Datos y bases de datos"],
  ["complementarios", "Servicios complementarios"],
] as const;

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-navy/85">
      {items.map((t) => <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{t}</li>)}
    </ul>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-mist px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand">{children}</span>;
}

function RowsTable({ rows, caption }: { rows: PriceRow[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
      <table className="w-full min-w-[560px] text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-mist text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr><th className="px-5 py-3 font-semibold">Servicio</th><th className="px-5 py-3 text-right font-semibold">Precio</th><th className="px-5 py-3 font-semibold">Alcance</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border align-top">
              <td className="px-5 py-4 font-medium text-navy">{r.name}</td>
              <td className="whitespace-nowrap px-5 py-4 text-right font-heading font-semibold text-brand">{r.price}</td>
              <td className="px-5 py-4 text-muted-foreground">{r.scope}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TierTable({ rows, head }: { rows: [string, string][]; head: [string, string] }) {
  return (
    <table className="mt-5 w-full text-sm">
      <thead><tr className="text-left text-xs uppercase tracking-wide text-muted-foreground"><th className="pb-2 font-semibold">{head[0]}</th><th className="pb-2 text-right font-semibold">{head[1]}</th></tr></thead>
      <tbody>
        {rows.map(([a, b]) => <tr key={a} className="border-t border-border"><td className="py-2 text-navy">{a}</td><td className="py-2 text-right font-semibold text-navy">{b}</td></tr>)}
      </tbody>
    </table>
  );
}

function Precios() {
  return (
    <SiteShell>
      <PageHero eyebrow="Precios" title="Tecnología y gestión para una empresa con proyección." subtitle="ERP, gestión contable e inteligencia de negocios, con precios claros y entregables definidos." />

      <nav aria-label="Secciones de precios" className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-navy transition-colors hover:border-sky hover:text-sky">{label}</a>
          ))}
        </Container>
      </nav>

      <section id="erp" className="scroll-mt-32 bg-background py-20">
        <Container>
          <SectionHeading eyebrow="ERP · Mensualidad en RD$" title="Planes de Korventis ERP" subtitle="Alojamiento compartido administrado, mantenimiento estándar, respaldos y monitoreo según contrato." />
          <div className="mt-12"><ErpPlansGrid /></div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-7">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-navy"><Info className="h-5 w-5 text-sky" aria-hidden="true" />Condiciones</h3>
            <div className="mt-4"><List items={ERP_RULES} /></div>
          </div>
        </Container>
      </section>

      <section id="puesta-en-marcha" className="scroll-mt-32 bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Puesta en marcha · Pago único en RD$" title="Elige cómo arrancar" subtitle={SETUP_NOTE} />
          <div className="mt-10"><RowsTable rows={SETUP_OPTIONS} caption="Modalidades de puesta en marcha" /></div>
          <Reveal>
            <article className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-xl font-bold text-navy">Nómina del ERP</h3><Tag>Mensualidad</Tag></div>
              <TierTable rows={ERP_PAYROLL} head={["Empleados únicos / mes", "Mensualidad"]} />
              <p className="mt-4 text-sm text-muted-foreground">{ERP_PAYROLL_NOTE}</p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section id="gestion-contable" className="scroll-mt-32 bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Gestión contable · Mensualidad en RD$" title="Información contable organizada para cumplir, controlar y decidir." subtitle={ACCOUNTING_INCLUDES} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ACCOUNTING_PLANS.map((p, i) => (
              <Reveal as="article" key={p.id} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
                  <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-3 font-heading text-2xl font-bold text-brand">{p.monthly}<span className="text-sm font-medium text-muted-foreground">/mes</span></p>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-mist p-3"><dt className="text-xs text-muted-foreground">Documentos/mes</dt><dd className="font-semibold text-navy">{p.docs}</dd></div>
                    <div className="rounded-xl bg-mist p-3"><dt className="text-xs text-muted-foreground">Cuentas bancarias</dt><dd className="font-semibold text-navy">{p.banks}</dd></div>
                  </dl>
                  <p className="mt-4 flex-1 text-sm text-navy/85">{p.deliverables}</p>
                  <CtaLink to="/contacto" search={{ servicio: "contabilidad", plan: `Gestión contable ${p.name}` }} variant="outline" className="mt-6 w-full">Solicitar gestión contable</CtaLink>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Incorporación inicial · {ACCOUNTING_ONBOARDING.price}</h3><Tag>Pago único</Tag></div>
              <p className="mt-3 text-sm text-muted-foreground">{ACCOUNTING_ONBOARDING.text}</p>
              <div className="mt-5"><List items={ACCOUNTING_NOTES} /></div>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Nómina administrada</h3><Tag>Mensualidad adicional</Tag></div>
              <TierTable rows={MANAGED_PAYROLL} head={["Empleados únicos / mes", "Precio adicional"]} />
              <div className="mt-5"><List items={MANAGED_PAYROLL_NOTES} /></div>
            </article>
          </div>
          <article className="mt-6 rounded-2xl border border-brand/20 bg-mist p-7">
            <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">{ACCOUNTANT_ENABLEMENT.title} · {ACCOUNTANT_ENABLEMENT.price}</h3><Tag>Pago único</Tag></div>
            <div className="mt-4"><List items={ACCOUNTANT_ENABLEMENT.points} /></div>
          </article>
        </Container>
      </section>

      <section id="datos" className="scroll-mt-32 bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Datos y bases de datos · Precios en US$" title="Analítica e ingeniería de datos" subtitle="Tarifas propias en US$; no son una conversión cambiaria. Cada propuesta confirma los entregables antes de contratar." />
          <div className="mt-10"><RowsTable rows={DATA_SERVICES} caption="Servicios de datos y bases de datos" /></div>
          <div className="mx-auto mt-8 max-w-3xl"><List items={DATA_NOTES} /></div>
          <div className="mt-10 text-center"><CtaLink to="/contacto" search={{ servicio: "datos", plan: "Datos y bases de datos" }} size="lg">Definir mi proyecto</CtaLink></div>
        </Container>
      </section>

      <section id="complementarios" className="scroll-mt-32 bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Servicios complementarios" title="Asistencia, facturación electrónica y diagnósticos" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Asistencia y formación</h3><Tag>RD$</Tag></div>
              <TierTable rows={ASSISTANCE} head={["Modalidad", "Precio"]} />
              <div className="mt-5"><List items={ASSISTANCE_NOTES} /></div>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-semibold text-navy">Facturación electrónica (e-CF)</h3>
              <p className="mt-3 font-heading font-semibold text-brand">Propuesta según proveedor</p>
              <p className="mt-3 text-sm text-muted-foreground">{ECF.summary}</p>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Diagnósticos</h3><Tag>Pago único</Tag></div>
              <ul className="mt-5 space-y-3 text-sm">
                {DIAGNOSES.map((d) => (
                  <li key={d.name} className="flex justify-between gap-3 border-t border-border pt-3"><span className="text-navy">{d.name}<span className="block text-xs text-muted-foreground">{d.scope}</span></span><span className="font-semibold text-brand">{d.price}</span></li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Los diagnósticos no incluyen implementación.</p>
            </article>
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">{PRICE_NOTICE}</p>
        </Container>
      </section>
    </SiteShell>
  );
}
