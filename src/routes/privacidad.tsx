import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero, Container } from "@/components/site/primitives";
import { CONTACT } from "@/lib/offer";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Korventis" },
      { name: "description", content: "Cómo Korventis trata los datos enviados mediante los formularios de su sitio web." },
      { property: "og:title", content: "Política de privacidad | Korventis" },
      { property: "og:description", content: "Tratamiento de los datos enviados en los formularios del sitio de Korventis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <SiteShell>
      <PageHero eyebrow="Privacidad" title="Política de privacidad" />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-5 text-muted-foreground">
          <p>Los datos que envías en nuestros formularios (nombre, correo, teléfono, empresa, área de interés y mensaje) se usan únicamente para responder tu solicitud.</p>
          <p>No vendemos ni compartimos esta información con fines publicitarios.</p>
          <p>Para consultar, corregir o eliminar tus datos, escríbenos a {CONTACT.email}.</p>
          <p className="text-sm">Las solicitudes enviadas desde los formularios se reciben a través de Web3Forms, proveedor externo de recepción de formularios, y se entregan a contacto@korventis.net. El plazo de conservación de los datos está pendiente de definición por Korventis y se publicará antes de la versión definitiva de esta política.</p>
        </Container>
      </section>
    </SiteShell>
  );
}
