// Pure estimation engine: structured input -> structured output. No UI, no I/O.
// Designed to be reusable later (e.g. by an AI consultant) without changes.
import { ESTIMATOR_CATALOG as C } from "./offer";

export type Currency = "DOP" | "USD";
export type Status = "calculado" | "desde" | "pendiente";
export type SetupChoice = "asistida" | "operativa" | "especializada" | "autogestion";

export type EstimateInput = {
  erp?: { enabled: boolean; plan: "auto" | "start" | "pyme" | "business"; users: number; pos: number; setup: SetupChoice; migration: "plantilla" | "historica" };
  accounting?: { enabled: boolean; purchases: number; sales: number; other: number; banks: number; complex: boolean };
  payroll?: { enabled: boolean; employees: number; mode: "software" | "managed"; setupNeeded: boolean };
  ecf?: { enabled: boolean; volume: number; includesAllTypes: boolean; provider: "direct" | "korventis"; enablement: "existing" | "pending" };
  extras?: { accountant: boolean; assistance: "none" | "h2" | "h4"; data: "none" | "metabase" | "powerbi" | "dbadiag" | "dba" };
  /** Authorized discounts only (never public/automatic). */
  discounts?: { code: string; percent: number; months: number }[];
};

export type Money = { amount: number; currency: Currency } | null;
export type EstimateLine = {
  code: string; service: string; scope: string; quantity: number;
  initial: Money; monthly: Money; variable?: Money;
  status: Status; paidToProvider?: boolean; reason: string;
};
export type EstimateOutput = {
  version: string;
  lines: EstimateLine[];
  totals: { initialDOP: number; initialUSD: number; monthlyDOP: number; variableDOP: number };
  hasPending: boolean;
  assumptions: string[];
  pending: string[];
  recommendation?: { plan: string; why: string };
};

const r2 = (n: number) => Math.round(n * 100) / 100;
const dop = (amount: number): Money => ({ amount: r2(amount), currency: "DOP" });
const usd = (amount: number): Money => ({ amount: r2(amount), currency: "USD" });
const n = (v: number) => (Number.isFinite(v) && v > 0 ? Math.floor(v) : 0);

export function erpCost(planId: string, users: number) {
  const p = C.erp.plans.find((x) => x.id === planId)!;
  const extra = Math.max(0, users - p.users);
  return { plan: p, extra, monthly: p.monthly + extra * C.erp.extraUser };
}

export function recommendErp(users: number, pos: number) {
  const valid = C.erp.plans.filter((p) => p.pos >= pos).map((p) => erpCost(p.id, Math.max(1, users)));
  if (!valid.length) return null;
  return valid.sort((a, b) => a.monthly - b.monthly)[0];
}

export function accountingPlan(docs: number, banks: number, complex: boolean) {
  if (complex) return null;
  return C.accounting.plans.find((p) => docs <= p.docs && Math.max(1, banks) <= p.banks) ?? null;
}

export function payrollTier(mode: "software" | "managed", employees: number) {
  return C.payroll[mode].find((t) => employees <= t.max) ?? null;
}

/** Next tabulated volume >= requested (conservative reference, no interpolation). */
export function ecfReference(volume: number) {
  if (volume <= 0) return { refVolume: 0, usd: 0 };
  const row = C.ecf.tableUsd.find(([v]) => volume <= v);
  return row ? { refVolume: row[0], usd: row[1] } : null;
}

