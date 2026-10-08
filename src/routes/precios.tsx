import { createFileRoute } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { CtaLink, ContactCta } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";
import { ErpPlansGrid } from "@/components/site/offer-blocks";
import {
  ERP_RULES, SETUP_OPTIONS, SETUP_NOTE, ERP_PAYROLL, ERP_PAYROLL_NOTE,
  ACCOUNTING_PLANS, ACCOUNTING_INCLUDES, ACCOUNTING_ONBOARDING, ACCOUNTING_NOTES,
  MANAGED_PAYROLL, MANAGED_PAYROLL_NOTES, ACCOUNTANT_ENABLEMENT,
  DATA_SERVICES, DATA_NOTES, ASSISTANCE, ASSISTANCE_NOTES, DIAGNOSES, ECF, PRICE_NOTICE,
  PRICING_INTRO, PRICING_EXAMPLES, EXAMPLES_NOTE, PAYROLL_SETUP, PAYROLL_CLARIFY, ACCOUNTING_LEAD, DATA_INTRO,
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

function SetupTable() {
  const rows = SETUP_OPTIONS.filter((r) => r.available !== false);
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
      <table className="w-full min-w-[640px] text-sm">
        <caption className="sr-only">Modalidades de puesta en marcha</caption>
        <thead className="bg-mist text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr><th className="px-5 py-3 font-semibold">Modalidad</th><th className="px-5 py-3 font-semibold">Quién configura</th><th className="px-5 py-3 text-right font-semibold">Pago único</th><th className="px-5 py-3 font-semibold">Qué recibe</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border align-top">
              <td className="px-5 py-4 font-medium text-navy">{r.name}</td>
              <td className="px-5 py-4 text-navy/85">{r.who}</td>
              <td className="whitespace-nowrap px-5 py-4 text-right font-heading font-semibold text-brand">{r.price}</td>
              <td className="px-5 py-4 text-muted-foreground">{r.scope}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function More({ title, items }: { title: string; items: string[] }) {
  return (
    <details className="group mt-5 rounded-xl border border-border bg-white p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-sm font-semibold text-navy">{title}<span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
      <div className="mt-3"><List items={items} /></div>
    </details>
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

      <section className="bg-background pt-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-navy/85">{PRICING_INTRO}</p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {PRICING_EXAMPLES.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky">Ejemplo</p>
                <p className="mt-1 font-heading font-semibold text-navy">{t}</p>
                <p className="mt-1 text-sm text-navy/85">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">{EXAMPLES_NOTE}</p>
        </Container>
      </section>

      <section id="erp" className="scroll-mt-32 bg-background py-20">
        <Container>
          <SectionHeading eyebrow="ERP para operar con tu equipo · Mensualidad en RD$" title="Planes de Korventis ERP" subtitle="Alojamiento compartido administrado, mantenimiento estándar, respaldos y monitoreo incluidos según contrato. Sin cargo adicional de nube." />
          <div className="mt-12"><ErpPlansGrid /></div>
          <div className="mx-auto max-w-3xl"><More title="Condiciones del servicio" items={ERP_RULES} /></div>

          <div className="mt-16">
            <h3 className="text-center font-heading text-2xl font-bold text-navy">Puesta en marcha asistida · pago único</h3>
            <p className="mt-2 text-center text-sm font-medium text-brand">Se elige una sola modalidad; no se suman entre sí.</p>
            <div className="mt-6"><SetupTable /></div>
            <p className="mt-3 text-center text-xs text-muted-foreground">{SETUP_NOTE}</p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-xl font-bold text-navy">Tu equipo procesa la nómina</h3><Tag>Mensualidad · opcional</Tag></div>
              <TierTable rows={ERP_PAYROLL} head={["Empleados únicos / mes", "Software adicional"]} />
              <p className="mt-4 text-sm text-muted-foreground">{ERP_PAYROLL_NOTE}</p>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-xl font-bold text-navy">Korventis procesa la nómina</h3><Tag>Mensualidad · opcional</Tag></div>
              <TierTable rows={MANAGED_PAYROLL} head={["Empleados únicos / mes", "Servicio profesional"]} />
              <More title="Qué incluye y qué se cobra aparte" items={MANAGED_PAYROLL_NOTES} />
            </article>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-2 text-center text-sm text-navy/85">
            <p className="font-medium">{PAYROLL_CLARIFY}</p>
            <p className="text-muted-foreground">{PAYROLL_SETUP}</p>
          </div>
        </Container>
      </section>

      <section id="gestion-contable" className="scroll-mt-32 bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Gestión realizada por Korventis · Mensualidad en RD$" title="Información contable organizada para cumplir, controlar y decidir." subtitle={ACCOUNTING_LEAD} />
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
                  <ContactCta servicio={"contabilidad"} plan={`Gestión contable ${p.name}`} variant="outline" className="mt-6 w-full">Solicitar gestión contable</ContactCta>
                </div>
              </Reveal>
            ))}
          </div>
          <article className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-7">
            <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Incorporación inicial · {ACCOUNTING_ONBOARDING.price}</h3><Tag>Pago único</Tag></div>
            <p className="mt-3 text-sm text-muted-foreground">{ACCOUNTING_ONBOARDING.text}</p>
            <p className="mt-3 text-sm text-navy/85">{ACCOUNTING_INCLUDES}</p>
            <More title="Condiciones y qué se cobra aparte" items={ACCOUNTING_NOTES} />
            <p className="mt-5 text-sm text-muted-foreground">Adicional opcional, no requisito: nómina administrada por Korventis (ver sección ERP).</p>
          </article>
          {ACCOUNTANT_ENABLEMENT.available && (
            <article className="mx-auto mt-6 max-w-3xl rounded-2xl border border-brand/20 bg-white p-7">
              <h3 className="font-heading text-lg font-semibold text-navy">{ACCOUNTANT_ENABLEMENT.title}</h3>
              <p className="mt-3 text-sm text-navy/85">{ACCOUNTANT_ENABLEMENT.summary}</p>
              <More title="Condiciones" items={ACCOUNTANT_ENABLEMENT.points} />
            </article>
          )}
        </Container>
      </section>

      <section id="datos" className="scroll-mt-32 bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Datos y bases de datos · Precios en US$" title="Analítica e ingeniería de datos" subtitle={DATA_INTRO} />
          <div className="mt-10"><RowsTable rows={DATA_SERVICES} caption="Servicios de datos y bases de datos" /></div>
          <div className="mx-auto max-w-3xl"><More title="Qué se cobra aparte y condiciones" items={DATA_NOTES} /></div>
          <div className="mt-10 text-center"><ContactCta servicio={"datos"} plan={"Datos y bases de datos"} size="lg">Definir mi proyecto</ContactCta></div>
        </Container>
      </section>

      <section id="complementarios" className="scroll-mt-32 bg-background py-20">
        <Container>
          <SectionHeading eyebrow="Servicios complementarios" title="Asistencia, facturación electrónica y diagnósticos" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-white p-7">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg font-semibold text-navy">Asistencia y formación</h3><Tag>RD$</Tag></div>
              <TierTable rows={ASSISTANCE} head={["Modalidad", "Precio"]} />
              <More title="Condiciones" items={ASSISTANCE_NOTES} />
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
