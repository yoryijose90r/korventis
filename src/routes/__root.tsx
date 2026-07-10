import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KORVENTIS | Transformación Empresarial con Tecnología y Datos" },
      {
        name: "description",
        content:
          "Fortalecemos el núcleo de tu empresa con infraestructura, Business Intelligence, automatización y consultoría contable. Solicita tu diagnóstico gratuito.",
      },
      {
        name: "keywords",
        content:
          "consultoría tecnológica, Business Intelligence, infraestructura TI, automatización, bases de datos, Power BI, consultoría contable, transformación digital, Korventis",
      },
      { name: "author", content: "Korventis" },
      { property: "og:title", content: "KORVENTIS | Transformación Empresarial con Tecnología y Datos" },
      {
        property: "og:description",
        content:
          "Fortalecemos el núcleo de tu empresa con infraestructura, Business Intelligence, automatización y consultoría contable. Solicita tu diagnóstico gratuito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Korventis" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KORVENTIS | Transformación Empresarial con Tecnología y Datos" },
      { name: "twitter:description", content: "Fortalecemos el núcleo de tu empresa con infraestructura, Business Intelligence, automatización y consultoría contable. Solicita tu diagnóstico gratuito." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/82ee97e0-e565-44f1-b4e8-01d49f1fad30/id-preview-54ecbd17--27f17379-6348-4a71-8915-2d104df1ceff.lovable.app-1783689047252.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/82ee97e0-e565-44f1-b4e8-01d49f1fad30/id-preview-54ecbd17--27f17379-6348-4a71-8915-2d104df1ceff.lovable.app-1783689047252.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Korventis",
          slogan: "Technology, Data & Business Consulting",
          description:
            "Firma de consultoría que integra tecnología, datos y estrategia empresarial.",
          areaServed: ["Caribe", "Latinoamérica"],
          knowsAbout: [
            "Infraestructura Tecnológica",
            "Business Intelligence",
            "Bases de Datos",
            "Automatización",
            "Consultoría Contable",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
