import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  beforeLoad: () => {
    throw redirect({ to: "/soluciones" });
  },
  component: () => null,
});
