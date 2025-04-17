import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "../types/route.interface";
import { useRouter } from "@tanstack/react-router";
import MainWrapper from "../components/wrapper";
import Button from "../components/button";

export const Route = createFileRoute(ROUTES.HOME)({
  component: Index,
});

function Index() {
  const router = useRouter();

  return (
    <MainWrapper>
      <div className="flex gap-4">
        {Object.keys(ROUTES).map((key) => {
          return (
            <Button
              key={key}
              variant="primary"
              children={ROUTES[key as keyof typeof ROUTES]}
              className="w-full"
              onClick={() => {
                router.navigate({
                  to: `${ROUTES[key as keyof typeof ROUTES]}`,
                });
              }}
            />
          );
        })}
      </div>
    </MainWrapper>
  );
}
