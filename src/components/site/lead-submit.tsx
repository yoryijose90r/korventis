import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AlertTriangle, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import { AREA_LABELS, type LeadInput } from "@/lib/leads.schema";
import { CONTACT } from "@/lib/offer";

// Web3Forms access keys are public by design (they only route submissions to the
// owner's inbox); the free plan requires browser-side submission.
const WEB3FORMS_ACCESS_KEY = "1d102d18-9638-4ebf-9a93-63ed5270ea29";

export type SubmitState = "idle" | "sending" | "sent" | "not_configured" | "error";

/** Shared submission mechanism for every lead form. Guards against duplicate sends. */
export function useLeadSubmit() {
  const validate = useServerFn(submitLead);
  const [state, setState] = useState<SubmitState>("idle");
  const inFlight = useRef(false);

  const submit = async (payload: LeadInput) => {
    if (inFlight.current || state === "sent") return;
    inFlight.current = true;
    setState("sending");
    try {
      const { lead, bot } = await validate({ data: payload });
      if (bot) {
        setState("sent");
        return;
      }
      const lines = Object.entries(lead.details ?? {})
        .filter(([, v]) => (Array.isArray(v) ? v.length : String(v).trim()))
        .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`);
      const fields: Record<string, string> = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nueva solicitud web (${lead.source}) — ${lead.name}`,
        from_name: "Sitio web Korventis",
        name: lead.name,
        email: lead.email,
        phone: lead.phone ?? "",
        company: lead.company ?? "",
        area: AREA_LABELS[lead.area],
        message: [lead.message ?? "", "", ...lines].join("\n"),
      };
      const form = new FormData();
      for (const [k, v] of Object.entries(fields)) form.append(k, v);
      // FormData keeps this a "simple" CORS request (no preflight).
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
      setState(res.ok && json?.success === true ? "sent" : "error");
    } catch {
      setState("error");
    } finally {
      inFlight.current = false;
    }
  };

  return { state, submit, reset: () => setState("idle") };
}

export function LeadSuccess() {
  return (
    <div role="status" className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 text-center shadow-card">
      <CheckCircle2 className="h-14 w-14 text-sky" aria-hidden="true" />
      <h3 className="mt-5 font-heading text-2xl font-bold text-navy">Solicitud recibida</h3>
      <p className="mt-3 max-w-md text-muted-foreground">{CONTACT.responseCommitment}</p>
    </div>
  );
}

function fallbackText(summary: string) {
  return `Hola Korventis, quisiera agendar una conversación inicial.\n\n${summary}`;
}

/** Visible alternative channels. Opening another app is not the same as receiving the request. */
export function ContactFallback({ summary, tone = "light" }: { summary?: string; tone?: "light" | "dark" }) {
  const body = fallbackText(summary ?? "");
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Conversación inicial — sitio web")}&body=${encodeURIComponent(body)}`;
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`;
  const btn =
    tone === "dark"
      ? "border-white/25 text-white hover:bg-white/10"
      : "border-border bg-white text-navy hover:border-sky hover:text-sky";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={mail} className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors ${btn}`}>
        <Mail className="h-4 w-4" aria-hidden="true" /> Abrir correo
      </a>
      <a href={wa} target="_blank" rel="noopener noreferrer" className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors ${btn}`}>
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Continuar en WhatsApp
      </a>
    </div>
  );
}

export function LeadError({ state, summary }: { state: SubmitState; summary: string }) {
  if (state !== "not_configured" && state !== "error") return null;
  return (
    <div role="alert" className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
      <p className="flex items-start gap-2 text-sm font-semibold text-navy">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
        {state === "not_configured"
          ? "El envío en línea aún no está habilitado, por lo que tu solicitud no se ha enviado."
          : "No pudimos enviar tu solicitud. Tus datos siguen en el formulario; inténtalo de nuevo."}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        También puedes escribirnos directamente. Se abrirá tu aplicación con el mensaje preparado para que lo revises y lo envíes tú.
      </p>
      <div className="mt-4">
        <ContactFallback summary={summary} />
      </div>
    </div>
  );
}
