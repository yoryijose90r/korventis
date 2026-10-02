import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2, Send } from "lucide-react";
import { CtaButton } from "./cta-button";
import { LeadError, LeadSuccess, useLeadSubmit } from "./lead-submit";
import { AREAS, AREA_LABELS, leadSchema } from "@/lib/leads.schema";
import { CONTACT } from "@/lib/offer";

type Values = { name: string; email: string; phone: string; company: string; area: string; message: string; privacy: boolean; website: string };
const initial: Values = { name: "", email: "", phone: "", company: "", area: "", message: "", privacy: false, website: "" };

const field = "h-12 w-full rounded-xl border border-input bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-sky focus-visible:ring-2 focus-visible:ring-ring/30";

/** Short first-contact form: no RNC or extensive data required. */
export function ContactForm() {
  const [v, setV] = useState<Values>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { state, submit } = useLeadSubmit();
  const set = <K extends keyof Values>(k: K, val: Values[K]) => setV((p) => ({ ...p, [k]: val }));

  if (state === "sent") return <LeadSuccess />;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({
      source: "contacto",
      name: v.name,
      email: v.email,
      phone: v.phone || undefined,
      company: v.company || undefined,
      area: v.area,
      message: v.message || undefined,
      privacy: v.privacy,
      website: v.website || undefined,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    void submit(parsed.data);
  };

  const err = (k: string) =>
    errors[k] ? <p id={`cf-${k}-err`} className="text-xs font-medium text-destructive">{errors[k]}</p> : null;
  const summary = `Nombre: ${v.name}\nEmpresa: ${v.company}\nÁrea: ${v.area ? AREA_LABELS[v.area as keyof typeof AREA_LABELS] : ""}\n${v.message}`;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className="text-sm font-medium text-navy">Nombre *</label>
          <input id="cf-name" autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={field} />
          {err("name")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className="text-sm font-medium text-navy">Correo electrónico *</label>
          <input id="cf-email" type="email" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} className={field} />
          {err("email")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-phone" className="text-sm font-medium text-navy">Teléfono o WhatsApp</label>
          <input id="cf-phone" type="tel" autoComplete="tel" value={v.phone} onChange={(e) => set("phone", e.target.value)} className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-company" className="text-sm font-medium text-navy">Empresa</label>
          <input id="cf-company" autoComplete="organization" value={v.company} onChange={(e) => set("company", e.target.value)} className={field} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="cf-area" className="text-sm font-medium text-navy">Área de interés *</label>
        <select id="cf-area" value={v.area} onChange={(e) => set("area", e.target.value)} aria-invalid={!!errors.area} aria-describedby={errors.area ? "cf-area-err" : undefined} className={field}>
          <option value="" disabled>Selecciona un área</option>
          {AREAS.map((a) => <option key={a} value={a}>{AREA_LABELS[a]}</option>)}
        </select>
        {err("area")}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-medium text-navy">¿Qué te gustaría resolver?</label>
        <textarea id="cf-message" rows={4} value={v.message} onChange={(e) => set("message", e.target.value)} className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-sky focus-visible:ring-2 focus-visible:ring-ring/30" />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">No completar</label>
        <input id="cf-website" tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <div className="mt-5">
        <label htmlFor="cf-privacy" className="flex cursor-pointer items-start gap-3 text-sm text-navy/85">
          <input id="cf-privacy" type="checkbox" checked={v.privacy} onChange={(e) => set("privacy", e.target.checked)} aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "cf-privacy-err" : undefined} className="mt-1 h-4 w-4 accent-[var(--brand)]" />
          <span>He leído la <Link to="/privacidad" className="font-semibold text-brand underline underline-offset-2">política de privacidad</Link> y acepto que Korventis use estos datos para responder mi solicitud.</span>
        </label>
        {err("privacy")}
      </div>

      <CtaButton type="submit" variant="primary" size="lg" className="mt-6 w-full" disabled={state === "sending"} aria-busy={state === "sending"}>
        {state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> : <>Agendar conversación inicial <Send className="h-4 w-4" /></>}
      </CtaButton>
      <p className="mt-3 text-center text-xs text-muted-foreground">{CONTACT.responseCommitment}</p>

      <LeadError state={state} summary={summary} />
    </form>
  );
}
