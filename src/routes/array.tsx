// import "../features/array/index";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ROUTES } from "../types/route.interface";
import MainWrapper from "../components/wrapper";
import Button from "../components/button";

export const Route = createFileRoute(ROUTES.ARRAY)({
  component: Array,
});

function Array() {
  const router = useRouter();

  const handleNavigation = () => {
    router.navigate({
      to: `${ROUTES.HOME}`,
    });
  };

  return (
    <MainWrapper>
      <Button
        variant="primary"
        children="Go to Home"
        className="w-1/2"
        onClick={() => handleNavigation()}
      />
    </MainWrapper>
  );
}
