// Single source of truth for commercial data shown on Home, Precios, Contacto and FAQ.
// Prices are proposed launch prices in RD$, before applicable taxes, subject to scope confirmation.

export const CONTACT = {
  email: "contacto@korventis.net",
  phoneDisplay: "+1 (829) 686-2720",
  phoneTel: "+18296862720",
  whatsapp: "18296862720",
  address: "Carmen Renata 3, Pantoja, Santo Domingo 10701, República Dominicana",
  hours: "Lunes a viernes, 9:00 a. m. – 5:00 p. m.",
  responseCommitment:
    "Atendemos solicitudes de lunes a viernes. Nuestro objetivo es responder durante el siguiente día hábil.",
  siteUrl: "https://korventis.lovable.app",
} as const;

export const PRICE_NOTICE = "Importes antes de impuestos aplicables. Los precios “desde” requieren alcance confirmado.";

export type ErpPlan = {
  id: string;
  name: string;
  monthly: string;
  usersIncluded: number;
  pos: string;
  assistance: string;
};

export const ERP_PLANS: ErpPlan[] = [
  { id: "start", name: "Start", monthly: "RD$990", usersIncluded: 1, pos: "No incluido", assistance: "30 minutos/mes" },
  { id: "pyme", name: "Pyme", monthly: "RD$1,990", usersIncluded: 3, pos: "1 punto", assistance: "60 minutos/mes" },
  { id: "business", name: "Business", monthly: "RD$3,490", usersIncluded: 5, pos: "2 puntos", assistance: "90 minutos/mes" },
];

export const ERP_EXTRA_USER = "RD$350/mes";

export const ERP_DEDICATED = {
  name: "Dedicated",
  label: "Entorno exclusivo · propuesta a medida",
  text: "Dimensionamos ERP e infraestructura juntos antes de presentar un precio total, sin duplicar alojamiento.",
};

export const ERP_RULES = [
  "Cada plan cubre una empresa/RNC.",
  "Incluyen alojamiento compartido administrado, mantenimiento estándar, respaldos y monitoreo según contrato, sin cargos adicionales de nube.",
  "Ventas, compras, inventario y funciones contables según los módulos validados en el alcance.",
  "Nómina, e-CF, desarrollos y servicio profesional contable son adicionales.",
];

export const PRICING_INTRO =
  "Selecciona el servicio que necesitas y el acompañamiento que prefieres. Puedes contratar ERP, gestión contable o servicios de datos por separado. La puesta en marcha se paga una vez; las mensualidades y adicionales se detallan en tu propuesta.";

export const ERP_CARD_NOTE =
  "Tu equipo opera el sistema. La puesta en marcha se elige por separado. Nómina y e-CF son adicionales opcionales.";

export const PRICING_EXAMPLES: [string, string][] = [
  ["ERP Pyme con configuración asistida", "RD$1,990/mes + RD$5,000 de pago único."],
  ["Contabilidad Esencial", "RD$9,500/mes + RD$7,500 de incorporación inicial (pago único). No requiere contratar ERP."],
];
export const EXAMPLES_NOTE = "Antes de impuestos aplicables. Adicionales no incluidos.";

export type PriceRow = { name: string; price: string; scope: string; who?: string; available?: boolean };

export const SETUP_OPTIONS: PriceRow[] = [
  // Hidden until the owner confirms the self-service process works.
  { name: "Activación autogestionada", who: "El cliente", price: "Sin cargo inicial", scope: "Plantilla y guía; el cliente configura e importa.", available: false },
  { name: "Configuración asistida", who: "Korventis con el cliente", price: "RD$5,000", scope: "Hasta 4 horas, configuración básica, una importación por plantilla y orientación." },
  { name: "Implementación operativa", who: "Korventis", price: "RD$15,000", scope: "Hasta 12 horas, procesos estándar, importaciones acordadas y capacitación." },
  { name: "Implementación especializada", who: "Según proyecto", price: "Desde RD$30,000", scope: "Alcance y entregables definidos mediante propuesta." },
];

export const SETUP_NOTE =
  "Se elige una sola modalidad; no se suman entre sí. Migraciones históricas y personalizaciones adicionales se cotizan aparte.";

export const ERP_PAYROLL: [string, string][] = [
  ["1–10", "RD$990/mes"],
  ["11–40", "RD$1,990/mes"],
  ["41–100", "RD$3,490/mes"],
  ["Más de 100", "Propuesta a medida"],
];

export const ERP_PAYROLL_NOTE =
  "Software adicional: tu equipo procesa la nómina. Empleados únicos procesados al mes, sin cargo por empleado dentro del cupo. Los empleados procesados no son usuarios de acceso al ERP.";

