import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Bot, BriefcaseBusiness, Building2, Check, ChevronDown, Database, FileCheck2, Handshake, Landmark, Network, ReceiptText, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { CtaLink } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow, SectionHeading, Container } from "@/components/site/primitives";
import { QualificationForm } from "@/components/site/qualification-form";
import heroImg from "@/assets/hero-tech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Korventis | Tecnología Empresarial y Contabilidad Fiscal en RD" },
      {
        name: "description",
        content:
          "Firma de consultoría que integra implementación de Odoo 18 RD, bases de datos, automatización, contabilidad, igualas y cumplimiento DGII para empresas dominicanas.",
      },
      { property: "og:title", content: "Korventis | Tecnología Empresarial y Contabilidad Fiscal en RD" },
      {
        property: "og:description",
        content:
          "Tecnología empresarial y cumplimiento contable-fiscal en una sola firma especializada para empresas de República Dominicana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyKorventis = [
  {
    icon: Handshake,
    title: "Aliado Estratégico",
    desc: "Integramos visión tecnológica y contable para resolver la operación completa, no problemas aislados.",
  },
  {
    icon: Building2,
    title: "Enfoque Empresarial",
    desc: "Hablamos el idioma de la gerencia: eficiencia, cumplimiento, control y crecimiento sostenible.",
  },
  {
    icon: TrendingUp,
    title: "Rigor y Cumplimiento",
    desc: "Combinamos datos confiables, disciplina técnica y conocimiento de la normativa dominicana.",
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    desc: "Cada colaboración busca mejoras concretas: más control, menos errores y una operación preparada para crecer.",
  },
];

const stats = [
  { value: "+40%", label: "Eficiencia en procesos" },
  { value: "-30%", label: "Tareas manuales" },
  { value: "360°", label: "Visibilidad del negocio" },
  { value: "100%", label: "Acompañamiento" },
];

const practices = [
  {
    id: "tecnologia",
    icon: Database,
    eyebrow: "Práctica 01",
    title: "Tecnología Empresarial",
    description: "Modernizamos el núcleo digital de tu operación para que la información fluya, los procesos escalen y el negocio mantenga continuidad.",
    items: ["Odoo 18 RD", "Bases de datos y BI", "Automatización", "Infraestructura"],
    cta: "Explorar práctica de tecnología",
  },
  {
    id: "contabilidad",
    icon: ReceiptText,
    eyebrow: "Práctica 02",
    title: "Contabilidad y Fiscal RD",
    description: "Mantenemos tu gestión financiera organizada y en cumplimiento, con información confiable para decidir y crecer.",
    items: ["Contabilidad e igualas", "Nómina y TSS", "Cumplimiento DGII", "Costos, impuestos y planeación fiscal"],
    cta: "Explorar práctica contable",
  },
];

const modalities = [
  {
    title: "Tecnología Empresarial",
    subtitle: "Odoo 18 RD, datos, automatización e infraestructura",
    icon: Database,
    offers: [
      ["Proyecto de Implementación", "Implementación Odoo, migración, integración y dashboards", "Desde USD $3,000", "Propuesta a medida tras diagnóstico"],
      ["Acompañamiento Continuo", "Soporte, mejoras, evolución mensual y hosting VPS", "Desde USD $300/mes", "Contrato mensual según usuarios y SLA"],
      ["Servicios Especializados", "Auditoría de bases de datos, optimización, capacitación y reportes puntuales", "USD $60 – $120/hora", "Bolsa de horas o entregable fijo"],
    ],
  },
  {
    title: "Contabilidad y Fiscal RD",
    subtitle: "Contabilidad, igualas, nómina y cumplimiento DGII",
    icon: ReceiptText,
    offers: [
      ["Iguala Contable Mensual", "Contabilidad completa, impuestos y reportes DGII", "Desde RD$ 8,000/mes", "Contrato anual según volumen y complejidad"],
      ["Outsourcing Fiscal y Nómina", "Nómina TSS/ISR/INFOTEP, ITBIS, retenciones y e-CF", "Desde RD$ 6,000/mes", "Mensual según cantidad de empleados"],
      ["Consultoría Fiscal Puntual", "Planeación fiscal, regularización y auditoría interna", "USD $80 – $150/hora", "Proyecto o por hora"],
    ],
  },
];

