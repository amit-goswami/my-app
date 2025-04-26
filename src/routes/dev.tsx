import Development from "../features/dev";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dev")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Development />
    </div>
  );
}
