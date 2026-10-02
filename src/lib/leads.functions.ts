import { createServerFn } from "@tanstack/react-start";
import { leadSchema, type LeadResult } from "./leads.schema";

// Shared submission for both forms. Delivers through Web3Forms when a
// WEB3FORMS_ACCESS_KEY secret is configured; otherwise reports "not_configured"
// so the UI never shows a false success.
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }): Promise<LeadResult> => {
    if (data.website) return { ok: true }; // honeypot: silently drop bots

    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) return { ok: false, reason: "not_configured" };

    const lines = Object.entries(data.details ?? {})
      .filter(([, v]) => v && String(v).trim())
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nueva solicitud web (${data.source}) — ${data.name}`,
          from_name: "Sitio web Korventis",
          name: data.name,
          email: data.email,
          phone: data.phone ?? "",
          company: data.company ?? "",
          area: data.area,
          message: [data.message ?? "", "", ...lines].join("\n"),
        }),
      });
      const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !json?.success) return { ok: false, reason: "delivery_failed" };
      return { ok: true };
    } catch {
      return { ok: false, reason: "delivery_failed" };
    }
  });