export const PAYROLL_SETUP =
  "Configuración inicial desde RD$5,000, pago único, solo si no está incluida expresamente en la implementación o incorporación contratada.";

export const PAYROLL_CLARIFY =
  "Cuando Korventis utiliza su plataforma para prestar el servicio de nómina administrada, no añade otra mensualidad por ese módulo interno.";

export const ACCOUNTING_LEAD =
  "Korventis realiza la gestión contable contratada y entrega los reportes incluidos. No necesitas contratar un ERP adicional para recibir este servicio.";

export const DATA_INTRO =
  "Proyectos con entregables definidos y consultoría especializada. Precios expresados en dólares estadounidenses.";

export type AccountingPlan = { id: string; name: string; monthly: string; docs: string; banks: number; deliverables: string };

export const ACCOUNTING_PLANS: AccountingPlan[] = [
  { id: "esencial", name: "Esencial", monthly: "RD$9,500", docs: "Hasta 40", banks: 1, deliverables: "Resumen mensual de resultados y situación contable." },
  { id: "gestion", name: "Gestión", monthly: "RD$14,500", docs: "Hasta 70", banks: 2, deliverables: "Lo anterior, cuentas por cobrar y por pagar, y reunión mensual de hasta 30 minutos." },
  { id: "direccion", name: "Dirección", monthly: "RD$22,500", docs: "Hasta 150", banks: 3, deliverables: "Lo anterior, indicadores de ingresos, gastos y liquidez, y reunión mensual de hasta 60 minutos." },
];

export const ACCOUNTING_INCLUDES =
  "Registro contable, conciliaciones dentro del cupo, cierre mensual y preparación/presentación de las obligaciones mensuales aplicables acordadas en contrato. Cada plan cubre una empresa/RNC con operaciones corrientes y documentación completa.";

export const ACCOUNTING_ONBOARDING = { price: "RD$7,500", text: "Incorporación y organización inicial, pago único: documentación corriente y configuración estándar. No incluye reconstruir períodos anteriores." };

export const ACCOUNTING_NOTES = [
  "Documento: cada factura de venta, compra, gasto o nota de crédito registrada, contada una sola vez.",
  "Operaciones intensivas, importaciones, múltiples sucursales o registros complejos requieren propuesta particular, aunque no superen el cupo.",
  "Declaraciones anuales, auditorías, certificaciones, litigios, atrasos y regularización histórica se cotizan aparte.",
  "Si aumenta el volumen, revisamos el plan antes del siguiente período, sin cobros retroactivos.",
  "Incluye la plataforma que utiliza Korventis para prestar el servicio y entregar reportes. No requiere contratar un ERP ni da acceso operativo a ventas, inventario o POS.",
];

export const MANAGED_PAYROLL: [string, string][] = [
  ["1–10", "RD$2,500/mes"],
  ["11–40", "RD$4,500/mes"],
  ["41–100", "RD$7,500/mes"],
  ["Más de 100", "Propuesta a medida"],
];

export const MANAGED_PAYROLL_NOTES = [
  "Servicio profesional: un ciclo ordinario mensual, cálculo, recibos y archivos de obligaciones laborales acordados.",
  "No incluye salarios, aportes, prestaciones extraordinarias ni asesoría legal. Procesos adicionales se cotizan.",
];

export const ACCOUNTANT_ENABLEMENT = {
  title: "Habilitación y capacitación del contador",
  price: "RD$6,500",
  // Hidden as a purchasable option until permissions and functions are validated.
  available: false,
  summary: "RD$6,500, pago único y opcional: configuración de permisos para una persona y hasta tres horas de capacitación remota.",
  points: [
    "Una cuenta adicional cuesta RD$350/mes. Si existe un usuario incluido disponible en el ERP contratado, no se añade este cargo.",
    "La iguala contable por sí sola no incluye una cuenta de acceso. Los reportes y exportaciones incluidos se entregan sin cargo adicional.",
    "No se duplica capacitación ya incluida expresamente en otra implementación.",
    "Pago único: permisos para una persona y hasta tres horas de capacitación remota en las funciones contables habilitadas.",
    "No sustituye el servicio contable: se define quién registra, revisa y presenta cada obligación.",
    "Disponible cuando los permisos y funciones estén validados.",
  ],
};