export function estimate(input: EstimateInput): EstimateOutput {
  const lines: EstimateLine[] = [];
  const assumptions: string[] = ["Importes antes de impuestos aplicables."];
  const pending: string[] = [];
  let recommendation: EstimateOutput["recommendation"];

  // ERP
  const e = input.erp;
  if (e?.enabled) {
    const users = Math.max(1, n(e.users));
    const pos = n(e.pos);
    const rec = recommendErp(users, pos);
    if (rec) recommendation = { plan: rec.plan.name, why: `Es la alternativa válida de menor mensualidad para ${users} usuario(s) y ${pos} punto(s) de venta.` };
    const chosenId = e.plan === "auto" ? rec?.plan.id : e.plan;
    const chosen = chosenId ? erpCost(chosenId, users) : null;
    if (!chosen || chosen.plan.pos < pos) {
      lines.push({ code: "erp_dedicated", service: "Korventis ERP", scope: `${users} usuarios · ${pos} POS: supera los planes estándar`, quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Los puntos de venta requeridos exceden el plan; requiere propuesta (Dedicated o ajuste)." });
      pending.push("ERP con POS por encima del plan elegido");
    } else {
      lines.push({ code: chosen.plan.code, service: `Korventis ERP ${chosen.plan.name}`, scope: `${chosen.plan.users} usuarios incluidos${chosen.extra ? ` + ${chosen.extra} adicional(es) × RD$${C.erp.extraUser}` : ""} · ${chosen.plan.pos} POS disponible(s)`, quantity: 1, initial: null, monthly: dop(chosen.monthly), status: "calculado", reason: e.plan === "auto" ? "Recomendado automáticamente por usuarios y POS." : "Plan elegido por ti." });
      assumptions.push("Alojamiento compartido administrado incluido en el plan ERP.");
    }
    const s = C.erp.setup[e.setup];
    if (!s.available) {
      lines.push({ code: "setup_autogestion", service: s.name, scope: "No disponible por ahora", quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Opción pendiente de habilitación." });
      pending.push("Modalidad de puesta en marcha");
    } else {
      const from = "from" in s && s.from;
      lines.push({ code: `setup_${e.setup}`, service: `Puesta en marcha: ${s.name}`, scope: "Pago único; una sola modalidad", quantity: 1, initial: dop(s.amount), monthly: null, status: from ? "desde" : "calculado", reason: "Modalidad elegida por ti." });
    }
    if (e.migration === "historica") {
      lines.push({ code: "migration_hist", service: "Migración histórica", scope: "Datos de períodos anteriores", quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Se cotiza según volumen y calidad de datos." });
      pending.push("Migración histórica");
    }
  }

  // Accounting
  const a = input.accounting;
  if (a?.enabled) {
    const docs = n(a.purchases) + n(a.sales) + n(a.other);
    const banks = Math.max(1, n(a.banks));
    const p = accountingPlan(docs, banks, a.complex);
    if (p) {
      lines.push({ code: p.code, service: `Gestión contable ${p.name}`, scope: `${docs} documentos/mes (hasta ${p.docs}) · ${banks} cuenta(s) (hasta ${p.banks})`, quantity: 1, initial: null, monthly: dop(p.monthly), status: "calculado", reason: "Primer plan que cumple documentos y cuentas." });
      lines.push({ code: "acc_onboarding", service: "Incorporación contable inicial", scope: "Alcance estándar, pago único", quantity: 1, initial: dop(C.accounting.onboarding), monthly: null, status: "calculado", reason: "Organización inicial de la documentación corriente." });
    } else {
      lines.push({ code: "acc_custom", service: "Gestión contable a medida", scope: `${docs} documentos/mes · ${banks} cuenta(s)${a.complex ? " · operación especial" : ""}`, quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Supera los límites estándar o requiere evaluación particular." });
      pending.push("Gestión contable a medida");
    }
  }

  // Payroll
  const p = input.payroll;
  if (p?.enabled) {
    const emp = n(p.employees);
    if (emp === 0) assumptions.push("Sin empleados indicados: no se recomienda nómina.");
    else {
      const t = payrollTier(p.mode, emp);
      const label = p.mode === "software" ? "Nómina: tu equipo la procesa (software)" : "Nómina: Korventis la procesa (servicio)";
      if (t) lines.push({ code: `payroll_${p.mode}`, service: label, scope: `${emp} empleados únicos/mes (hasta ${t.max})`, quantity: emp, initial: null, monthly: dop(t.monthly), status: "calculado", reason: p.mode === "managed" ? "Incluye la plataforma interna; no se suma el software." : "Tu equipo opera el módulo." });
      else { lines.push({ code: `payroll_${p.mode}_custom`, service: label, scope: `${emp} empleados`, quantity: emp, initial: null, monthly: null, status: "pendiente", reason: "Más de 100 empleados: propuesta." }); pending.push("Nómina de más de 100 empleados"); }
      if (p.setupNeeded) lines.push({ code: "payroll_setup", service: "Configuración inicial de nómina", scope: "Referencia sujeta a alcance; no se cobra si ya la incluye tu implementación", quantity: 1, initial: dop(C.payroll.setupFrom), monthly: null, status: "desde", reason: "Indicaste que requieres configuración inicial." });
    }
  }

  // e-CF
  const f = input.ecf;
  if (f?.enabled) {
    const vol = n(f.volume);
    const ref = ecfReference(vol);
    const direct = f.provider === "direct";
    if (!C.ecf.providerRateConfirmed) {
      lines.push({ code: "ecf_usage", service: "Facturación electrónica (consumo)", scope: `${vol} comprobantes/mes${f.includesAllTypes ? "" : " (sin confirmar notas y otros tipos)"}`, quantity: vol, initial: null, monthly: null, status: "pendiente", paidToProvider: direct, reason: "Tarifa del proveedor pendiente de validación." });
      pending.push("Consumo e-CF (tarifa del proveedor en validación)");
    } else if (!ref) {
      lines.push({ code: "ecf_usage", service: "Facturación electrónica (consumo)", scope: `${vol} comprobantes/mes`, quantity: vol, initial: null, monthly: null, status: "pendiente", paidToProvider: direct, reason: "Más de un millón de comprobantes: propuesta particular." });
      pending.push("Consumo e-CF de alto volumen");
    } else {
      lines.push({ code: "ecf_usage", service: "Facturación electrónica (consumo)", scope: `${vol} comprobantes/mes · referencia ${ref.refVolume} (US$${ref.usd})`, quantity: vol, initial: null, monthly: null, variable: dop(ref.usd * C.ecf.commercialRate), status: "calculado", paidToProvider: direct, reason: `Tasa comercial utilizada: RD$${C.ecf.commercialRate}/US$1.` });
    }
    for (const [code, name] of [["ecf_fixed", "Cuota fija del proveedor"], ["ecf_cert", "Certificado digital y renovación"], ["ecf_followup", "Seguimiento e-CF"]] as const)
      lines.push({ code, service: name, scope: direct ? "Pagado directamente al proveedor" : "Mediante Korventis", quantity: 1, initial: null, monthly: null, status: "pendiente", paidToProvider: direct, reason: "Tarifa no confirmada." });
    if (f.enablement === "pending") lines.push({ code: "ecf_enable", service: "Habilitación e-CF", scope: "Pendiente de habilitación", quantity: 1, initial: null, monthly: null, status: "pendiente", paidToProvider: direct, reason: "Tarifa no confirmada." });
    pending.push("Conceptos fijos de e-CF");
  }

  // Extras
  const x = input.extras;
  if (x?.accountant) {
    if (C.accountant.available) lines.push({ code: "accountant", service: "Acceso y capacitación del contador", scope: "Una persona, hasta 3 h", quantity: 1, initial: dop(C.accountant.amount), monthly: null, status: "calculado", reason: "Opcional elegido." });
    else { lines.push({ code: "accountant", service: "Acceso y capacitación del contador", scope: "En validación", quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Disponible cuando los permisos estén validados." }); pending.push("Acceso del contador"); }
  }
  if (x && x.assistance !== "none") lines.push({ code: `assist_${x.assistance}`, service: `Bolsa de acompañamiento ${x.assistance === "h2" ? "2" : "4"} horas`, scope: "Válida 30 días", quantity: 1, initial: dop(C.assistance[x.assistance]), monthly: null, status: "calculado", reason: "Opcional elegido." });
  if (x && x.data !== "none") {
    if (x.data === "dba") lines.push({ code: "data_dba", service: "Consultoría DBA", scope: `US$${C.data.dbaHour}/hora según horas aprobadas`, quantity: 1, initial: null, monthly: null, status: "pendiente", reason: "Las horas se definen con el alcance." });
    else { const d = C.data[x.data]; lines.push({ code: `data_${x.data}`, service: d.name, scope: "Proyecto en US$; sin conversión", quantity: 1, initial: usd(d.usd), monthly: null, status: "desde", reason: "Opcional elegido." }); }
    if (x.data === "dba") pending.push("Horas de consultoría DBA");
  }

  // Authorized discounts (none public). Applied per line code to monthly amount.
  for (const d of input.discounts ?? []) {
    const l = lines.find((li) => li.code === d.code);
    if (l?.monthly && d.percent > 0 && d.percent <= 100) { l.monthly = dop(l.monthly.amount * (1 - d.percent / 100)); l.reason += ` Descuento autorizado ${d.percent}% por ${d.months} mes(es).`; }
  }

  const korv = lines.filter((l) => !l.paidToProvider);
  const sum = (sel: (l: EstimateLine) => Money, cur: Currency, ls = korv) => r2(ls.reduce((s, l) => { const m = sel(l); return m && m.currency === cur ? s + m.amount : s; }, 0));
  return {
    version: C.version,
    lines,
    totals: { initialDOP: sum((l) => l.initial, "DOP"), initialUSD: sum((l) => l.initial, "USD"), monthlyDOP: sum((l) => l.monthly, "DOP"), variableDOP: sum((l) => l.variable ?? null, "DOP") },
    hasPending: lines.some((l) => l.status !== "calculado"),
    assumptions,
    pending: [...new Set(pending)],
    recommendation,
  };
}

export const fmt = (m: Money) => {
  if (!m) return "—";
  const s = m.amount.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(m.amount) ? 0 : 2, maximumFractionDigits: 2 });
  return m.currency === "USD" ? `US$${s}` : `RD$${s}`;
};

export function estimateToText(o: EstimateOutput) {
  const st = { calculado: "Calculado", desde: "Referencia desde", pendiente: "Pendiente de propuesta" };
  const rows = o.lines.map((l) => `- ${l.service} (${l.scope}): inicial ${fmt(l.initial)} · mensual ${fmt(l.monthly)}${l.variable ? ` · consumo ${fmt(l.variable)}` : ""} · ${st[l.status]}${l.paidToProvider ? " · pago directo al proveedor" : ""}`);
  return [
    `Estimación Korventis (tarifas ${o.version})`,
    ...rows,
    `${o.hasPending ? "Subtotal calculado" : "Total"}: pago inicial ${fmt(dop(o.totals.initialDOP))}${o.totals.initialUSD ? ` + ${fmt(usd(o.totals.initialUSD))}` : ""} · mensualidad ${fmt(dop(o.totals.monthlyDOP))}${o.totals.variableDOP ? ` · consumo e-CF ${fmt(dop(o.totals.variableDOP))}` : ""}`,
    o.pending.length ? `Pendientes: ${o.pending.join("; ")}` : "",
    "Antes de impuestos. Estimación orientativa, no es cotización.",
  ].filter(Boolean).join("\n");
}
