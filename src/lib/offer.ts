// Single source of truth for commercial data shown on Home, Planes, Contacto and FAQ.
// Prices are proposed launch prices in RD$, before applicable taxes, subject to scope confirmation.

export const CONTACT = {
  email: "contacto@korventis.net",
  emailSecondary: "info@korventis.net",
  phoneDisplay: "+1 (829) 686-2720",
  phoneTel: "+18296862720",
  whatsapp: "18296862720",
  address: "Carmen Renata 3, Pantoja, Santo Domingo 10701, República Dominicana",
  hours: "Lunes a viernes, 9:00 a. m. – 5:00 p. m.",
  responseCommitment:
    "Atendemos solicitudes de lunes a viernes. Nuestro objetivo es responder durante el siguiente día hábil.",
  siteUrl: "https://korventis.lovable.app",
} as const;

export const PRICE_NOTICE =
  "Precios de lanzamiento propuestos, sujetos a confirmación de alcance. Importes en RD$, antes de impuestos aplicables.";

export type ErpPlan = {
  id: string;
  name: string;
  monthly: string;
  monthlyFrom: boolean;
  usersIncluded: number;
  extraUser: string;
  hosting: string;
  implementation: string;
  idealFor: string;
};

export const ERP_PLANS: ErpPlan[] = [
  {
    id: "start",
    name: "Start",
    monthly: "RD$3,500",
    monthlyFrom: false,
    usersIncluded: 2,
    extraUser: "RD$750/mes",
    hosting: "Alojamiento compartido incluido",
    implementation: "Desde RD$25,000",
    idealFor: "Negocios que inician su operación en un ERP.",
  },
  {
    id: "pyme",
    name: "Pyme",
    monthly: "RD$6,500",
    monthlyFrom: false,
    usersIncluded: 5,
    extraUser: "RD$700/mes",
    hosting: "Alojamiento compartido incluido",
    implementation: "Desde RD$45,000",
    idealFor: "Pymes con ventas, compras e inventario en marcha.",
  },
  {
    id: "business",
    name: "Business",
    monthly: "RD$12,500",
    monthlyFrom: false,
    usersIncluded: 10,
    extraUser: "RD$650/mes",
    hosting: "Alojamiento administrado con recursos definidos en la propuesta",
    implementation: "Desde RD$75,000",
    idealFor: "Empresas con varios departamentos y mayor volumen.",
  },
  {
    id: "dedicated",
    name: "Dedicated",
    monthly: "RD$18,000",
    monthlyFrom: true,
    usersIncluded: 10,
    extraUser: "RD$650/mes",
    hosting: "VPS exclusivo dimensionado en la propuesta",
    implementation: "Desde RD$100,000",
    idealFor: "Operaciones que requieren un entorno exclusivo.",
  },
];

export const ERP_RULES = [
  "Cada plan cubre un RNC o empresa base.",
  "El alojamiento ya está incluido en la mensualidad; no se suma un cargo adicional de nube.",
  "La implementación comprende configuración, importación mediante plantillas acordadas, capacitación y puesta en marcha.",
  "Migraciones complejas, personalizaciones, equipos, visitas e integraciones se cotizan aparte.",
  "Mantenimiento, respaldos y soporte según lo establecido en el contrato.",
];

export const PAYROLL = {
  base: "Desde RD$1,000/mes",
  baseDetail: "Incluye el módulo y hasta 10 empleados únicos procesados.",
  tier: "De 11 a 100 empleados: RD$100 por empleado procesado al mes, en total.",
  above: "Más de 100 empleados: cotización.",
  setup: "Configuración inicial estándar: desde RD$8,000.",
  examples: [
    ["10 empleados", "RD$1,000/mes"],
    ["15 empleados", "RD$1,500/mes"],
    ["25 empleados", "RD$2,500/mes"],
  ] as [string, string][],
  notes: [
    "El mínimo forma parte del precio: no se suma RD$1,000 más RD$100 por empleado.",
    "Un empleado se cuenta una vez aunque tenga varios procesamientos en el mes.",
    "Recibir un recibo no convierte al empleado en usuario del ERP; quien opera la nómina necesita un usuario de acceso.",
    "No incluye salarios, impuestos, aportes patronales ni la gestión contable de la nómina.",
    "Funciones sujetas a validación y al alcance del módulo.",
  ],
};

export const ECF = {
  summary:
    "Facturación electrónica mediante integración con proveedor externo. La propuesta identifica habilitación, cuota incluida, excedentes, certificado y responsabilidades.",
  notes: [
    "El servicio e-CF se cotiza por separado, salvo inclusión expresa en la propuesta.",
    "El certificado digital y su renovación se identifican aparte.",
    "El conteo de emisiones, reintentos y excedentes depende del contrato con el proveedor.",
    "Las tarifas del servicio corresponden a Korventis o al proveedor, no a la DGII.",
  ],
};

export const FISCAL_SCOPE =
  "Funciones fiscales y de nómina según módulos disponibles, validación y alcance contratado.";

export const LINES = [
  {
    id: "erp",
    letter: "A",
    title: "Korventis ERP",
    text: "Odoo como solución estandarizada para operar ventas, compras, inventario y otras funciones según el alcance acordado.",
    points: ["Planes mensuales con alojamiento incluido", "Implementación con alcance documentado", "Nómina como adicional opcional de software"],
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
    price: "Sin costo",
    points: ["Conocemos tus necesidades", "Identificamos el servicio adecuado", "Te explicamos los siguientes pasos"],
  },
  diagnosis: {
    title: "Diagnóstico profesional",
    price: "Se cotiza según alcance",
    points: ["Análisis de procesos, datos o sistemas", "Informe escrito con hallazgos", "Recomendaciones y hoja de ruta"],
  },
};

export const FAQS: [string, string][] = [
  [
    "¿Cuánto cuesta Korventis ERP?",
    "Los planes de lanzamiento propuestos van desde RD$3,500 al mes (plan Start, 2 usuarios) con alojamiento incluido. La implementación se paga aparte, desde RD$25,000. Todos los importes están sujetos a confirmación de alcance y antes de impuestos.",
  ],
  [
    "¿La conversación inicial tiene costo?",
    "No. La conversación inicial sirve para conocer tus necesidades y determinar el servicio adecuado. El diagnóstico profesional, con informe y recomendaciones, se cotiza por separado.",
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