const faqs = [
  ["¿Cuánto cuesta implementar Odoo en RD?", "La inversión depende de los módulos, usuarios, migración e integraciones. Los proyectos suelen iniciar desde USD $3,000 y se cotizan después del diagnóstico."],
  ["¿Ofrecen igualas contables mensuales?", "Sí. Gestionamos contabilidad, impuestos y reportes DGII mediante igualas dimensionadas según el volumen y la complejidad de cada empresa."],
  ["¿Trabajan con empresas fuera de Santo Domingo?", "Sí. Atendemos empresas en toda República Dominicana y el Caribe mediante una modalidad híbrida, con acompañamiento remoto y presencial cuando el proyecto lo requiere."],
  ["¿Puedo empezar solo con tecnología o solo con contabilidad?", "Sí. Cada práctica puede contratarse de forma independiente. Cuando ambas participan, coordinamos una solución integral bajo una sola firma."],
  ["¿Cómo es el proceso de diagnóstico?", "Iniciamos con una conversación de calificación, revisamos el contexto operativo y definimos alcance, prioridades, riesgos y la modalidad de colaboración recomendada."],
];

function Home() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Operación empresarial respaldada por tecnología y datos"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
        <Container className="relative z-10 py-32">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow variant="light">Tecnología Empresarial · Contabilidad y Fiscal RD</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Transformamos operaciones empresariales integrando{" "}
                <span className="text-gradient-brand">tecnología y cumplimiento</span> contable-fiscal.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver/90">
                Implementamos Odoo 18 adaptado a República Dominicana, fortalecemos la infraestructura
                de datos y acompañamos la gestión contable y fiscal de tu empresa — con el rigor técnico
                de una firma especializada.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaLink to="/contacto" variant="primary" size="lg">
                  Solicitar diagnóstico gratuito <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <a href="#modalidades" className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-heading text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15">
                  Ver modalidades de colaboración
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading text-3xl font-bold text-white">{s.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-silver/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-white py-8">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Empresas que confían en nosotros</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Empresa asociada", "Organización aliada", "Cliente corporativo", "Grupo empresarial"].map((name) => (
              <div key={name} className="flex h-14 items-center justify-center rounded-xl border border-dashed border-border bg-mist px-3 text-center font-heading text-xs font-semibold text-muted-foreground">
                {name} · Logo provisional
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="¿Por qué Korventis?"
            title="Un aliado que entiende tu negocio"
            subtitle="Una firma, dos disciplinas coordinadas y una visión completa de tu operación."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyKorventis.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestra firma"
            title="Dos prácticas, una sola firma"
            subtitle="Combinamos tecnología empresarial y cumplimiento contable-fiscal para que tu empresa opere con eficiencia y en regla."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {practices.map((practice, i) => (
              <Reveal as="article" key={practice.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-card sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow"><practice.icon className="h-7 w-7" /></div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-sky">{practice.eyebrow}</span>
                  </div>
                  <h3 className="mt-7 font-heading text-2xl font-bold text-navy">{practice.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {practice.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy"><Check className="h-4 w-4 shrink-0 text-sky" />{item}</li>)}
                  </ul>
                  <a href={`#${practice.id}`} className="mt-8 inline-flex items-center gap-2 self-start font-heading text-sm font-semibold text-sky transition-all hover:gap-3">{practice.cta}<ArrowRight className="h-4 w-4" /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="tecnologia" className="scroll-mt-20 overflow-hidden bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl bg-gradient-navy p-8 text-white shadow-elevated sm:p-10">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-sky"><BriefcaseBusiness className="h-7 w-7" /></div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-silver/70">Plataforma empresarial integrada</p>
                <p className="mt-3 font-heading text-3xl font-bold">Una fuente confiable para operar, cumplir y decidir.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Operación", "Finanzas", "Clientes", "Analítica"].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-silver">{item}</div>)}
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Tecnología Empresarial"
                title="Odoo 18 República Dominicana"
                subtitle="Localización completa adaptada a la normativa dominicana."
                className="max-w-xl"
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Localización DGII: reportes 606, 607, 608, 609",
                  "Facturación electrónica (e-CF) conforme a DGII",
                  "Nómina RD: TSS, ISR, INFOTEP",
                  "ITBIS, retenciones y anticipos",
                  "Contabilidad, ventas, compras, inventario, CRM y manufactura",
                  "Integración con Power BI para reportes gerenciales",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/15 text-sky">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-navy/80">{point}</span>
                  </li>
                ))}
              </ul>
              <CtaLink to="/contacto" variant="navy" size="lg" className="mt-9">
                Evaluar implementación <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="modalidades" className="scroll-mt-20 bg-white py-24">
        <Container>
          <SectionHeading eyebrow="Inversión flexible" title="Modalidades de colaboración" subtitle="Cada proyecto se estructura según su alcance. Estos son los rangos referenciales según el tipo de colaboración." />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {modalities.map((modality, i) => (
              <Reveal as="article" key={modality.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-mist p-7 sm:p-9">
                  <div className="flex items-start gap-4 border-b border-border pb-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><modality.icon className="h-6 w-6" /></span>
                    <div><h3 className="font-heading text-xl font-bold text-navy">{modality.title}</h3><p className="mt-1 text-sm text-muted-foreground">{modality.subtitle}</p></div>
                  </div>
                  <div className="divide-y divide-border">
                    {modality.offers.map(([title, scope, investment, type]) => (
                      <div key={title} className="py-6">
                        <h4 className="font-heading font-semibold text-navy">{title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{scope}</p>
                        <p className="mt-4 font-heading text-lg font-bold text-brand">{investment}</p>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">{type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground">Los rangos indicados son referenciales. Cada propuesta se estructura tras un diagnóstico gratuito considerando alcance, volumen, cantidad de usuarios y nivel de personalización requerido.</p>
        </Container>
      </section>

      <section id="contabilidad" className="scroll-mt-20 bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Contabilidad y Fiscal RD"
                title="Igualas contables y cumplimiento fiscal"
                subtitle="Acompañamiento contable recurrente para empresas dominicanas."
                className="max-w-xl"
              />
              <ul className="mt-8 space-y-4">{["Contabilidad mensual completa", "Preparación y presentación de impuestos", "Reportes DGII (606, 607, 608, 609)", "Nómina TSS, ISR, INFOTEP", "Facturación electrónica e-CF", "Estados financieros y análisis de costos", "Planeación fiscal y regularización"].map((point) => <li key={point} className="flex items-center gap-3 text-sm font-medium text-navy"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/15 text-sky"><Check className="h-4 w-4" /></span>{point}</li>)}</ul>
              <CtaLink to="/contacto" variant="navy" size="lg" className="mt-9">Evaluar iguala contable <ArrowRight className="h-4 w-4" /></CtaLink>
            </div>
            <Reveal delay={120}>
              <div className="rounded-3xl bg-gradient-navy p-8 text-white shadow-elevated sm:p-10">
                <Landmark className="h-12 w-12 text-sky" />
                <p className="mt-7 font-heading text-3xl font-bold">Cumplimiento que protege la continuidad de tu empresa.</p>
                <p className="mt-4 leading-relaxed text-silver/80">Un equipo que conoce tu operación, mantiene tus obligaciones al día y convierte la contabilidad en información útil para gerencia.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">{["DGII", "TSS", "e-CF", "Estados financieros"].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-silver">{item}</div>)}</div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-navy py-16 text-white"><Container><div className="grid gap-8 text-center sm:grid-cols-3">{[["100%", "Cumplimiento DGII"], ["99.9%", "Disponibilidad de sistemas"], ["24h", "Tiempo de respuesta"]].map(([value, label]) => <div key={label}><p className="font-heading text-4xl font-bold text-sky">{value}</p><p className="mt-2 text-sm uppercase tracking-wide text-silver/75">{label}</p></div>)}</div></Container></section>

      <section className="bg-white py-24"><Container><SectionHeading eyebrow="Experiencia aplicada" title="Resultados que construiremos contigo" subtitle="Estos espacios serán actualizados con experiencias verificadas y autorizadas, respetando la confidencialidad de cada organización." /><div className="mt-14 grid gap-6 lg:grid-cols-2">{[[BarChart3, "Visibilidad ejecutiva", "Caso en preparación sobre consolidación de indicadores y decisiones respaldadas por datos."], [Network, "Continuidad operativa", "Caso en preparación sobre estabilidad, protección de información y reducción de riesgos operativos."]].map(([Icon, title, text], i) => { const CaseIcon = Icon as typeof BarChart3; return <Reveal key={title as string} delay={i * 100}><article className="h-full rounded-3xl border border-dashed border-border bg-mist p-8"><CaseIcon className="h-8 w-8 text-sky" /><p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Caso provisional</p><h3 className="mt-2 font-heading text-xl font-bold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text as string}</p></article></Reveal>; })}</div></Container></section>

      <section className="bg-mist py-24"><Container><SectionHeading eyebrow="Preguntas frecuentes" title="Respuestas para tomar el próximo paso" /><div className="mx-auto mt-12 max-w-4xl space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-border bg-white p-5 shadow-card"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-navy">{question}<ChevronDown className="h-5 w-5 shrink-0 text-sky transition-transform group-open:rotate-180" /></summary><p className="mt-4 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></Container></section>

      <section className="bg-white py-24"><Container><div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div className="lg:sticky lg:top-28"><SectionHeading align="left" eyebrow="Diagnóstico inicial" title="Cuéntanos qué necesita tu empresa" subtitle="En cuatro pasos breves podremos comprender tu contexto y preparar una conversación más productiva." className="max-w-lg" /><div className="mt-8 space-y-4">{["Selecciona una o ambas prácticas", "Comparte el contexto principal", "Déjanos tus datos de contacto", "Recibe respuesta en menos de 24 horas hábiles"].map((item, i) => <div key={item} className="flex items-center gap-3 text-sm font-medium text-navy"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-sky">{i + 1}</span>{item}</div>)}</div></div><Reveal delay={100}><QualificationForm /></Reveal></div></Container></section>
    </SiteShell>
  );
}