export const DATA_SERVICES: PriceRow[] = [
  { name: "Implementación de analítica con Metabase", price: "Desde US$600/proyecto", scope: "Una fuente preparada y tres visualizaciones simples." },
  { name: "Alojamiento y mantenimiento de Metabase (opcional)", price: "Desde US$50/mes", scope: "Mensualidad opcional, no se añade automáticamente. Operación estándar según recursos y alcance; sin nuevos desarrollos." },
  { name: "Tablero gerencial Power BI", price: "Desde US$900/proyecto", scope: "Una fuente preparada, un tablero de hasta dos páginas y cinco indicadores acordados." },
  { name: "Consultoría DBA especializada", price: "US$125/hora", scope: "Oracle, SQL Server y PostgreSQL." },
  { name: "Diagnóstico técnico de bases de datos", price: "Desde US$400 · pago único", scope: "Una instancia, revisión delimitada e informe priorizado; sin ejecución de correcciones." },
  { name: "Desarrollo SQL e integraciones de datos", price: "Desde US$125/hora", scope: "Estimación y entregables aprobados." },
  { name: "Migración de bases de datos", price: "Propuesta a medida", scope: "Evaluación, pruebas, validación y plan de reversión según proyecto." },
];

export const DATA_NOTES = [
  "Los proyectos iniciales de analítica no incluyen limpieza extensa, fuentes adicionales, ETL complejo ni licencias.",
  "DBA: mínimo facturable de una hora; después, bloques de 30 minutos.",
  "Intervenciones en producción requieren alcance, ventana y autorización. Sin atención 24/7 ni recuperación garantizada.",
  "Licencias, infraestructura y costos externos se identifican aparte.",
];

export const ASSISTANCE: [string, string][] = [
  ["Asistencia funcional o formación adicional", "RD$1,500/hora"],
  ["Bolsa de dos horas", "RD$2,500"],
  ["Bolsa de cuatro horas", "RD$5,000"],
];

export const ASSISTANCE_NOTES = [
  "Bolsas válidas por 30 días, sin acumulación; renovación según acuerdo.",
  "No incluyen desarrollo, DBA ni contabilidad profesional.",
  "La corrección de fallos atribuibles al servicio de Korventis no consume horas.",
];

export const DIAGNOSES: PriceRow[] = [
  { name: "Conversación inicial", price: "Gratuita", scope: "Hasta 20 minutos." },
  { name: "Diagnóstico focalizado", price: "US$100", scope: "Hasta 90 minutos." },
  { name: "Diagnóstico empresarial", price: "US$300", scope: "Hasta cuatro horas." },
];

export const ECF = {
  summary:
    "La propuesta detalla habilitación, cuota del proveedor, comprobantes incluidos, período de consumo, tarifa por excedente y certificado digital. Los costos pagados directamente al proveedor no se vuelven a cobrar por Korventis.",
};

export const FISCAL_SCOPE =
  "Funciones fiscales y de nómina según módulos disponibles, validación y alcance contratado.";

export const LINES = [
  {
    id: "erp",
    letter: "A",
    title: "Korventis ERP",
    text: "Odoo como solución estandarizada para operar ventas, compras, inventario y otras funciones según el alcance acordado.",
    points: ["Planes mensuales con alojamiento incluido", "Puesta en marcha con alcance documentado", "Nómina como adicional opcional de software"],
  },
  {
    id: "datos",
    letter: "B",
    title: "Datos y automatización",
    text: "Bases de datos, Business Intelligence, reportes e integraciones para que la gerencia decida con información confiable.",
    points: ["Oracle, SQL Server y PostgreSQL", "Power BI, Metabase y Oracle Analytics", "Integraciones y automatización de procesos"],
  },
  {
    id: "contabilidad",
    letter: "C",
    title: "Contabilidad y gestión",
    text: "Servicios profesionales contables y administrativos, incluida la gestión profesional de nómina como servicio distinto del software.",
    points: ["Contabilidad e igualas", "Obligaciones fiscales ante la DGII", "Gestión profesional de nómina"],
  },
  {
    id: "infraestructura",
    letter: "D",
    title: "Infraestructura y continuidad",
    text: "Servicios administrados según los recursos y el esquema de recuperación contratados. No ofrecemos soporte técnico general ilimitado.",
    points: ["Servidores y virtualización", "Respaldos según contrato", "Documentación de recuperación cuando se contrate"],
  },
] as const;

export const METHOD = [
  ["Conversación inicial", "Conocemos tu operación y determinamos el servicio adecuado."],
  ["Alcance y propuesta", "Documentamos qué se hará, qué no, plazos e inversión."],
  ["Configuración y migración acordada", "Preparamos el sistema e importamos los datos con plantillas acordadas."],
  ["Validación y capacitación", "Revisamos los datos contigo y capacitamos a los usuarios."],
  ["Puesta en marcha y aceptación", "Arrancamos la operación y firmamos el acta de aceptación."],
  ["Acompañamiento contratado", "Continuamos según el servicio y las condiciones del contrato."],
] as const;

export const DELIVERABLES = [
  "Alcance documentado",
  "Validación de datos",
  "Capacitación",
  "Manual breve",
  "Matriz de accesos y responsabilidades",
  "Acta de aceptación",
  "Documentación de respaldo y recuperación, cuando forme parte del contrato",
];

