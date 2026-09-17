import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { CtaButton } from "./cta-button";
import { cn } from "@/lib/utils";

type Area = "tecnologia" | "contabilidad" | "ambas";

const areaOptions: { value: Area; title: string; description: string }[] = [
  {
    value: "tecnologia",
    title: "Tecnología Empresarial",
    description: "Odoo, datos, BI, automatización e infraestructura",
  },
  {
    value: "contabilidad",
    title: "Contabilidad y Fiscal",
    description: "Igualas, nómina, DGII, costos e impuestos",
  },
  {
    value: "ambas",
    title: "Ambas prácticas",
    description: "Una solución integral para toda la operación",
  },
];

const techServices = ["Odoo", "Bases de datos", "BI", "Automatización", "Infraestructura"];
const accountingServices = ["Iguala contable", "Nómina", "DGII", "e-CF", "Planeación fiscal", "Costos"];

function ChoiceGroup({
  label,
  name,
  options,
  required = true,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-navy">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-navy transition-colors hover:border-sky">
            <input required={required} type="radio" name={name} value={option} className="accent-sky" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ServiceChecks({ options, prefix }: { options: string[]; prefix: string }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-navy">Servicios de interés</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-navy transition-colors hover:border-sky">
            <input type="checkbox" name={`${prefix}-${option}`} className="accent-sky" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function QualificationForm() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState<Area | null>(null);
  const [sent, setSent] = useState(false);

  const next = () => setStep((current) => Math.min(4, current + 1));
  const back = () => setStep((current) => Math.max(1, current - 1));
  const inputClass = "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-sky";

  if (sent) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center rounded-3xl border border-border bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="h-16 w-16 text-sky" />
        <h3 className="mt-5 font-heading text-2xl font-bold text-navy">Gracias por confiar en Korventis.</h3>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Hemos recibido tu solicitud y te contactaremos en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (step < 4) next();
        else setSent(true);
      }}
      className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="mb-8 flex items-center gap-2" aria-label={`Paso ${step} de 4`}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-1 items-center gap-2">
            <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold", item <= step ? "bg-sky text-white" : "bg-mist text-muted-foreground")}>
              {item < step ? <Check className="h-4 w-4" /> : item}
            </span>
            {item < 4 && <span className={cn("h-0.5 w-full", item < step ? "bg-sky" : "bg-border")} />}
          </div>
        ))}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-sky">Paso {step} de 4</p>

      {step === 1 && (
        <div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-navy">¿Qué área te interesa?</h3>
          <div className="mt-6 grid gap-3">
            {areaOptions.map((option) => (
              <label key={option.value} className={cn("cursor-pointer rounded-2xl border p-5 transition-all", area === option.value ? "border-sky bg-sky/5 shadow-card" : "border-border bg-white hover:border-sky/50")}>
                <input className="sr-only" type="radio" name="area" value={option.value} required checked={area === option.value} onChange={() => setArea(option.value)} />
                <span className="font-heading font-semibold text-navy">{option.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{option.description}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 2 && area && (
        <div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-navy">Contexto del proyecto</h3>
          <div className="mt-6 space-y-6">
            {(area === "tecnologia" || area === "ambas") && (
              <div className="space-y-5 border-b border-border pb-6">
                {area === "ambas" && <h4 className="font-heading font-semibold text-brand">Tecnología Empresarial</h4>}
                <ChoiceGroup label="¿Ya usas un ERP?" name="erp" options={["Sí, Odoo", "Sí, otro", "No", "Migrando"]} />
                <ChoiceGroup label="Cantidad estimada de usuarios" name="usuarios" options={["1-5", "6-15", "16-50", "50+"]} />
                <ServiceChecks options={techServices} prefix="tech" />
                <ChoiceGroup label="¿Necesitas cumplimiento DGII / e-CF?" name="dgii" options={["Sí", "No", "No sé"]} />
              </div>
            )}
            {(area === "contabilidad" || area === "ambas") && (
              <div className="space-y-5">
                {area === "ambas" && <h4 className="font-heading font-semibold text-brand">Contabilidad y Fiscal RD</h4>}
                <ChoiceGroup label="Tipo de empresa" name="empresa-tipo" options={["Persona física", "SRL", "EIRL", "SA", "Otra"]} />
                <ChoiceGroup label="Cantidad de empleados" name="empleados" options={["0", "1-5", "6-20", "21-50", "50+"]} />
                <ServiceChecks options={accountingServices} prefix="accounting" />
                <ChoiceGroup label="¿Actualmente tienes contador interno?" name="contador" options={["Sí", "No", "Mixto"]} />
              </div>
            )}
            <ChoiceGroup label="Urgencia" name="urgencia" options={["Inmediato", "1-3 meses", "Explorando"]} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-navy">Datos de contacto</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required name="nombre" aria-label="Nombre completo" placeholder="Nombre completo" className={inputClass} />
            <input required name="empresa" aria-label="Empresa" placeholder="Empresa" className={inputClass} />
            <input name="rnc" aria-label="RNC opcional" placeholder="RNC (opcional)" className={inputClass} />
            <input required type="email" name="email" aria-label="Email corporativo" placeholder="Email corporativo" className={inputClass} />
            <input required type="tel" name="telefono" aria-label="Teléfono o WhatsApp" placeholder="Teléfono / WhatsApp" className={inputClass} />
            <input required name="cargo" aria-label="Cargo" placeholder="Cargo" className={inputClass} />
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-navy">Mensaje y confirmación</h3>
          <textarea name="mensaje" rows={5} aria-label="Mensaje adicional" placeholder="Mensaje adicional (opcional)" className="mt-6 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-sky" />
          <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-navy/80">
            <input required type="checkbox" name="privacidad" className="mt-1 accent-sky" />
            Acepto la política de privacidad.
          </label>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <CtaButton type="button" variant="outline" size="md" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Atrás
          </CtaButton>
        ) : <span />}
        <CtaButton type="submit" variant="primary" size="md" disabled={step === 1 && !area}>
          {step === 4 ? "Enviar solicitud" : "Continuar"} <ArrowRight className="h-4 w-4" />
        </CtaButton>
      </div>
    </form>
  );
}