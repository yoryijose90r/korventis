import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";
import { ContactFallback } from "@/components/site/lead-submit";
import { ConversationVsDiagnosis } from "@/components/site/offer-blocks";
import { CONTACT } from "@/lib/offer";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => seo("/contacto", "Contacto | Agenda una conversación inicial — Korventis", "Agenda una conversación inicial sin costo con Korventis para definir el servicio adecuado para tu empresa."),
  validateSearch: (s: Record<string, unknown>): { servicio?: string; plan?: string } => ({
    servicio: typeof s.servicio === "string" ? s.servicio : undefined,
    plan: typeof s.plan === "string" ? s.plan.slice(0, 80) : undefined,
  }),
  component: Contacto,
});

const info = [
  { icon: Mail, t: "Correo", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, t: "Teléfono / WhatsApp", v: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
  { icon: MapPin, t: "Dirección", v: CONTACT.address },
  { icon: Clock, t: "Horario", v: CONTACT.hours },
];

function Contacto() {
  const { servicio, plan } = Route.useSearch();
  return (
    <SiteShell>
      <PageHero eyebrow="Contacto" title="Agenda una conversación inicial" subtitle="Sin costo. Conocemos tus necesidades y te indicamos el servicio adecuado." />
      <section className="bg-background py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading align="left" eyebrow="Canales" title="Hablemos" subtitle={CONTACT.responseCommitment} />
            <dl className="mt-8 space-y-5">
              {info.map((i) => (
                <div key={i.t} className="flex gap-4">
                  <i.icon className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{i.t}</dt>
                    <dd className="mt-1 font-medium text-navy">{i.href ? <a href={i.href} className="hover:text-sky">{i.v}</a> : i.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-8"><ContactFallback /></div>
          </div>
          <ContactForm area={servicio} plan={plan} />
        </Container>
      </section>
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Primer paso" title="¿Qué incluye cada etapa?" />
          <div className="mx-auto mt-10 max-w-4xl"><ConversationVsDiagnosis /></div>
        </Container>
      </section>
    </SiteShell>
  );
}
