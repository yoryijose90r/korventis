import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu Diagnóstico — Korventis" },
      {
        name: "description",
        content:
          "Contacta a Korventis y solicita tu diagnóstico empresarial. Tecnología, datos y consultoría para transformar tu operación.",
      },
      { property: "og:title", content: "Contacto | Korventis" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const info = [
  { icon: Mail, t: "Correo", v: "contacto@korventis.net", d: "Respondemos en menos de 24h" },
  { icon: Phone, t: "Teléfono", v: "+1 (829) 686-2720", d: "Lun a Vie, 9am - 5pm" },
  { icon: MapPin, t: "Ubicación", v: "Santo Domingo", d: "Caribe & Latinoamérica" },
  { icon: Clock, t: "Horario", v: "9:00 - 17:00", d: "Lunes a viernes" },
];

function Contacto() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu <span className="text-gradient-brand">transformación</span>
          </>
        }
        subtitle="Cuéntanos sobre tu empresa y descubre cómo tecnología, datos y estrategia pueden fortalecer el núcleo de tu operación."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Estamos para ayudarte"
                title="Conversemos sobre tu próximo paso"
                subtitle="Elige el canal que prefieras. Un consultor de Korventis te acompañará desde el primer contacto."
                className="max-w-md"
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {info.map((item, i) => (
                  <Reveal key={item.t} delay={i * 70}>
                    <div className="h-full rounded-2xl border border-border bg-mist p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.t}
                      </div>
                      <div className="mt-1 font-heading font-semibold text-navy">{item.v}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{item.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-6" delay={200}>
                <div className="flex items-start gap-4 rounded-2xl bg-gradient-navy p-6 text-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-sky">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-heading font-semibold">Diagnóstico empresarial</div>
                    <p className="mt-1 text-sm text-silver/80">
                      En la sesión inicial compartimos una muestra de los hallazgos (aprox. 20% de
                      las oportunidades detectadas) para que veas el valor real. El informe completo,
                      con el plan de mejora detallado, forma parte del servicio de diagnóstico.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
