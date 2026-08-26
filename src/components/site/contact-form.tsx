import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CtaButton } from "./cta-button";

const services = [
  "Infraestructura & Cloud",
  "Business Intelligence",
  "Bases de Datos",
  "Automatización",
  "Agentes con IA (secretaria / asistente virtual)",
  "Consultoría Contable",
  "Otro",
];

export function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";

  const fieldBase = dark
    ? "border-white/15 bg-white/5 text-white placeholder:text-silver/50 focus:border-sky"
    : "border-border bg-white text-navy placeholder:text-muted-foreground focus:border-sky";
  const labelBase = dark ? "text-silver/80" : "text-navy/80";

  if (sent) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 rounded-3xl border p-10 text-center ${
          dark ? "border-white/15 bg-white/5 text-white" : "border-border bg-secondary text-navy"
        }`}
      >
        <CheckCircle2 className="h-14 w-14 text-sky" />
        <h3 className="font-heading text-2xl font-bold">¡Gracias por contactarnos!</h3>
        <p className={dark ? "text-silver/80" : "text-muted-foreground"}>
          Hemos recibido tu solicitud. Un consultor de Korventis se pondrá en contacto contigo en
          las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-3xl border p-6 sm:p-8 ${
        dark ? "border-white/12 bg-white/5 backdrop-blur" : "border-border bg-white shadow-card"
      }`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={`text-sm font-medium ${labelBase}`}>Nombre completo</label>
          <input
            required
            placeholder="Tu nombre"
            className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors ${fieldBase}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-sm font-medium ${labelBase}`}>Empresa</label>
          <input
            placeholder="Nombre de tu empresa"
            className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors ${fieldBase}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-sm font-medium ${labelBase}`}>Correo electrónico</label>
          <input
            required
            type="email"
            placeholder="tu@empresa.com"
            className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors ${fieldBase}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-sm font-medium ${labelBase}`}>Teléfono</label>
          <input
            placeholder="+1 (809) 000-0000"
            className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors ${fieldBase}`}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={`text-sm font-medium ${labelBase}`}>Servicio de interés</label>
        <select
          className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors ${fieldBase}`}
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="text-navy">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={`text-sm font-medium ${labelBase}`}>¿Cómo podemos ayudarte?</label>
        <textarea
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto o el reto que quieres resolver..."
          className={`rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${fieldBase}`}
        />
      </div>

      <CtaButton type="submit" variant="primary" size="lg" className="mt-6 w-full">
        Solicitar Diagnóstico <Send className="h-4 w-4" />
      </CtaButton>
      <p className={`mt-3 text-center text-xs ${dark ? "text-silver/60" : "text-muted-foreground"}`}>
        Respuesta garantizada en menos de 24 horas hábiles.
      </p>
    </form>
  );
}
