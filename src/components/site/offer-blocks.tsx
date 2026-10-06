import { Check } from "lucide-react";
import { DELIVERABLES, ERP_PLANS, ERP_EXTRA_USER, ERP_DEDICATED, METHOD, PRICE_NOTICE, CONVERSATION_VS_DIAGNOSIS, FAQS } from "@/lib/offer";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-button";

const tick = <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />;

export function ErpPlansGrid() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ERP_PLANS.map((p, i) => (
          <Reveal as="article" key={p.id} delay={i * 60}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
              <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
              <div className="mt-4 rounded-xl bg-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mensualidad</p>
                <p className="mt-1 font-heading text-2xl font-bold text-brand">
                  {p.monthly}<span className="text-sm font-medium text-muted-foreground">/mes</span>
                </p>
              </div>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-navy/85">
                <li className="flex gap-2">{tick}{p.usersIncluded} {p.usersIncluded === 1 ? "usuario incluido" : "usuarios incluidos"}</li>
                <li className="flex gap-2">{tick}POS estándar: {p.pos}</li>
                <li className="flex gap-2">{tick}Asistencia de uso: {p.assistance}</li>
                <li className="flex gap-2">{tick}Usuario adicional: {ERP_EXTRA_USER}</li>
              </ul>
              <CtaLink to="/contacto" search={{ servicio: "erp", plan: `ERP ${p.name}` }} variant="outline" size="md" className="mt-6 w-full">Solicitar propuesta ERP</CtaLink>
            </div>
          </Reveal>
        ))}
        <Reveal as="article" delay={180}>
          <div className="flex h-full flex-col rounded-2xl bg-gradient-navy p-6 text-white shadow-card">
            <h3 className="font-heading text-xl font-bold">{ERP_DEDICATED.name}</h3>
            <p className="mt-4 font-heading text-lg font-semibold text-sky">{ERP_DEDICATED.label}</p>
            <p className="mt-3 flex-1 text-sm text-silver/90">{ERP_DEDICATED.text}</p>
            <CtaLink to="/contacto" search={{ servicio: "erp", plan: "ERP Dedicated" }} variant="white" size="md" className="mt-6 w-full">Solicitar propuesta ERP</CtaLink>
          </div>
        </Reveal>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">{PRICE_NOTICE}</p>
    </div>
  );
}

export function MethodSection() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
      <ol className="relative space-y-6 border-l-2 border-border pl-8">
        {METHOD.map(([t, d], i) => (
          <Reveal as="li" key={t} delay={i * 50}>
            <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full bg-brand font-heading text-xs font-bold text-white">{i + 1}</span>
            <h3 className="font-heading text-lg font-semibold text-navy">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <div className="rounded-2xl bg-gradient-navy p-8 text-white">
          <h3 className="font-heading text-xl font-semibold">Entregables según servicio</h3>
          <ul className="mt-5 space-y-3 text-sm text-silver/90">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{d}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-silver/75">Compromiso de entrega según el alcance contratado.</p>
        </div>
      </Reveal>
    </div>
  );
}

export function ConversationVsDiagnosis() {
  const items = [CONVERSATION_VS_DIAGNOSIS.conversation, CONVERSATION_VS_DIAGNOSIS.diagnosis];
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((it, i) => (
        <div key={it.title} className={i === 0 ? "rounded-2xl border border-border bg-white p-7" : "rounded-2xl border border-brand/20 bg-mist p-7"}>
          <p className="text-xs font-semibold uppercase tracking-wide text-sky">{it.price}</p>
          <h3 className="mt-2 font-heading text-xl font-bold text-navy">{it.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy/85">
            {it.points.map((p) => <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function FaqList() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
      {FAQS.map(([q, a]) => (
        <details key={q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-navy focus-visible:outline-2">
            {q}<span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </details>
      ))}
    </div>
  );
}