export const CONVERSATION_VS_DIAGNOSIS = {
  conversation: {
    title: "Conversación inicial",
    price: "Gratuita · hasta 20 minutos",
    points: ["Conocemos tus necesidades", "Identificamos el servicio adecuado", "Te explicamos los siguientes pasos"],
  },
  diagnosis: {
    title: "Diagnóstico profesional",
    price: "Desde US$100",
    points: ["Análisis de procesos, datos o sistemas", "Informe escrito con hallazgos", "Recomendaciones y hoja de ruta"],
  },
};

export const FAQS: [string, string][] = [
  [
    "¿Cuánto cuesta Korventis ERP?",
    "Los planes van desde RD$990 al mes (plan Start, 1 usuario) con alojamiento administrado incluido. La puesta en marcha es un pago único según la modalidad elegida. Importes antes de impuestos aplicables.",
  ],
  [
    "¿La conversación inicial tiene costo?",
    "No. La conversación inicial sirve para conocer tus necesidades y determinar el servicio adecuado. Dura hasta 20 minutos. Los diagnósticos tienen costo: focalizado US$100 y empresarial US$300.",
  ],
  [
    "¿Incluyen facturación electrónica (e-CF)?",
    "La facturación electrónica se realiza mediante integración con un proveedor externo y se cotiza por separado, salvo que la propuesta la incluya expresamente. La propuesta detalla habilitación, cuota, excedentes y certificado.",
  ],
  [
    "¿El software de nómina incluye la gestión de la nómina?",
    "No. El módulo de nómina es un adicional de software. La gestión profesional de nómina es un servicio contable distinto que se cotiza aparte.",
  ],
  [
    "¿Puedo contratar solo contabilidad o solo tecnología?",
    "Sí. Cada línea de servicio puede contratarse por separado o combinarse según lo que tu empresa necesite.",
  ],
];

// ---------------------------------------------------------------------------
// Estimator catalog (numeric mirror of the public prices above). Bump the
// version whenever any amount changes. Only authorized sale prices live here.
// ---------------------------------------------------------------------------
export const ESTIMATOR_CATALOG = {
  version: "2026-10-v1",
  erp: {
    plans: [
      { code: "erp_start", id: "start", name: "Start", monthly: 990, users: 1, pos: 0 },
      { code: "erp_pyme", id: "pyme", name: "Pyme", monthly: 1990, users: 3, pos: 1 },
      { code: "erp_business", id: "business", name: "Business", monthly: 3490, users: 5, pos: 2 },
    ],
    extraUser: 350,
    setup: {
      autogestion: { name: "Activación autogestionada", amount: 0, available: false },
      asistida: { name: "Configuración asistida", amount: 5000, available: true },
      operativa: { name: "Implementación operativa", amount: 15000, available: true },
      especializada: { name: "Implementación especializada", amount: 30000, available: true, from: true },
    },
  },
  accounting: {
    plans: [
      { code: "acc_esencial", name: "Esencial", monthly: 9500, docs: 40, banks: 1 },
      { code: "acc_gestion", name: "Gestión", monthly: 14500, docs: 70, banks: 2 },
      { code: "acc_direccion", name: "Dirección", monthly: 22500, docs: 150, banks: 3 },
    ],
    onboarding: 7500,
  },
  payroll: {
    software: [ { max: 10, monthly: 990 }, { max: 40, monthly: 1990 }, { max: 100, monthly: 3490 } ],
    managed: [ { max: 10, monthly: 2500 }, { max: 40, monthly: 4500 }, { max: 100, monthly: 7500 } ],
    setupFrom: 5000,
  },
  ecf: {
    // Commercial projection, NOT a confirmed provider contract. Keep false until validated.
    providerRateConfirmed: false,
    // Owner-only commercial rate; never editable by visitors.
    commercialRate: 75,
    tableUsd: [
      [300, 2.76], [500, 4.85], [700, 6.02], [950, 8.365], [1200, 10.44], [2000, 15.6],
      [2500, 19.25], [3500, 26.6], [7000, 41.3], [12000, 63.6], [30000, 147], [50000, 250],
      [100000, 400], [200000, 600], [500000, 1350], [1000000, 2500],
    ] as [number, number][],
  },
  accountant: { amount: 6500, available: ACCOUNTANT_ENABLEMENT.available },
  assistance: { h2: 2500, h4: 5000 },
  data: {
    metabase: { name: "Implementación de analítica con Metabase", usd: 600 },
    powerbi: { name: "Tablero gerencial Power BI", usd: 900 },
    dbadiag: { name: "Diagnóstico técnico de bases de datos", usd: 400 },
    dbaHour: 125,
  },
} as const;
