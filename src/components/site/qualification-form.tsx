import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { CtaButton } from "./cta-button";
import { LeadError, LeadSuccess, useLeadSubmit } from "./lead-submit";
import { AREAS, AREA_LABELS, leadSchema } from "@/lib/leads.schema";
import { cn } from "@/lib/utils";

type Area = (typeof AREAS)[number];
type Answers = {
  area: Area | "";
  erp: string;
  users: string;
  employees: string;
  services: string[];
  urgency: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  privacy: boolean;
};

const initial: Answers = { area: "", erp: "", users: "", employees: "", services: [], urgency: "", name: "", email: "", phone: "", company: "", role: "", message: "", privacy: false };

const SERVICES: Record<Area, string[]> = {
  erp: ["Ventas", "Compras", "Inventario", "Contabilidad en ERP", "Nómina (software)", "Facturación electrónica"],
  datos: ["Bases de datos", "Business Intelligence", "Reportes", "Integraciones", "Automatización"],
  contabilidad: ["Contabilidad / iguala", "Obligaciones DGII", "Gestión de nómina", "Costos", "Planeación fiscal"],
  infraestructura: ["Servidores", "Virtualización", "Respaldos", "Documentación de recuperación"],
  varias: ["ERP", "Datos", "Contabilidad", "Infraestructura"],
};

const STEPS = ["Área", "Contexto", "Contacto", "Confirmación"];
const input = "h-12 w-full rounded-xl border border-input bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-sky focus-visible:ring-2 focus-visible:ring-ring/30";

function Radio({ name, label, options, value, onChange, error }: { name: string; label: string; options: string[]; value: string; onChange: (v: string) => void; error?: string }) {
  return (
    <fieldset aria-describedby={error ? `${name}-err` : undefined}>
      <legend className="mb-2 text-sm font-semibold text-navy">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label key={o} className={cn("flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm text-navy transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/40", value === o ? "border-sky bg-mist" : "border-border bg-white hover:border-sky/60")}>
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="accent-[var(--brand)]" />
            {o}
          </label>
        ))}
      </div>
      {error && <p id={`${name}-err`} className="mt-2 text-xs font-medium text-destructive">{error}</p>}
    </fieldset>
  );
}

