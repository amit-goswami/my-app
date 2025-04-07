import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ROUTES } from "../types/route.interface";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to={`${ROUTES.HOME}`} className="[&.active]:font-bold">
          Home
        </Link>
        <Link to={`${ROUTES.PATTERN}`} className="[&.active]:font-bold">
          Pattern
        </Link>
        <Link to={`${ROUTES.ARRAY}`} className="[&.active]:font-bold">
          Array
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
