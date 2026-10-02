import { z } from "zod";

export const AREAS = ["erp", "datos", "contabilidad", "infraestructura", "varias"] as const;

export const AREA_LABELS: Record<(typeof AREAS)[number], string> = {
  erp: "Korventis ERP",
  datos: "Datos y automatización",
  contabilidad: "Contabilidad y gestión",
  infraestructura: "Infraestructura y continuidad",
  varias: "Varias líneas / no estoy seguro",
};

export const leadSchema = z.object({
  source: z.enum(["contacto", "calificacion"]),
  name: z.string().trim().min(2, "Escribe tu nombre").max(100),
  email: z.string().trim().email("Correo no válido").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
  area: z.enum(AREAS, { message: "Selecciona un área" }),
  message: z.string().trim().max(2000).optional(),
  privacy: z.literal(true, { message: "Debes aceptar la política de privacidad" }),
  details: z
    .record(z.string().max(60), z.union([z.string().max(200), z.array(z.string().max(60)).max(12)]))
    .optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadResult = { ok: true } | { ok: false; reason: "not_configured" | "delivery_failed" };