export function QualificationForm() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { state, submit } = useLeadSubmit();
  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((p) => ({ ...p, [k]: v }));

  if (state === "sent") return <LeadSuccess />;

  const isTech = a.area === "erp" || a.area === "datos" || a.area === "infraestructura" || a.area === "varias";

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 0 && !a.area) e.area = "Selecciona un área";
    if (s === 1) {
      if (isTech && !a.erp) e.erp = "Selecciona una opción";
      if (a.area === "contabilidad" && !a.employees) e.employees = "Selecciona una opción";
      if (!a.urgency) e.urgency = "Selecciona una opción";
    }
    if (s === 2) {
      if (a.name.trim().length < 2) e.name = "Escribe tu nombre";
      if (!/^\S+@\S+\.\S+$/.test(a.email.trim())) e.email = "Correo no válido";
    }
    if (s === 3 && !a.privacy) e.privacy = "Debes aceptar la política de privacidad";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const details = (): Record<string, string | string[]> => ({
    ERP_actual: a.erp,
    Usuarios: a.users,
    Empleados: a.employees,
    Servicios: a.services,
    Urgencia: a.urgency,
    Cargo: a.role,
  });

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate(step)) return;
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    const parsed = leadSchema.safeParse({
      source: "calificacion",
      name: a.name,
      email: a.email,
      phone: a.phone || undefined,
      company: a.company || undefined,
      area: a.area,
      message: a.message || undefined,
      privacy: a.privacy,
      details: details(),
    });
    if (!parsed.success) {
      setErrors({ privacy: "Revisa los datos de los pasos anteriores." });
      return;
    }
    void submit(parsed.data);
  };

  const summary = a.area
    ? `Nombre: ${a.name}\nEmpresa: ${a.company}\nÁrea: ${AREA_LABELS[a.area]}\nServicios: ${a.services.join(", ")}\nUrgencia: ${a.urgency}\n${a.message}`
    : "";
  const fieldErr = (k: string) => errors[k] && <p id={`q-${k}-err`} className="text-xs font-medium text-destructive">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
      <ol className="mb-8 flex items-center gap-2" aria-label="Progreso del formulario">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2" aria-current={i === step ? "step" : undefined}>
            <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors", i <= step ? "bg-brand text-white" : "bg-mist text-muted-foreground")}>
              {i < step ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
              <span className="sr-only"> {label}</span>
            </span>
            {i < 3 && <span className={cn("h-0.5 w-full transition-colors", i < step ? "bg-brand" : "bg-border")} />}
          </li>
        ))}
      </ol>
      <p className="text-xs font-semibold uppercase tracking-wide text-sky">Paso {step + 1} de 4 · {STEPS[step]}</p>

      {step === 0 && (
        <div className="mt-4">
          <Radio name="area" label="¿Qué área te interesa?" options={AREAS.map((x) => AREA_LABELS[x])} value={a.area ? AREA_LABELS[a.area] : ""} onChange={(v) => { const k = AREAS.find((x) => AREA_LABELS[x] === v)!; if (k !== a.area) setA((p) => ({ ...p, area: k, services: [] })); }} error={errors.area} />
        </div>
      )}

      {step === 1 && a.area && (
        <div className="mt-4 space-y-6">
          {isTech && <Radio name="erp" label="¿Ya usas un ERP?" options={["Sí, Odoo", "Sí, otro", "No", "Migrando"]} value={a.erp} onChange={(v) => set("erp", v)} error={errors.erp} />}
          {isTech && <Radio name="users" label="Usuarios que operarían el sistema" options={["1-2", "3-5", "6-10", "Más de 10"]} value={a.users} onChange={(v) => set("users", v)} />}
          {(a.area === "contabilidad" || a.area === "varias" || a.area === "erp") && <Radio name="employees" label="Cantidad de empleados" options={["0-10", "11-25", "26-100", "Más de 100"]} value={a.employees} onChange={(v) => set("employees", v)} error={errors.employees} />}
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-navy">Servicios de interés (opcional)</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {SERVICES[a.area].map((o) => (
                <label key={o} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-navy hover:border-sky/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/40">
                  <input type="checkbox" checked={a.services.includes(o)} onChange={(e) => set("services", e.target.checked ? [...a.services, o] : a.services.filter((s) => s !== o))} className="accent-[var(--brand)]" />
                  {o}
                </label>
              ))}
            </div>
          </fieldset>
          <Radio name="urgency" label="¿Cuándo te gustaría empezar?" options={["Inmediato", "1-3 meses", "Explorando"]} value={a.urgency} onChange={(v) => set("urgency", v)} error={errors.urgency} />
        </div>
      )}

      {step === 2 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {([
            ["name", "Nombre *", "text", "name"],
            ["email", "Correo electrónico *", "email", "email"],
            ["phone", "Teléfono o WhatsApp", "tel", "tel"],
            ["company", "Empresa", "text", "organization"],
            ["role", "Cargo", "text", "organization-title"],
          ] as const).map(([k, label, type, ac]) => (
            <div key={k} className="flex flex-col gap-2">
              <label htmlFor={`q-${k}`} className="text-sm font-medium text-navy">{label}</label>
              <input id={`q-${k}`} type={type} autoComplete={ac} value={a[k]} onChange={(e) => set(k, e.target.value)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `q-${k}-err` : undefined} className={input} />
              {fieldErr(k)}
            </div>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="mt-4">
          <label htmlFor="q-message" className="text-sm font-medium text-navy">Mensaje adicional (opcional)</label>
          <textarea id="q-message" rows={4} value={a.message} onChange={(e) => set("message", e.target.value)} className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy outline-none focus:border-sky focus-visible:ring-2 focus-visible:ring-ring/30" />
          <label htmlFor="q-privacy" className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-navy/85">
            <input id="q-privacy" type="checkbox" checked={a.privacy} onChange={(e) => set("privacy", e.target.checked)} aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "q-privacy-err" : undefined} className="mt-1 h-4 w-4 accent-[var(--brand)]" />
            <span>He leído la <Link to="/privacidad" className="font-semibold text-brand underline underline-offset-2">política de privacidad</Link> y acepto que Korventis use estos datos para responder mi solicitud.</span>
          </label>
          {fieldErr("privacy")}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <CtaButton type="button" variant="outline" size="md" onClick={() => { setErrors({}); setStep(step - 1); }}>
            <ArrowLeft className="h-4 w-4" /> Atrás
          </CtaButton>
        ) : <span />}
        <CtaButton type="submit" variant="primary" size="md" disabled={state === "sending"} aria-busy={state === "sending"}>
          {state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> : step === 3 ? "Enviar solicitud" : <>Continuar <ArrowRight className="h-4 w-4" /></>}
        </CtaButton>
      </div>

      <LeadError state={state} summary={summary} />
    </form>
  );
}
